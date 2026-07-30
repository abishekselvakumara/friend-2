import React from "react";
import { FaBriefcase } from "react-icons/fa";

// Array of professional experiences
const experiences = [
   {
    id: 1,
    role: "Product Design Intern",
    company: "InfixHitech Innovations Pvt LTD",
    period: "January 2025 - May 2026",
    description:
      "I contributed to two live product projects, designing intuitive and user-centric interfaces from wireframes to high-fidelity designs. Working on real-world products enhanced my UX thinking, visual design skills, and understanding of building scalable digital experiences.",
    icon: <FaBriefcase className="text-purple-500 text-xl" />,
    type: "internship",
  },
  {
    id: 2,
    role: "UI/UX Designer Intern",
    company: "Atribs Software Systems Pvt LTD",
    period: "June 2025 - August 2025",
    description:
      "I was involved as a UX trainee in designing the company's new website and also created multiple logos and UI designs. This helped me gain hands-on experience in user experience design, visual design, and brand-oriented interfaces.",
    icon: <FaBriefcase className="text-purple-500 text-xl" />,
    type: "internship",
  },
 
  {
    id: 3,
    role: "Freelance Logo Designer",
    company: "InfixHitech Innovations Pvt LTD",
    period: "2024",
    description:
      "Designed a unique logo capturing the brand's innovative and modern identity. Focused on creating a memorable visual aligned with the company's tech-forward vision.",
    icon: <FaBriefcase className="text-purple-500 text-xl" />,
    type: "freelance",
  },
];

const Experience = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-delay="250"
      id="experience"
      className="w-full py-20 px-4 sm:px-8 bg-gray-50/40"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Professional <span className="text-red-600">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My career path and professional experience
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative">

          {/* Vertical timeline line */}
          <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-300"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`mb-12 flex flex-col sm:flex-row items-center ${
                index % 2 === 0 ? "sm:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline spacer */}
              <div className="hidden sm:block sm:w-1/2">
                {index % 2 !== 0 && <div className="h-full" />}
              </div>

              {/* Timeline dot */}
              <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-white shadow-lg"></div>
              </div>

              {/* Timeline spacer */}
              <div className="hidden sm:block sm:w-1/2">
                {index % 2 === 0 && <div className="h-full" />}
              </div>

              {/* Experience card */}
              <div
                className={`w-full sm:w-5/12 p-6 rounded-xl shadow-2xl bg-white border border-red-400 ${
                  index % 2 === 0 ? "sm:ml-8" : "sm:mr-8"
                }`}
              >
                {/* Icon and title */}
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-white shadow-sm">
                    {exp.icon}
                  </div>

                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {exp.role}
                    </h3>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                </div>

                {/* Duration */}
                <p className="text-gray-500 italic mb-2">{exp.period}</p>

                {/* Description */}
                <p className="text-gray-700">{exp.description}</p>

                {/* Experience type */}
                <div
                  className={`mt-4 px-3 py-1 rounded-full text-sm inline-block ${
                    exp.type === "internship"
                      ? "bg-green-100 text-green-800"
                      : exp.type === "freelance"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-purple-100 text-purple-800"
                  }`}
                >
                  {exp.type === "internship"
                    ? "Internship"
                    : exp.type === "freelance"
                    ? "Freelance Work"
                    : "Professional Experience"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;