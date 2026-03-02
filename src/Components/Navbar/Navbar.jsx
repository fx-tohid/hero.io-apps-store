import React from "react";
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="w-full bg-gray-100 border-b">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

                {/* Logo Section */}
                <div className="flex items-center space-x-2">
                    <img className="w-10" src="/src/assets/logo.png" alt="" />
                    <span className="text-blue-600 font-bold text-lg">
                        HERO<span className="text-purple-600">.IO</span>
                    </span>
                </div>

                {/* Navigation Links */}
                <nav className="hidden md:flex items-center space-x-8">
                    {/* <a
                        href="#"
                        className="text-purple-600 font-medium border-b-2 border-purple-600 pb-1"
                    >
                        Home
                    </a>
                    <a href="#" className="text-gray-600 hover:text-purple-600 transition">
                        Apps
                    </a>
                    <a href="#" className="text-gray-600 hover:text-purple-600 transition">
                        Installation
                    </a> */}
                    <NavLink className="text-gray-600 hover:text-purple-600 transition pb-1" to="/">Home</NavLink>
                    <NavLink className="text-gray-600 hover:text-purple-600 transition" to='/apps'>Apps</NavLink>
                    <NavLink className="text-gray-600 hover:text-purple-600 transition" to="/installation">Installation</NavLink>
                </nav>

                {/* Contribute Button */}
                <button className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition">
                    <FaGithub />
                    <span>Contribute</span>
                </button>
            </div>
        </header>
    );
};

export default Navbar;