import Image from "next/image";
import Form from "../(Home-Page)/form";
import {
  LineChart,
  Brain,
  FileSearch,
  SlidersHorizontal,
  GitBranch,
} from "lucide-react";
const Page = () => {
  const features = [
    {
      icon: LineChart,
      text: "Evaluate technologies in real-time",
    },
    {
      icon: Brain,
      text: "Understand system integration possibilities",
    },
    {
      icon: FileSearch,
      text: "Explore design-friendly smart solutions",
    },
    {
      icon: SlidersHorizontal,
      text: "Align automation with architectural intent",
    },
    {
      icon: GitBranch,
      text: "Make confident technology decisions",
    },
  ];

  return (
    <div>
      <section className="bg-[#15141D] pt-44 pb-10">
        <div className="container flex justify-center h-full items-center">
          <div className="text-white text-center">
            <h1 className="text-5xl mb-8 font-montserrat">Per Sqm concept</h1>
            <p className="text-2xl">See. Experience. Innovate.</p>
          </div>
        </div>
      </section>
      <section className="h-[400px] relative">
        <Image
          src={"/sqm/hero.png"}
          alt={"per sqm"}
          fill
          className="object-cover"
        />
      </section>

      <section className="container">
        <p className="text-center py-5">
          PER SQM is an immersive building technology and lifestyle experience
          space by ME Universal. It is where smart automation, energy solutions,
          air quality systems, entertainment technologies, and modern living
          concepts come together. Not just to be displayed, but to be
          experienced.
        </p>
      </section>
      <section className="py-8 bg-[#15141D] mt-6">
        <div className="container">
          <p className="text-center text-2xl text-white">
            Because when it comes to intelligent spaces{" "}
            <span className="capitalize bg-gradient-to-t from-[#CCC5FF] to-[#5344C6] bg-clip-text text-transparent">
              seeing is believing !
            </span>
          </p>
        </div>
      </section>

      <section className="mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 container">
          <div className="relative h-[230px] lg:h-[370px]">
            <Image
              src={"/sqm/about.png"}
              className=""
              fill
              alt={"object-cover"}
            />
          </div>
          <div>
            <h2 className="text-4xl font-montserrat mb-7">
              Multiple Innovations under one Roof for Residential & Commercial
              Projects
            </h2>
            <p className="space-y-5">
              <span className="block">
                PER SQM brings together a curated ecosystem of building
                technologies and lifestyle solutions under a single experiential
                platform.
              </span>{" "}
              <span className="block">
                From smart automation and energy management to air purification,
                ventilation, integrated waste systems, digital entertainment,
                and building solutions,  every system is selected to enhance how
                modern spaces function and feel. Instead of imagining how
                products will work inside a project, you can experience them
                firsthand.
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className=" mt-20">
        <div className="container mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-4xl font-montserrat lg:text-4xl font-[400] text-gray-800">
            This is not a <span className="line-through">Brochure</span>.
          </h2>

          <h3 className="text-4xl lg:text-4xl font-montserrat mt-3">
            It is{" "}
            <span className="underline text-indigo-600 font-medium">
              A LIVE ECOSYSTEM.
            </span>
          </h3>

          {/* Image Collage */}
        </div>
        <div className=" h-[500px] mt-10 w-full relative">
          <Image
            src={"/sqm/collage.png"}
            alt={""}
            fill
            className="object-contain hidden lg:block"
          />
          <Image
            src={"/sqm/collage-mobile.png"}
            alt={""}
            fill
            className="object-cover lg:hidden block"
          />
        </div>
      </section>

      <section className="bg-[#0b0b1a] text-white mt-20 py-20">
        <div className="container mx-auto px-4 text-center">
          {/* Top small text */}
          <p className="text-xs tracking-widest text-gray-400 mb-3 uppercase">
            PER SQM WAS CREATED AS A COLLABORATIVE SPACE.
          </p>

          {/* Heading */}
          <h2 className="text-xl md:text-3xl font-montserrat font-medium mb-12">
            DESIGNED FOR{" "}
            <span className="text-primary">RESIDENTS & DEVELOPERS</span>
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {features.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-gradient-to-br from-[#14142b] to-[#1c1c3a] border border-white/10 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:border-white/20 transition"
                >
                  <Icon className="w-10 h-10 mb-4 text-white opacity-90" />
                  <p className=" text-gray-300 leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>

          {/* Bottom text */}
          <p className="max-w-5xl mx-auto text-xs md:text-sm text-gray-400">
            We support both early-stage concept planning and advanced project
            discussions, helping bridge the gap between design vision and
            technical execution.
          </p>
        </div>
      </section>
      <section className="mt-20">
        <Form />
      </section>
    </div>
  );
};

export default Page;
