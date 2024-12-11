'use client'

import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles



export const Banner: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      
        <div className="relative container mx-auto text-center px-6 text-white">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8 animate__animated animate__fadeIn">
            Hi, I'm <span className="text-primary">Alexandros Aidonis</span>
          </h2>

          <p className="text-lg md:text-2xl mb-8 opacity-75 hover:opacity-100 transition-opacity duration-500 ease-in-out">
            I'm a passionate software engineer with a love for coding, problem-solving, and building impactful applications. I specialize in creating responsive, user-friendly websites and scalable web applications using modern technologies like React, TypeScript, and Node.js.
          </p>

          <div className="mt-12">
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={openModal} 
              className="transform transition-all duration-500 ease-in-out hover:scale-110 hover:bg-gradient-to-r from-pink-500 to-purple-600 hover:shadow-2xl"
            >
              Contact Me
            </Button>
          </div>
        </div>
        
        {isModalOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50 transition-all">
            <div className="bg-gray-800 p-8 rounded-3xl shadow-2xl transform transition-transform duration-500 scale-110 opacity-100 max-w-lg mx-auto">
              <h3 className="text-3xl font-bold text-gradient-to-r from-purple-600 to-blue-500 mb-4 text-center">Contact Me</h3>
              <form>
                <div className="mb-4">
                  <input type="text" placeholder="Your Name" className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>
                <div className="mb-4">
                  <input type="email" placeholder="Your Email" className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>
                <div className="mb-4">
                  <textarea placeholder="Your Message" className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500" rows={5}></textarea>
                </div>
                <div className="flex justify-center">
                  <button type="submit" className="bg-gradient-to-r from-pink-500 to-purple-600 p-4 rounded-full text-white shadow-xl hover:scale-105 hover:bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-500">
                    Send Message
                  </button>
                </div>
              </form>
              <button
                onClick={closeModal}
                className="absolute top-0 right-0 p-4 text-white text-2xl hover:text-gray-300 transition-all"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </>
  );
};
