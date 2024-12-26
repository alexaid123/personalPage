'use client'

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface Experience {
  title: string;
  description: string[]; 
  details: string;
  companyLogo: string;
  startDate: string;
  endDate: string;
  location: string;  
}

export const Experience: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  const experiences: Experience[] = [
    {
      title: 'Software Engineer',
      description: [
        'Worked on building scalable web applications with React and Node.js.',
        'Focused on performance and user experience.',
        'Mentored junior engineers and collaborated across teams.',
      ],
      details: 'More details about this experience. Involved in full-stack development, optimized API performance, and mentored junior engineers.',
      companyLogo: '/walmartLogo.png',
      startDate: 'July 2024',
      endDate: 'Present',
      location: 'Walmart Global Tech, Sunnyvale, CA',
    },
    {
      title: 'Software Engineer Intern',
      description: [
        'Engineered an API that efficiently generates shorter video files based on two specified time stamps from a long livestream video, enhancing the user experience and accessibility of the livestream content.',
        "Developing an automated program that seamlessly extracts clips from a livestream upon completion, followed by streamlined video file processing, transcription to an optimal format, and integration with the relevant product listing page's images and videos section.",
        "Utilizing React and Typescript to create a robust, scalable, and user-friendly program, significantly boosting traffic to Walmart’s livestreaming website and enhancing overall customer engagement.",
      ],
      details: 'As an intern, I contributed to the development of internal tools and assisted in bug fixing and code reviews.',
      companyLogo: '/walmartLogo.png',
      startDate: 'May 2023',
      endDate: 'Aug 2023',
      location: 'Walmart Global Tech, Sunnyvale, CA',
    },
    {
      title: 'Web Developer and Telephony Student Assistant',
      description: [
        'Developed and maintained the DoIT Telephony Website using Drupal, JS, HTML, and CSS.',
        'Deployed VoIP telephones and worked with Engineers to identify, troubleshoot and rectify devices that do not initialize.',
      ],
      details: 'Worked closely with senior engineers to implement features and fix bugs in the app, learning new tools like Flutter.',
      companyLogo: '/sbu.png',
      startDate: 'October 2022',
      endDate: 'May 2023',
      location: 'Division of Information Technology Infrastructure (DoIT), Stony Brook University, NY',
    },
    {
      title: 'Web Development Intern',
      description: [
        'Designed and developed a new website that is more informative, interactive, and user friendly, thereby increasing the conversion rate of visitors to mentor sign ups by 45%.',
        "Improved website's Search Engine Optimization (SEO), and increased traffic by 20%.",
      ],
      details: 'Worked closely with senior engineers to implement features and fix bugs in the app, learning new tools like Flutter.',
      companyLogo: '/heroes.png',
      startDate: 'July 2022',
      endDate: 'August 2022',
      location: 'HEROES Youth Mentorship Program, Remote',
    },
    {
        title: 'Web Development Intern',
        description: [
            "Developed clients’ websites, using HTML, CSS, JS and WordPress, and created 301 client website redirects."
        ],
        details: 'Worked closely with senior engineers to implement features and fix bugs in the app, learning new tools like Flutter.',
        companyLogo: '/webline.png',
        startDate: 'July 2019',
        endDate: 'August 2019',
        location: 'Webline Media Group, Queens, NY',
    },
    {
      title: 'Apple Specialist at Apple',
      description: [
        "Leveraged expert knowledge of Apple products in the Product Zone to boost sales revenue and maintain a Net Promoter Score of 90%, delivering personalized recommendations aligned with customers' needs.",
        "Collaborated seamlessly with cross-functional team members, including Genius Bar and Operations, ensuring updated information and prompt customer service.",
        "Addressed customer issues in real-time, demonstrating robust problem-solving skills to provide effective solutions.",
      ],
      details: 'Led several major projects from start to finish, focusing on cross-team collaboration and ensuring quality.',
      companyLogo: '/giphy.gif',
      startDate: 'October 2023',
      endDate: 'May 2024',
      location: 'Apple Smithhaven, NY',
    }
  ];

  const openModal = (experience: Experience) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExperience(null);
  };

  // Disable background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen]);

  return (
    <>
      {isModalOpen && selectedExperience && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-gray-800 p-8 rounded-lg shadow-2xl w-full max-w-md mx-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-3xl font-bold text-white mb-6 text-center">{selectedExperience.title}</h3>
            <p className="text-gray-400 mb-4">{selectedExperience.details}</p>
            <p className="text-gray-500 text-center mb-4">
              <span className="font-semibold">{selectedExperience.startDate} - {selectedExperience.endDate}</span>
            </p>
            <p className="text-gray-500 text-center mb-4">
              <span className="font-semibold">{selectedExperience.location}</span>
            </p>
            <button
              className="absolute top-2 right-2 p-2 text-white text-2xl hover:text-gray-300 transition-all"
              onClick={closeModal}
            >
              ×
            </button>
          </div>
        </div>
      )}

      <div data-aos="fade-up">
        <h3 className="text-4xl font-extrabold text-white mb-8 text-shadow-md">Work Experience</h3>

        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Software Engineering Experience</CardTitle>
              <CardDescription>Click on an experience card for more info!</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {experiences.slice(0, 5).map((exp, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 p-8 rounded-2xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl cursor-pointer"
                    onClick={() => openModal(exp)}
                  >
                    <div className="flex items-center gap-2">
                      <img src={exp.companyLogo} alt={exp.title} className="h-9 w-9" />
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800">{exp.title}</h4>
                        <p className="text-gray-500 text-sm">{exp.startDate} - {exp.endDate}</p>
                        <p className="text-gray-500 text-sm">{exp.location}</p>
                      </div>
                    </div>
                    <ul className="list-disc list-inside text-gray-600 mt-4">
                      {exp.description.map((desc, idx) => (
                        <li key={idx}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Other Experience</CardTitle>
              <CardDescription>Click on an experience card for more info!</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {experiences.slice(5).map((exp, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 p-8 rounded-2xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl cursor-pointer"
                    onClick={() => openModal(exp)}
                  >
                    <div className="flex items-center gap-2">
                      <img src={exp.companyLogo} alt={exp.title} className="h-9 w-9" />
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800">{exp.title}</h4>
                        <p className="text-gray-500 text-sm">{exp.startDate} - {exp.endDate}</p>
                        <p className="text-gray-500 text-sm">{exp.location}</p>
                      </div>
                    </div>
                    <ul className="list-disc list-inside text-gray-600 mt-4">
                      {exp.description.map((desc, idx) => (
                        <li key={idx}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
