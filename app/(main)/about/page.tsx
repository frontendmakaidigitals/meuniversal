"use client";
import Form from "../(Home-Page)/form";
import Image from "next/image";
import { RefreshCcw, Settings, Leaf, Handshake } from "lucide-react";
const missionData = [
  {
    icon: RefreshCcw,
    title: "Reliable System Integration",
    desc: "Deliver dependable automation and smart infrastructure systems designed for real building environments.",
  },
  {
    icon: Settings,
    title: "Operational Efficiency",
    desc: "Improve building performance through intelligent monitoring, automation, and optimized system control.",
  },
  {
    icon: Leaf,
    title: "Sustainable Engineering",
    desc: "Support responsible energy use and environmentally conscious infrastructure solutions.",
  },
  {
    icon: Handshake,
    title: "Long-Term Client Partnerships",
    desc: "Work closely with developers, consultants, and operators to deliver consistent value across projects.",
  },
];
import CTASection from "../sections/cta";
const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section with leaf image */}
      <section className=" relative pt-[8rem] pb-[2rem]">
        <div className="absolute top-0 left-0 z-10 w-full h-full " />
        <Image
          src={"/about/hero.jpg"}
          fill
          alt={"about hero"}
          className="object-cover"
        />
        <div className="container relative z-10 flex flex-col justify-center pb-20">
          <div className="">
            <h1
              className={`text-4xl uppercase text-center lg:text-4xl font-rubik mb-6 text-gray-50`}
            >
              About us
            </h1>
            <p
              className={`text-sm text-center max-w-6xl mx-auto leading-relaxed text-gray-100`}
            >
              ME Universal is a smart infrastructure and technology solutions
              company focused on delivering intelligent building systems that
              enhance operational efficiency and support responsible energy use.
              Established in 2014, we work closely with developers, consultants,
              and project stakeholders to integrate advanced technologies into
              modern buildings and infrastructure projects. Our role is to
              connect innovative systems with practical building operations,
              ensuring solutions are reliable, scalable, and easy to manage in
              real environments. We carefully design and implement systems that
              help buildings operate more efficiently while reducing energy
              consumption and environmental impact.
            </p>
          </div>
        </div>
        <div className="relative container lg:max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-4 lg:gap-0 overflow-hidden">
          <div className="w-full md:w-1/3 h-[200px] md:h-[240px] relative">
            <Image
              src={"/about/img-1.jpg"}
              alt={"about"}
              fill
              className="object-cover"
            />
          </div>

          <div className="w-full md:w-1/3 h-[250px] md:h-[310px] relative">
            <Image
              src={"/about/img-2.jpg"}
              alt={"about"}
              fill
              className="object-cover"
            />
          </div>

          <div className="w-full md:w-1/3 h-[200px] md:h-[240px] relative">
            <Image
              src={"/about/img-3.jpg"}
              alt={"about"}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <div className="container pt-16 pb-14 grid items-center text-lg grid-cols-1 lg:grid-cols-2 gap-8">
        {/* IMAGE */}

        {/* TEXT */}
        <div className=" order-2 lg:order-2">
          <div>
            <h2 className=" font-[500] tracking-tight mb-4 font-montserrat text-4xl">
              OUR VISION
            </h2>
            <p className=" space-y-3">
              <span className="block">
                Our vision is to be a trusted and reliable building and smart
                infrastructure partner across key global markets.
              </span>

              <span className="block">
                We support organisations as they transition toward smarter, more
                efficient environments. By integrating future-ready
                technologies, we help improve daily building performance while
                remaining mindful of energy use and environmental
                responsibility.
              </span>

              <span className="block">
                As infrastructure demands continue to evolve, our focus remains
                on practical engineering solutions that deliver sustainable,
                long-term value. Through strong partnerships and responsible
                implementation, we help clients build with confidence and
                prepare for future demands.
              </span>

              <span className="block ">
                We deliver technology-driven solutions tailored specifically to
                complex building needs so nothing stands in the way of progress.
              </span>
            </p>
          </div>
        </div>
        <div className="h-[260px] lg:h-[440px] w-full relative order-1 lg:order-1">
          <Image
            src="/about/our-vision.jpg"
            alt="About"
            fill
            className="object-cover"
          />
        </div>
      </div>
      {/* Our Purpose Section */}
      <section className="bg-[#0b0b1a] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl  font-montserrat tracking-tight mb-4">
            OUR MISSION
          </h2>

          {/* Subtext */}
          <p className="max-w-3xl mx-auto text-sm md:text-base text-gray-300 mb-14">
            To support developers and organizations in achieving operational
            excellence through dependable, well-engineered automation solutions.
            We deliver systems that enhance efficiency, improve building
            performance, and contribute to sustainable development.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {missionData.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-gradient-to-br from-[#14142b] to-[#1c1c3a] border border-white/10 rounded-xl p-6 text-center hover:border-white/20 transition"
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <Icon className="w-8 h-8 text-white opacity-90" />
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-sm md:text-base mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-[#efefef] py-20">
        <div className="container mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mb-10 text-gray-800">
            STRATEGY & VALUE
          </h2>

          {/* Image */}
          <div className="relative w-full h-[220px] md:h-[320px] lg:h-[380px] mb-10">
            <Image
              src="/about/strategy.jpg" // replace with your image path
              alt="Strategy"
              fill
              className="object-cover"
            />
          </div>

          {/* Paragraphs */}
          <div className="max-w-5xl mx-auto space-y-6 text-sm md:text-base text-gray-700 leading-relaxed">
            <p>
              ME Universal focuses on practical technology integration that
              supports real-world building performance. Our strategy is built
              around combining advanced automation technologies with reliable
              engineering practices to create systems that are both effective
              and sustainable. By partnering with leading global technology
              providers and maintaining strong technical expertise, we deliver
              solutions that address the evolving needs of modern
              infrastructure. From smart building systems and automation
              platforms to energy optimisation technologies, every solution is
              designed to improve operational performance while supporting
              responsible resource use.
            </p>

            <p>
              Our values are centered on reliability, technical clarity, and
              long-term collaboration. We work closely with project teams to
              ensure that every system we implement is aligned with operational
              goals, environmental responsibility, and future scalability.
              Through careful planning and consistent delivery, we help
              organizations build smarter infrastructure that performs
              efficiently for years to come.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-20">
        <Form />
      </section>
    </div>
  );
};

export default AboutPage;
