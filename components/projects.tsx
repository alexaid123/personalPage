export const Projects: React.FC = () => {
    return (
        <div data-aos="fade-up" className="mt-16">
            <h3 className="text-3xl font-bold text-gradient-to-r from-pink-500 to-purple-500 mb-8">Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
                <h4 className="text-xl font-semibold">Project One</h4>
                <p className="text-gray-300 mt-2">A full-stack web application built with React, Node.js, and MongoDB.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
                <h4 className="text-xl font-semibold">Project Two</h4>
                <p className="text-gray-300 mt-2">A responsive e-commerce site built with Next.js and Tailwind CSS.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
                <h4 className="text-xl font-semibold">Project Three</h4>
                <p className="text-gray-300 mt-2">A social media platform built with React and Firebase for real-time data.</p>
            </div>
            </div>
        </div>
    );
  };