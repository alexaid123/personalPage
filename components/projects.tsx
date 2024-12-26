'use client'

type Project = {
    title: string;
    description: string[];
    skills: string[];
};

const projects: Project[] = [
    {
        title: "Multiplayer Game Server",
        description: [
            "Developed a high-performance game server in C utilizing advanced POSIX threads for efficient multi-threading.",
            "Implemented socket networking principles in C to establish and manage seamless wireless network connections across multiple machines.",
            "Employed mutexes and semaphores to ensure robust multi-threaded safety and optimize concurrent operations."
        ],
        skills: ["C", "Github"]
    },
    {
        title: "Cryptocurrency Web Watcher Program",
        description: [
            "Engineered a dynamic Cryptocurrency watcher in C, orchestrating multiple 'watcher' processes that concurrently monitor real-time data feeds from cryptocurrency exchanges.",
            "Implemented signal handling techniques at a low level to ensure seamless data acquisition and prevent race conditions.",
            "Leveraged I/O redirection to enable efficient information exchange between parent and child processes, optimizing overall performance."
        ],
        skills: ["C", "Github"]
    },
    {
        title: "Song Playlists Full Stack Web Application",
        description: [
            "Developed a MERN stack website for creating, editing, and deleting playlists and songs within each playlist.",
            "Incorporated user authentication and allowed users to create accounts and login to view their owned playlists.",
            "Rendered component-based user interface with React, built a back-end API and handled page routing with Express, handled user requests and responses with Axios, and stored user details with MongoDB."
        ],
        skills: ["MongoDB", "Express", "React", "NodeJS", "GitHub"]
    }
];

export const Projects: React.FC = () => {
    return (
        <div data-aos="fade-up" className="mt-16 cursor-pointer">
            <h3 className="text-4xl font-extrabold text-white mb-8 text-shadow-md">Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-gray-100 p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
                        <h4 className="text-xl font-semibold text-gray-800">{project.title}</h4>
                        <ul className="text-gray-600 mt-2 list-disc pl-5">
                            {project.description.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                        <h5 className="text-lg font-medium text-gray-800 mt-4">Skills Used:</h5>
                        <p className="text-gray-600">{project.skills.join(", ")}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
