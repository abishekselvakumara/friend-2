import React, { useRef } from 'react';
import { FiMail, FiUser, FiMessageSquare } from 'react-icons/fi';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_4e7lgab',        // Replace with your service ID
      'template_ro4fzsg',       // Replace with your template ID
      formRef.current,
      'qZdQ9SfHD9yF5Jrij'         // Replace with your public key (User ID)
    ).then(
      (result) => {
        console.log(result.text);
        alert('✅ Message sent successfully!');
        formRef.current.reset(); // Reset form after success
      },
      (error) => {
        console.log(error.text);
        alert('❌ Failed to send message. Try again later.');
      }
    );
  };

  return (
    <section data-aos="fade-up" data-aos-delay="250" id="contact" className="py-20 px-4 bg-gradient-to-b">
      <div className="max-w-lg mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Get In <span className="text-red-600">Touch</span>
          </h2>
        </div>

        {/* Contact Form */}
        <form ref={formRef} onSubmit={sendEmail} className="space-y-6 bg-gray-200/85 p-8 rounded-xl shadow-md border border-gray-100">
          {/* Name */}
          <motion.div whileHover={{ scale: 1.01 }}>
            <label className="block text-gray-700 mb-2">Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiUser className="text-gray-400" />
              </div>
              <input
                name="name"
                type="text"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent"
                placeholder="Enter your name"
              />
            </div>
          </motion.div>

          {/* Email */}
          <motion.div whileHover={{ scale: 1.01 }}>
            <label className="block text-gray-700 mb-2">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="text-gray-400" />
              </div>
              <input
                name="email"
                type="email"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
          </motion.div>

          {/* Message */}
          <motion.div whileHover={{ scale: 1.01 }}>
            <label className="block text-gray-700 mb-2">Message</label>
            <div className="relative">
              <div className="absolute top-3 left-3">
                <FiMessageSquare className="text-gray-400" />
              </div>
              <textarea
                name="message"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent"
                rows="4"
                placeholder="Write your message"
              ></textarea>
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 px-6 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-all"
          >
            Send Message
          </motion.button>
        </form>

        {/* Alternative Contact */}
        <div className="mt-8 text-center text-gray-800">
          <p>Or email me directly at: <span className="text-gray-950 font-bold">vishalashish17@gmail.com</span></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
