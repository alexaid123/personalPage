export const Projects: React.FC = () => {
    return (
        <div data-aos="fade-up" className="mt-16">
            <h3 className="text-4xl font-extrabold text-white mb-8 text-shadow-md">Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-100 p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
                    <h4 className="text-xl font-semibold text-gray-800">Project One</h4>
                    <p className="text-gray-600 mt-2">A full-stack web application built with React, Node.js, and MongoDB.</p>
                </div>

                <div className="bg-gray-100 p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
                    <h4 className="text-xl font-semibold text-gray-800">Project Two</h4>
                    <p className="text-gray-600 mt-2">A responsive e-commerce site built with Next.js and Tailwind CSS.</p>
                </div>

                <div className="bg-gray-100 p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
                    <h4 className="text-xl font-semibold text-gray-800">Project Three</h4>
                    <p className="text-gray-600 mt-2">A social media platform built with React and Firebase for real-time data.</p>
                </div>
            </div>

        </div>
    );
  };