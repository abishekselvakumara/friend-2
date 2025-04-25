import React from "react";
import figma from "../assets/figma.png";
import illustrator from "../assets/illustrator.jpg";
import canva from "../assets/canva.png";
import photoshop from "../assets/photoshop.jpg";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";

// Updated skill list with proper image-name match
const skills = [
  { img: figma, name: "Figma", desc: "Design and prototype UI with collaborative features" },
  { img: illustrator, name: "Adobe Illustrator", desc: "Vector graphic design software" },
  { img: canva, name: "Canva", desc: "Online design and publishing tool" },
  { img: photoshop, name: "Adobe Photoshop", desc: "Photo editing and digital art software" },
  { img: html, name: "HTML", desc: "The standard language for creating web pages" },
  { img: css, name: "CSS", desc: "Style sheet language for designing HTML elements" },
  { img: javascript, name: "JavaScript", desc: "The programming language of the web" },
];


const Skills = () => {
  return (
    <div
      id="skills"
      data-aos="fade-up"
      data-aos-delay="250"
      className="w-full py-16 bg-gradient-to-b from-gray-200/10 to-white relative"
    >
      {/* Semi-transparent blurred background overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section title */}
        <div className="text-center mb-16 group">
          <h2 className="text-4xl font-bold text-red-600 inline-block relative pb-2">
            MY SKILLS
            {/* Animated underline on hover */}
            <span className="absolute bottom-0 left-0 h-1 bg-red-400 rounded-full
             w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Technologies I've mastered through experience
          </p>
        </div>

        {/* Skills grid layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-5 rounded-2xl bg-white/70
               backdrop-blur-md shadow-lg hover:shadow-xl border border-white/20 transition-all 
               duration-300 group relative overflow-hidden hover:bg-white/90 hover:border-red-200
                hover:scale-[1.03]"
            >
              {/* Hover gradient light effect */}
              <div className="absolute inset-0 bg-gradient-to-br
               from-red-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity
                duration-300 -z-10"></div>

              {/* Skill icon */}
              <div className="mb-4 p-3 bg-white/80 rounded-xl shadow-sm group-hover:rotate-6
               group-hover:bg-red-50 transition-all duration-300">
                <img
                  src={skill.img}
                  alt={`${skill.name} Icon`}
                  className="w-14 h-14 object-contain grayscale-[20%] group-hover:grayscale-0 
                  group-hover:scale-110 transition-all duration-300"
                />
              </div>

              {/* Skill name */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-red-600
               transition-colors duration-200">
                {skill.name}
              </h3>

              {/* Skill description */}
              <p className="text-sm text-gray-600 text-center group-hover:text-gray-800 
              group-hover:scale-[1.03] transition-all duration-200 px-2">
                {skill.desc}
              </p>

              {/* Optional animated border effect on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent
               group-hover:border-red-300/30 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
