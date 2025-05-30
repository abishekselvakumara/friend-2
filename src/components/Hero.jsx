import React from 'react';
import hero from '../assets/hero.jpg';
import behance from '../assets/behance.svg'; 
import linkedin from '../assets/linkedin.png'; 
import instagram from '../assets/instagram.png'; 
import vishal from '../assets/vishal.pdf'; 

/**
 * Hero Component - The main banner section of the portfolio
 * Displays personal introduction, social links, and call-to-action
 */
export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col">
      {/* Animated Gradient Circle Background */}
      <div 
        className="md:h-[420px] md:w-[340px] h-[660px] w-[580px] right-56 
        bg-gradient-to-r from-red-600 via-blue-600 to-green-400 
        absolute rounded-full transform rotate-12 top-8
        shadow-[0_0_100px_rgba(255,165,0,0.7)] z-0"
        aria-hidden="true"
      ></div>

      {/* Main Content Section */}
      <section 
        data-aos="fade-up" 
        data-aos-delay="250" 
        className="text-gray-500 body-font z-10"
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          
          {/* Text Content Section */}
          <div className="relative lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 
            flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            
            {/* Social Media Icons */}
            <div 
              className="flex space-x-4 mb-2" 
              data-aos="fade-up" 
              data-aos-delay="400"
              aria-label="Social media links"
            >
              <a href="https://www.behance.net/vishalashish" aria-label="Behance profile">
                <img src={behance} alt="Facebook" className="w-14 h-14 hover:scale-110 transition-transform" />
              </a>
              
              <a href="https://www.linkedin.com/in/vishal-parandhaman-587a7627a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn profile">
                <img src={linkedin} alt="LinkedIn" className="w-14 h-14 hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.instagram.com/mr_taurus_17?igsh=MWZuZmowcDNxejUxaw==" aria-label="Instagram profile">
                <img src={instagram} alt="Instagram" className="w-14 h-14 hover:scale-110 transition-transform" />
              </a>
            </div>

            {/* Headings */}
            <h1 className="title-font sm:text-6xl text-4xl mb-4 font-bold text-gray-900">
              Hi! I'm <span className="text-red-600">Vishal P</span>
            </h1>
            <h2 className="sm:text-3xl mb-4 font-bold text-blue-950">
              Designer
            </h2>
            
            {/* Description */}
            <p className="mb-8 leading-relaxed text-black max-w-lg">
            Enthusiastic UI/UX Designer specializing in app and web design, prototyping, and user research. Proficient in Figma and Adobe Illustrator, with a passion for creating intuitive and user-centered designs. Eager to apply creative problem-solving and fresh ideas to real-world projects.
            </p>

            {/* Call-to-Action Button */}
            <div className="flex justify-center">
              <a 
                href={vishal} 
                download=""
                className="inline-flex text-white bg-red-500 border-0 py-2 px-6 
                focus:outline-none hover:bg-red-700 rounded-full text-lg
                hover:shadow-[0_0_20px_rgba(255,100,100,0.5)] transition-all"
                aria-label="Download CV"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div 
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <img
              className="object-cover object-center rounded-full w-80 h-80 border-4 border-white shadow-xl"
              alt="Mary - Frontend Developer"
              src={hero}
              width={320}
              height={320}
              loading="eager"
            />
          </div>
        </div>
      </section>
    </div>
  );
}