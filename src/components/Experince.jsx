import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

// Array of professional and educational experiences
const experiences = [
  {
    id: 1,
    role: "Freelance Logo Designer",
    company: "InfixHitech Innovations",
    period: "2024",
    description:
      "Designed a unique logo capturing the brand's innovative and modern identity. Focused on creating a memorable visual aligned with the company’s tech-forward vision.",
    icon: <FaBriefcase className="text-purple-500 text-xl" />,
    type: "freelance",
  },
];


const Experience = () => {
  return (
    // Main section with AOS animation on scroll
    <section data-aos="fade-up" data-aos-delay="250" id="experience" 
    className="w-full py-20 px-4 sm:px-8 bg-gray-50/40">
      <div className="max-w-6xl mx-auto">
        
        {/* Section header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Professional <span className="text-red-600">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My career path and educational background
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative">
          
          {/* Vertical line in the center of timeline (only visible on larger screens) */}
          <div className="hidden sm:block absolute left-1/2 h-full w-1 bg-red-300"></div>

          {/* Loop through experiences array and render each item */}
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              // Alternate layout direction for each timeline item
              className={`mb-12 flex flex-col sm:flex-row ${index % 2 === 0 ? "sm:flex-row-reverse" : ""}`}
            >
              {/* Experience/Education card */}
              <div className={`sm:w-1/2 p-6 rounded-xl shadow-2xl bg-white border border-red-400`}>
                
                {/* Icon and title section */}
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

                {/* Description of the experience */}
                <p className="text-gray-700">{exp.description}</p>

                {/* Tag indicating the type (e.g., Work Experience) */}
                <div className="mt-4 px-3 py-1 rounded-full text-sm inline-block bg-blue-100 text-blue-800">
                  Work Experience
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
