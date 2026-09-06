import React from "react";
import hero from "../assets/hero.jpg";
import behance from "../assets/behance.svg";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import vishal from "../assets/Vishal P-UIUX-updated.pdf";

export default function Hero() {
  return (
    <section className="relative min-h-[650px] overflow-hidden bg-white">

      {/* Background Glow */}
      <div
        className="
          absolute
          right-[5%]
          top-[10%]
          w-[500px]
          h-[500px]
          rounded-full
          bg-orange-200/25
          blur-3xl
          pointer-events-none
        "
      />

      {/* Outer Orbit */}
      <div
        className="
          absolute
          right-[3%]
          top-[5%]
          w-[610px]
          h-[610px]
          rounded-full
          border
          border-blue-300/20
          pointer-events-none
        "
      />

      {/* Inner Orbit */}
      <div
        className="
          absolute
          right-[7%]
          top-[9%]
          w-[540px]
          h-[540px]
          rounded-full
          border
          border-red-300/20
          border-dashed
          pointer-events-none
        "
      />

      {/* Main Container */}
      <div
        className="
          relative
          z-10
          container
          mx-auto
          min-h-[650px]
          px-6
          lg:px-10
          flex
          items-center
        "
      >

        <div
          className="
            w-full
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-8
            items-center
          "
        >

          {/* ================= LEFT CONTENT ================= */}

          <div
            className="
              flex
              flex-col
              items-center
              lg:items-start
              text-center
              lg:text-left

              /* Small right shift */
              lg:pl-8

              pt-10
              lg:pt-0
            "
            data-aos="fade-right"
            data-aos-delay="200"
          >

            {/* Social Icons */}
            <div
              className="flex items-center gap-4 mb-5"
              data-aos="fade-up"
              data-aos-delay="300"
            >

              {/* Behance */}
              <a
                href="https://www.behance.net/vishalashish"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Behance"
                className="group hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={behance}
                  alt="Behance"
                  className="
                    w-12
                    h-12
                    object-contain
                    group-hover:scale-110
                    transition-transform
                    duration-300
                  "
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/vishal-parandhaman-587a7627a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="
                    w-12
                    h-12
                    object-contain
                    group-hover:scale-110
                    transition-transform
                    duration-300
                  "
                />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/mr_taurus_17"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={instagram}
                  alt="Instagram"
                  className="
                    w-12
                    h-12
                    object-contain
                    group-hover:scale-110
                    transition-transform
                    duration-300
                  "
                />
              </a>

            </div>

            {/* Tagline */}
            <div className="flex items-center gap-2 mb-3">

              <span className="tracking-[0.25em] text-xs font-medium text-slate-500">
                CREATIVE THINKER
              </span>

              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />

              <span className="tracking-[0.2em] text-xs font-medium text-slate-500">
                PROBLEM SOLVER
              </span>

              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />

              <span className="tracking-[0.2em] text-xs font-medium text-slate-500">
                DESIGNER
              </span>

            </div>

            {/* Name */}
            <h1
              className="
                text-5xl
                sm:text-6xl
                lg:text-[64px]
                font-extrabold
                tracking-tight
                leading-[1.05]
                text-slate-950
                mb-3
              "
            >
              Hi! I'm{" "}
              <span className="text-red-600">
                Vishal P
              </span>
            </h1>

            {/* Role */}
            <h2
              className="
                text-2xl
                sm:text-3xl
                font-bold
                text-blue-950
                mb-4
              "
            >
              Designer
            </h2>

            {/* Description */}
            <p
              className="
                max-w-[590px]
                text-[15px]
                sm:text-base
                leading-7
                text-slate-600
                mb-6
              "
            >
              Enthusiastic UI/UX Designer specializing in app and web design,
              prototyping, and user research. Proficient in Figma and Adobe
              Illustrator, with a passion for creating intuitive and
              user-centered designs. Eager to apply creative problem-solving
              and fresh ideas to real-world projects.
            </p>

            {/* Download CV */}
            <a
              href={vishal}
              download="Vishal-P-UIUX-CV.pdf"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                px-7
                py-3
                rounded-full
                bg-red-500
                text-white
                text-base
                font-medium
                shadow-lg
                shadow-red-500/20
                transition-all
                duration-300
                hover:bg-red-600
                hover:-translate-y-1
                hover:shadow-xl
              "
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 12l4.5 4.5m0 0l4.5-4.5M12 16.5V3"
                />
              </svg>

              Download CV

            </a>

          </div>

          {/* ================= RIGHT PROFILE ================= */}

          <div
            className="
              relative
              flex
              items-center
              justify-center
              min-h-[500px]
              lg:min-h-[580px]

              /* Move image slightly right */
              lg:translate-x-8
            "
            data-aos="fade-left"
            data-aos-delay="400"
          >

            {/* Profile Glow */}
            <div
              className="
                absolute
                w-[470px]
                h-[470px]
                rounded-full
                bg-gradient-to-r
                from-red-500
                via-blue-600
                to-emerald-400
                opacity-20
                blur-3xl
              "
            />

            {/* Gradient Ring */}
            <div
              className="
                relative
                w-[400px]
                h-[400px]
                sm:w-[440px]
                sm:h-[440px]
                lg:w-[490px]
                lg:h-[490px]
                rounded-full
                p-[25px]
                bg-gradient-to-r
                from-red-600
                via-blue-600
                to-emerald-400
                shadow-[0_20px_70px_rgba(255,165,0,0.3)]
              "
            >

              {/* White Inner Border */}
              <div
                className="
                  w-full
                  h-full
                  rounded-full
                  p-[10px]
                  bg-white
                "
              >

                <img
                  src={hero}
                  alt="Vishal P - UI/UX Designer"
                  className="
                    w-full
                    h-full
                    rounded-full
                    object-cover
                    object-center
                  "
                  loading="eager"
                />

              </div>

            </div>

            {/* Orbit Dots */}

            <span
              className="
                absolute
                top-[10%]
                right-[8%]
                w-4
                h-4
                rounded-full
                bg-blue-600
                shadow-lg
              "
            />

            <span
              className="
                absolute
                left-[6%]
                top-[38%]
                w-5
                h-5
                rounded-full
                bg-red-500
                shadow-lg
              "
            />

            <span
              className="
                absolute
                bottom-[12%]
                right-[8%]
                w-4
                h-4
                rounded-full
                bg-emerald-500
                shadow-lg
              "
            />

            <span
              className="
                absolute
                bottom-[8%]
                left-[27%]
                w-2.5
                h-2.5
                rounded-full
                bg-red-700
              "
            />

          </div>

        </div>

      </div>

    </section>
  );
}