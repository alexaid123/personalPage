export const Skills: React.FC = () => {
    return (
        <div className="mx-auto max-w-4xl py-20">
            <div className="">
                <h3 className="text-3xl mb-8 font-bold text-white">
                    Technologies & Skills
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div data-aos="fade-up" className="p-12 rounded-2xl shadow-2xl transform transition-all hover:scale-105 transition duration-500 bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-xl shadow-xl hover:scale-110 hover:translate-y-2 hover:shadow-xl hover:translate-x-1 transition-all duration-500 transform">
                        <div className="flex items-center mb-3">
                            <i className="mui-icon react-icon text-white text-3xl mr-3">⚛️</i>
                            <h4 className="text-xl font-semibold text-white">React</h4>
                        </div>
                        <p className="text-white mt-2">Building interactive UIs with React.</p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="100" className="bg-gradient-to-r from-green-500 to-teal-500 p-6 rounded-xl shadow-xl hover:scale-110 hover:translate-y-2 hover:shadow-xl hover:translate-x-1 transition-all duration-500 transform">
                        <div className="flex items-center mb-3">
                            <i className="mui-icon typescript-icon text-white text-3xl mr-3">📄</i>
                            <h4 className="text-xl font-semibold text-white">TypeScript</h4>
                        </div>
                        <p className="text-white mt-2">Strongly typed JavaScript for scalable applications.</p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="200" className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-xl shadow-xl hover:scale-110 hover:translate-y-2 hover:shadow-xl hover:translate-x-1 transition-all duration-500 transform">
                        <div className="flex items-center mb-3">
                            <i className="mui-icon nodejs-icon text-white text-3xl mr-3">🌳</i>
                            <h4 className="text-xl font-semibold text-white">Node.js</h4>
                        </div>
                        <p className="text-white mt-2">Building backend APIs with Node.js.</p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="300" className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-xl shadow-xl hover:scale-110 hover:translate-y-2 hover:shadow-xl hover:translate-x-1 transition-all duration-500 transform">
                        <div className="flex items-center mb-3">
                            <i className="mui-icon tailwind-icon text-white text-3xl mr-3">🎨</i>
                            <h4 className="text-xl font-semibold text-white">Tailwind CSS</h4>
                        </div>
                        <p className="text-white mt-2">Rapid styling with utility-first CSS framework.</p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="400" className="bg-gradient-to-r from-red-600 to-orange-600 p-6 rounded-xl shadow-xl hover:scale-110 hover:translate-y-2 hover:shadow-xl hover:translate-x-1 transition-all duration-500 transform">
                        <div className="flex items-center mb-3">
                            <i className="mui-icon mongodb-icon text-white text-3xl mr-3">💾</i>
                            <h4 className="text-xl font-semibold text-white">MongoDB</h4>
                        </div>
                        <p className="text-white mt-2">NoSQL database for scalable data storage.</p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="500" className="bg-gradient-to-r from-indigo-500 to-blue-500 p-6 rounded-xl shadow-xl hover:scale-110 hover:translate-y-2 hover:shadow-xl hover:translate-x-1 transition-all duration-500 transform">
                        <div className="flex items-center mb-3">
                            <i className="mui-icon graphql-icon text-white text-3xl mr-3">📊</i>
                            <h4 className="text-xl font-semibold text-white">GraphQL</h4>
                        </div>
                        <p className="text-white mt-2">Optimized data fetching with GraphQL.</p>
                    </div>
                </div>
            </div>

        </div>
    );
  };