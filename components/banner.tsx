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
  const [emailError, setEmailError] = useState<string | null>(null); 
  const [emailProgress, setEmailProgress] = useState(0);
  const [emailValidation, setEmailValidation] = useState({
    hasAtSymbol: false,
    hasDotAfterAt: false,
    isLongEnough: false,
    isValidFormat: false
  }); 

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
    setFormData({
      name: "",
      message: "",
      email: ""
    });
    setEmailError(null); 
    setEmailProgress(0); 
    setEmailValidation({
      hasAtSymbol: false,
      hasDotAfterAt: false,
      isLongEnough: false,
      isValidFormat: false
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === 'email') {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      let progress = 0;
      const newValidationState = { ...emailValidation };

      if (value.includes('@')) {
        newValidationState.hasAtSymbol = true;
        progress += 25;
      } else {
        newValidationState.hasAtSymbol = false;
      }

      if (value.includes('.') && value.indexOf('@') < value.lastIndexOf('.')) {
        newValidationState.hasDotAfterAt = true;
        progress += 25;
      } else {
        newValidationState.hasDotAfterAt = false;
      }

      if (value.length > 5) {
        newValidationState.isLongEnough = true;
        progress += 25;
      } else {
        newValidationState.isLongEnough = false;
      }

      if (emailRegex.test(value)) {
        newValidationState.isValidFormat = true;
        progress += 25;
      } else {
        newValidationState.isValidFormat = false;
      }

      setEmailValidation(newValidationState);
      setEmailProgress(progress);

      if (progress === 100) {
        setEmailError(null); 
      } else {
        setEmailError('Please enter a valid email address.');
      }
    }
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

    if (emailError) {
      setSubmissionStatus('Please fix the errors before submitting.');
      setIsSubmitting(false);
      return;
    }

    setIsModalOpen(false);

    setFormData({
      name: "",
      message: "",
      email: ""
    });
    try {
      setSubmissionStatus('Sending...');
      const res = SendEmailPost(email, name, message);

      if ((await res).success) {
        setSubmissionStatus('Your message has been sent successfully!');
      } else {
        setSubmissionStatus('There was an error sending your message.');
      }
    } catch (error: unknown) { 
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
      {bannerVisible && submissionStatus && submissionStatus !== "All fields are required." && (
        <div className={`fixed top-0 left-0 w-full py-3 text-center text-white ${bannerClass} z-50`}>
          {submissionStatus}
        </div>
      )}

      <div className="relative container mx-auto text-center px-6 mt-5 text-white">
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
            <h3 className="text-3xl font-bold text-white mb-6 text-center">Contact Me</h3>
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
              <div className="mb-6 relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 ${emailError ? 'border-2 border-red-500' : ''}`}
                />
                {emailError && (
                  <>
                    <p className="absolute text-red-500 text-sm mt-1">{emailError}</p>
                  
                    <div className="w-full mt-7 h-2 bg-gray-600 rounded-full">
                      <div
                        className="h-full bg-green-500 rounded-full"
                        style={{ width: `${emailProgress}%` }}
                      />
                    </div>
                    <ul className="mt-4 space-y-2 text-left text-white">
                      <li className="flex items-center">
                        <input
                          type="checkbox"
                          checked={emailValidation.hasAtSymbol}
                          disabled
                          className={`mr-2 ${emailValidation.hasAtSymbol ? 'bg-green-500' : 'bg-gray-300'} checked:bg-green-500`}
                        />
                        <span>Contains &quot;@&quot; symbol</span>
                      </li>
                      <li className="flex items-center">
                        <input
                          type="checkbox"
                          checked={emailValidation.hasDotAfterAt}
                          disabled
                          className={`mr-2 ${emailValidation.hasDotAfterAt ? 'bg-green-500' : 'bg-gray-300'} checked:bg-green-500`}
                        />
                        <span>Contains a &quot;.&quot; after &quot;@&quot;</span>
                      </li>
                      <li className="flex items-center">
                        <input
                          type="checkbox"
                          checked={emailValidation.isLongEnough}
                          disabled
                          className={`mr-2 ${emailValidation.isLongEnough ? 'bg-green-500' : 'bg-gray-300'} checked:bg-green-500`}
                        />
                        Minimum 6 characters
                      </li>
                      <li className="flex items-center">
                        <input
                          type="checkbox"
                          checked={emailValidation.isValidFormat}
                          disabled
                          className={`mr-2 ${emailValidation.isValidFormat ? 'bg-green-500' : 'bg-gray-300'} checked:bg-green-500`}
                        />
                        Valid email format
                      </li>
                    </ul>
                  </>
                )}
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
                  disabled={isSubmitting || !!emailError} 
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
