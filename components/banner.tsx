'use client'

import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SendEmailPost } from './serverSide/serverActions';

export const Banner: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<string>('');
  const [bannerVisible, setBannerVisible] = useState(true);  

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  useEffect(() => {
    if (submissionStatus === 'Your message has been sent successfully!') {
      setTimeout(() => {
        setBannerVisible(false);
        setSubmissionStatus('');
      }, 3000);
    }

    if (submissionStatus === 'There was an error sending your message.') {
      setTimeout(() => {
        setBannerVisible(false);
        setSubmissionStatus('');
      }, 5000);
    }
  }, [submissionStatus]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData(
      {
        name: "",
        message: "",
        email: ""
      }
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setBannerVisible(true); 

    const { name, email, message } = formData;
    
    if (!name || !email || !message) {
      setSubmissionStatus('All fields are required.');
      setIsSubmitting(false);
      return;
    }
    setIsModalOpen(false);

    setFormData(
      {
        name: "",
        message: "",
        email: ""
      }
    );
    try {
      setSubmissionStatus('Sending...');
      const res = SendEmailPost(email, name, message);

      if ((await res).success) {
        setSubmissionStatus('Your message has been sent successfully!');
      } else {
        setSubmissionStatus('There was an error sending your message.');
      }
    }  catch (error: unknown) { 
      if (error instanceof Error) { 
        setSubmissionStatus('Error: ' + error.message);
      } else {
        setSubmissionStatus('An unknown error occurred');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const bannerClass = submissionStatus === 'Sending...' 
    ? 'bg-yellow-400' 
    : submissionStatus === 'Your message has been sent successfully!' 
    ? 'bg-green-400' 
    : submissionStatus === 'There was an error sending your message.' 
    ? 'bg-red-400' 
    : '';

  return (
    <>
      {bannerVisible && submissionStatus && (
        <div className={`fixed top-0 left-0 w-full py-3 text-center text-white ${bannerClass} z-50`}>
          {submissionStatus}
        </div>
      )}

      <div className="relative container mx-auto text-center px-6 text-white">
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8 animate__animated animate__fadeIn">
          Hi, I&apos;m <span className="text-primary">Alexandros Aidonis</span>
        </h2>
        <p className="text-lg md:text-2xl mb-8 opacity-75 hover:opacity-100 transition-opacity duration-500 ease-in-out">
          I&apos;m a passionate software engineer with a love for coding, problem-solving, and building impactful applications. I specialize in creating responsive, user-friendly websites and scalable web applications using modern technologies like React, TypeScript, and Node.js.
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
            <div className="bg-gray-800 p-12 rounded-3xl shadow-2xl transform transition-transform duration-500 scale-110 opacity-100 w-full max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gradient-to-r from-purple-600 to-blue-500 mb-6 text-center">Contact Me</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-4 px-30 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    rows={5}
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 p-4 rounded-full text-white shadow-xl hover:scale-105 hover:bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-500"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
              {submissionStatus && (
              <p className="text-center text-white mt-4">{submissionStatus}</p>
            )}
              <button
                className="absolute top-0 right-0 p-4 text-white text-2xl hover:text-gray-300 transition-all"
                onClick={closeModal}
              >
                ×
              </button>
            </div>
          </div>
        )}

    </>
  );
};
