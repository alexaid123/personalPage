export const Skills: React.FC = () => {
    return (
        <div className="mt-16 mx-auto max-w-4xl">
            <div className="bg-gray-800 p-12 rounded-2xl shadow-2xl transform transition-all hover:scale-105 hover:rotate-2 transition duration-500">
            <h3 className="text-3xl font-bold text-gradient-to-r from-purple-600 to-blue-500 mb-4">
                Technologies & Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div data-aos="fade-up" className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-500 transform hover:rotate-6 hover:translate-x-4">
                <h4 className="text-xl font-semibold">React</h4>
                <p className="text-gray-300">Building interactive UIs with React.</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="100" className="bg-gradient-to-r from-green-500 to-teal-500 p-6 rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-500 transform hover:rotate-6 hover:translate-x-4">
                <h4 className="text-xl font-semibold">TypeScript</h4>
                <p className="text-gray-300">Strongly typed JavaScript for scalable applications.</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="200" className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-500 transform hover:rotate-6 hover:translate-x-4">
                <h4 className="text-xl font-semibold">Node.js</h4>
                <p className="text-gray-300">Building backend APIs with Node.js.</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="300" className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-500 transform hover:rotate-6 hover:translate-x-4">
                <h4 className="text-xl font-semibold">Tailwind CSS</h4>
                <p className="text-gray-300">Rapid styling with utility-first CSS framework.</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="400" className="bg-gradient-to-r from-red-600 to-orange-600 p-6 rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-500 transform hover:rotate-6 hover:translate-x-4">
                <h4 className="text-xl font-semibold">MongoDB</h4>
                <p className="text-gray-300">NoSQL database for scalable data storage.</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="500" className="bg-gradient-to-r from-indigo-500 to-blue-500 p-6 rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-500 transform hover:rotate-6 hover:translate-x-4">
                <h4 className="text-xl font-semibold">GraphQL</h4>
                <p className="text-gray-300">Optimized data fetching with GraphQL.</p>
                </div>
            </div>
            </div>
        </div>
    );
  };