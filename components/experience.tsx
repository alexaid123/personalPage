export const Experience: React.FC = () => {
    return (
        <div data-aos="fade-up">
            <h3 className="text-4xl font-extrabold text-white mb-8 text-shadow-md">
                Work Experience
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-100 p-8 rounded-2xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
                    <h4 className="text-xl font-semibold text-gray-800">Software Engineer at XYZ Corp.</h4>
                    <p className="text-gray-600 mt-2">
                        Worked on building scalable web applications with React and Node.js, focusing on performance and user experience.
                    </p>
                </div>

                <div className="bg-gray-100 p-8 rounded-2xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
                    <h4 className="text-xl font-semibold text-gray-800">Software Engineer at XYZ Corp.</h4>
                    <p className="text-gray-600 mt-2">
                        Worked on building scalable web applications with React and Node.js, focusing on performance and user experience.
                    </p>
                </div>
            </div>
        </div>

    );
  };
  