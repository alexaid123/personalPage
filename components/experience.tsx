export const Experience: React.FC = () => {
    return (
        <div data-aos="fade-up">
            <h3 className="text-3xl font-bold text-gradient-to-r from-green-500 to-blue-400 mb-8">Work Experience</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
                <h4 className="text-xl font-semibold">Software Engineer at XYZ Corp.</h4>
                <p className="text-gray-300 mt-2">Worked on building scalable web applications with React and Node.js, focusing on performance and user experience.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
                <h4 className="text-xl font-semibold">Frontend Developer at ABC Inc.</h4>
                <p className="text-gray-300 mt-2">Created interactive and responsive user interfaces with React and TypeScript, optimizing for performance and accessibility.</p>
            </div>
            </div>
        </div>
    );
  };
  