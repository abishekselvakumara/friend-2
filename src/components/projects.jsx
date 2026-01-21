import React, { useState } from "react";
import project1 from '../assets/project01.png';
import project2 from '../assets/project02.png';
import project3 from '../assets/project03.png';
import project4 from '../assets/project04.png';
import project5 from '../assets/project05.png';
import project6 from '../assets/project06.png';
import project7 from '../assets/project07.png';
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Velmora Gaming Website",
    description: "Cinematic survival game website UI/UX design focused on immersive storytelling, ancient obstacles, and a dark golden visual theme.",
    technologies: ["Figma", "UI/UX", "Web Design"],
    github: "#",
    demo: "https://www.behance.net/gallery/231631537/Project-Velmora",
    image: project1
  },
  {
    id: 2,
    title: "Sakthi Arts",
    description: "Sakthi Arts — a mobile UI/UX concept Case Study.",
    technologies: ["Figma", "Mobile UI", "UX Research"],
    github: "#",
    demo: "https://www.behance.net/gallery/213580823/Sakthi-Arts",
    image: project2
  },
  {
    id: 3,
    title: "Parallax Animation",
    description: "Created a parallax-animated website for the Benz G-Wagon car.",
    technologies: ["Figma", "Animation"],
    github: "#",
    demo: "https://www.behance.net/gallery/221675117/Parallax-Animation",
    image: project3
  },
  {
    id: 4,
    title: "Foodieland: The land of delicious",
    description: "This design uses a tiered layer cake layout to organize content into clear, visually stacked sections.",
    technologies: ["Figma", "UI Design", "Layout"],
    github: "#",
    demo: "https://www.behance.net/gallery/211992401/Foodieland-The-land-of-delicious",
    image: project4
  },
  {
    id: 5,
    title: "Slider Animation",
    description: "Created a Slider Animation for an Adult Drink.",
    technologies: ["Figma", "Animation"],
    github: "https://github.com/oualiCode/Portfolio-website",
    demo: "https://www.behance.net/gallery/219923701/Breezer-Beer-Page-Animation",
    image: project5 // Using same image as project2, you might want to add a different image
  },
  {
    id: 6,
    title: "Dropdown animation",
    description: "Created a dropdown animation for Nike Air Jordan.",
    technologies: ["Figma", "Animation"],
    github: "#",
    demo: "https://www.behance.net/gallery/220126669/PROJECT-NIKE",
    image: project6 // Using same image as project4, you might want to add a different image
  },
  {
    id: 7,
    title: "Spinning carousel",
    description: "Fashion.ai Chooses the Perfect Dress for you through AI.",
    technologies: ["Figma", "AI", "Animation"],
    github: "https://github.com/oualiCode/porfolio-reactJs-tailwindCss-Vite-2024-",
    demo: "https://www.behance.net/gallery/221105575/Fashion-AI-%28Spinning-carousel%29",
    image: project7 // Using same image as project1, you might want to add a different image
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + projectsPerPage >= projects.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - projectsPerPage : prevIndex - 1
    );
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + projectsPerPage);

  return (
    <section data-aos="fade-up" data-aos-delay="250" id="projects" className="w-full py-20 px-4 sm:px-8 
    relative bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 ">
          <h2 className="text-3xl font-bold text-gray-100 mb-2">
            My <span className="text-red-600">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent works and contributions
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-gray-300 p-2
             rounded-full shadow-md hover:bg-gray-100 z-10"
          >
            <FiChevronLeft className="text-gray-700 text-xl" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-gray-300 p-2 
            rounded-full shadow-md hover:bg-gray-100 z-10"
          >
            <FiChevronRight className="text-gray-700 text-xl" />
          </button>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow
                 duration-300"
              >
                {/* Project Image */}
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-red-100 text-blue-800 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4">
                  
                    <a 
                      href={project.demo} 
                      className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <FiExternalLink className="mr-2" /> Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(projects.length / projectsPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * projectsPerPage)}
              className={`w-3 h-3 rounded-full ${currentIndex === index * projectsPerPage ? 'bg-blue-600' 
                : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;