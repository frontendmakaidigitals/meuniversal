"use client";

import { useState, useEffect, useRef } from "react";
import { Editor } from "@/components/blocks/editor-00/editor";
import Link from "next/link";

interface Blog {
  id: string;
  title: string;
  content: string;
  image: string;
  author: string;
  category: string;
  createdAt: string;
  slugTitle: string;
}

interface BlogsResponse {
  blogs: Blog[];
}

// ─── Page ─────────────────────────────────────────────────────────────────────
const Page = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [visibleCount, setVisibleCount] = useState(9);
  const [loading, setLoading] = useState(true);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const data: BlogsResponse = await res.json();
        setBlogs(data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // Infinite scroll
  useEffect(() => {
    if (!loadMoreRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisibleCount((prev) => prev + 6);
      },
      { threshold: 1 },
    );
    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [blogs]);

  const visibleBlogs = blogs.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* ── Header ── */}
      <header className="relative w-full overflow-hidden bg-stone-900">
        {/* Background */}
        <img
          src="/blogs.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-20 scale-105"
          style={{ objectPosition: "center 30%" }}
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-radial-[ellipse_80%_60%_at_50%_120%] from-transparent to-stone-400/30" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-stone-900" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 lg:py-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-10">
            <span className="block h-px flex-1 bg-white/10" />
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-100" />
              <span className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-purple-100">
                Latest News &amp; Articles
              </span>
            </div>
            <span className="block h-px flex-1 bg-white/10" />
          </div>

          {/* Heading + subheading — centered, clean */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-3">
              Our Blog
            </h1>
            <p className="text-stone-400 text-sm lg:text-base">
              Thoughts, stories, and ideas from our team.
            </p>
          </div>

          {/* Bottom accent */}
          <div className="mt-10 flex items-center gap-3">
            <span className="block h-0.5 w-8 bg-primary rounded-full" />
            <span className="block h-px flex-1 bg-white/10" />
          </div>
        </div>
      </header>

      {/* ── Blog grid ── */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        {loading ? (
          // Skeleton
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200 animate-pulse"
              >
                <div className="h-48 bg-stone-200" />
                <div className="p-4 space-y-3">
                  <div className="h-2.5 bg-stone-200 rounded-full w-1/4" />
                  <div className="h-4 bg-stone-200 rounded-full w-full" />
                  <div className="h-4 bg-stone-200 rounded-full w-3/4" />
                  <div className="h-3 bg-stone-100 rounded-full w-1/2 mt-4" />
                </div>
              </div>
            ))}
          </div>
        ) : blogs.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>

            {/* Infinite scroll trigger */}
            {visibleCount < blogs.length && (
              <div
                ref={loadMoreRef}
                className="mt-12 flex justify-center items-center gap-2 text-sm text-stone-400"
              >
                <span className="w-4 h-4 rounded-full border-2 border-stone-300 border-t-teal-600 animate-spin" />
                Loading more…
              </div>
            )}
          </>
        ) : (
          // Empty state
          <div className="flex flex-col items-center justify-center py-32 gap-3 text-stone-400">
            <svg
              className="w-10 h-10 opacity-40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v10a2 2 0 01-2 2z"
              />
            </svg>
            <p className="text-lg font-medium">No articles yet</p>
            <p className="text-sm">Check back soon.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Page;

// ─── Blog Card ────────────────────────────────────────────────────────────────
const BlogCard = ({ blog }: { blog: Blog }) => {
  const parsedContent =
    typeof blog.content === "string"
      ? (() => {
          try {
            return JSON.parse(blog.content);
          } catch {
            return null;
          }
        })()
      : blog.content;

  return (
    <Link href={`/blogs/${blog.slugTitle}`} className="group block h-full">
      <article className="h-full bg-white border border-stone-200 rounded-2xl overflow-hidden flex flex-col transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-stone-200/80">
        {/* Thumbnail */}
        <div className="relative h-48 w-full overflow-hidden shrink-0">
          <img
            src={`/api/uploads/${blog.image}`}
            alt={blog.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Category badge */}
          <span className="absolute top-3 left-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.65rem] font-semibold tracking-wide uppercase bg-primary text-white shadow-sm">
            {blog.category}
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-4 gap-2">
          <h3 className="font-semibold text-stone-900 leading-snug line-clamp-2 group-hover:text-primary/90 transition-colors">
            {blog.title}
          </h3>

          {parsedContent && (
            <div className="text-sm text-stone-500 line-clamp-2 flex-1">
              <Editor
                editorSerializedState={parsedContent}
                readOnly
                clampLines={2}
                blogPage={false}
              />
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between pt-3 mt-auto border-t border-stone-100 text-xs text-stone-400">
            <span>
              {new Date(blog.createdAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="font-medium text-stone-500">{blog.author}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};
