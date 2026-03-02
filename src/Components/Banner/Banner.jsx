import React from "react";
import { FaGooglePlay, FaApple, FaCheck, FaPowerOff } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { BsShieldCheck } from "react-icons/bs";

const Banner = () => {
    return (
        <section className="w-full bg-gray-100 pt-20 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 text-center">

                {/* Heading */}
                <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
                    We Build <br />
                    <span className="text-purple-600">Productive</span> Apps
                </h1>

                {/* Subtext */}
                <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg">
                    At HERO.IO, we craft innovative apps designed to make everyday life
                    simpler, smarter, and more exciting. Our goal is to turn your ideas
                    into digital experiences that truly make an impact.
                </p>

                {/* Store Buttons */}
                <div className="flex justify-center gap-4 mt-8 flex-wrap">
                    <button className="flex text-black items-center gap-2 bg-white border px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition">
                        <FaGooglePlay className="text-green-600" />
                        Google Play
                    </button>

                    <button className="flex items-center text-black gap-2 bg-white border px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition">
                        <FaApple className="text-black" />
                        App Store
                    </button>
                </div>
            </div>

            {/* Phone Image Section */}
            <div className="relative flex justify-center mt-16">
                {/* Phone Image */}
                <img
                    src="/src/assets/hero.png" 
                    alt="App Preview"
                    className="w-auto h-[380px] relative z-10"
                />
            </div>
        </section>
    );
};

export default Banner;