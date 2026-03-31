"use client";
import MobileNav from "./mobile-nav";
import Nav from "./nav";
import Logo from "./Logo";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
const Header = () => {
  const menuLinks = [
    { label: "Home", link: "/" },
    {
      label: "About us",
      link: "",
      children: [
        { label: "About us", link: "/about" },
        { label: "Sustainability", link: "/sustainability" },
        { label: "Per sqm concept", link: "/per-sqm-concept" },
      ],
    },
    {
      label: "Products",
      link: "",
      children: [
        { label: "Air Purifier", link: "/products/air-purifier" },
        { label: "Cooling jacket", link: "/products/cooling-jacket" },
        {
          label: "Electric Towel Warmer",
          link: "/products/electric-towel-warmer",
        },
        {
          label: "kitchen Air Conditioner",
          link: "/products/kitchen-air-conditioner",
        },
        { label: "Push Pull Locks", link: "/products/push-pull-door-locks" },
      ],
    },
    {
      label: "Commercial Solutions",
      link: "",
      children: [
        {
          label: "Air Powered Laundry Collection",
          link: "/solutions/ai-powered-laundry",
        },
        {
          label: "Building Automation System",
          link: "/solutions/building-and-energy-managememt",
        },
        {
          label: "Centralised Vacuum Cleaning",
          link: "/solutions/centralised-vacuum",
        },
        {
          label: "DC Lighting & Automation",
          link: "/solutions/dc-lighting-and-automation",
        },
        {
          label: "Highrise Community Automation",
          link: "/solutions/highrise-community-automation",
        },
        { label: "Mirror TV", link: "/solutions/mirror-tv" },
        {
          label: "Office & AV Automation",
          link: "/solutions/office-and-av-automation",
        },
        {
          label: "Public Address & Evacuation",
          link: "/solutions/public-adress-and-evacuation",
        },
        {
          label: "Retrofit Wireless Automation",
          link: "/solutions/retrofit-wireless-automation",
        },
        {
          label: "Garbage & Linen Chute",
          link: "/solutions/garbage-and-linen-chutes",
        },
      ],
    },
    {
      label: "Platforms",
      link: "",
      children: [
        { label: "Aguardio: Water Conservation", link: "/platforms/aguardio" },
        { label: "Aiello: Voice Assist Concierge", link: "/platforms/aiello" },
        {
          label: "Analytika: Building Diagnostics",
          link: "/platforms/analytika",
        },
        { label: "Archflow: HVAC Optimisation", link: "/platforms/archflow" },
        { label: "Deepscent: Digital Fragrance", link: "/platforms/deepscent" },
        { label: "Mylo: Pool Monitoring ", link: "/platforms/mylo" },
      ],
    },
    { label: "Blogs", link: "#" },
    { label: "Careers", link: "/careers" },
  ];
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathName = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const normalizedPath = pathName.toLowerCase();
    if (
      normalizedPath !== "/" &&
      normalizedPath !== "/about" &&
      normalizedPath !== "/sustainability" &&
      normalizedPath !== "/per-sqm-concept" &&
      normalizedPath !== "/careers" &&
      normalizedPath !== "/contact" &&
      normalizedPath !== "/blogs"
    ) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, [pathName]);
  const textColor = scrolled
    ? "text-white"
    : isDark
      ? "text-black"
      : "text-white";

  const colorMode = scrolled ? false : isDark ? true : false;

  return (
    <header
      className={`fixed w-full top-0 left-0 z-20 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-lg" : ""}`}
    >
      <nav className="w-full flex container py-4 items-center gap-5 justify-between">
        <Logo
          mode={colorMode ? "light" : "dark"}
          className="w-45 relative z-10"
        />
        <Nav mode={textColor} data={menuLinks} />
        <MobileNav data={menuLinks} />

        <div className="hidden  lg:flex items-center gap-4">
          <Link href={"/contact"}>
            <button className="btn">Contact</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
