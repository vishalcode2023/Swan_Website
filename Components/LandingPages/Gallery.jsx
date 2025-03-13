import React from "react";
import Marquee from "react-fast-marquee";

const Gallery = () => {
    return (
        <div className="w-full md:min-h-screen bg-gradient-to-r from-gray-50 to-white flex flex-col items-center">
            {/* Heading Section */}
            <div className="w-[90%] md:w-[80%] mt-10 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 break-words">
                    <span className="bg-gradient-to-r from-green-400 to-blue-400 text-white px-3 py-1 rounded-sm">
                        Revolutionizing
                    </span> Industries with AI  Stay Updated!
                </h1>
            </div>

        
            {/* Image Section */}
            <div className="w-[90%] flex justify-center items-center my-10">
                <img 
                    src="/Swan-TechPartners.png" 
                    className="w-full md:w-[80%] max-w-[650px] rounded-lg shadow-lg transition-transform duration-500 hover:scale-105" 
                    alt="AI Revolution"
                />
            </div>
            <div className="w-full bg-gradient-to-r from-green-100 to-blue-100 py-3 my-3 shadow-lg rounded-lg">
                <Marquee speed={50} pauseOnHover={true} gradient={false}>
                    <div className="text-center mx-10 text-green-700 font-extrabold text-3xl flex items-center gap-2">
                        🚀 1000+ <span className="text-gray-700 font-medium text-xl">Sorter Machines Installed</span>
                    </div>
                    <div className="text-center mx-10 text-blue-700 font-extrabold text-3xl flex items-center gap-2">
                        ⏳ 16+ Years <span className="text-gray-700 font-medium text-xl">Of Combined Experience</span>
                    </div>
                    <div className="text-center mx-10 text-purple-700 font-extrabold text-3xl flex items-center gap-2">
                        👨‍💻 40+ Highly <span className="text-gray-700 font-medium text-xl">Qualified Team of Engineers</span>
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Gallery;