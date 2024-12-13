import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 absolute w-full bottom-0 text-white py-4">
        <div className="px-10 container mx-auto text-center flex justify-center items-center space-x-4">
            <p className="text-white text-lg">© 2024 Your Name | All Rights Reserved</p>
            <div className="flex space-x-6 animate__animated animate__fadeInUp animate__delay-1s">
                <a href="https://github.com/yourusername" className="text-white text-3xl hover:text-gray-300 transition-all duration-300 ease-in-out">
                <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/yourusername" className="text-white text-3xl hover:text-gray-300 transition-all duration-300 ease-in-out">
                <FaLinkedin />
                </a>
            </div>
        </div>
    </footer>
  );
};
