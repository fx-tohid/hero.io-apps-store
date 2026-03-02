import React from 'react';
import errorImage from '../../assets/error-404.png'
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="text-center max-w-xl">

                {/* Image */}
                <img
                    src={errorImage}
                    alt="App Not Found"
                    className="mx-auto w-80 mb-8"
                />

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    OPPS!! PAGE NOT FOUND
                </h1>

                {/* Description */}
                <p className="text-slate-500 text-sm md:text-base mb-6">
                    The page you are looking for is not available.
                </p>

                {/* Button */}
                <button onClick={()=> navigate(-1)} className="bg-purple-600 cursor-pointer hover:bg-purple-700 text-white px-6 py-2 rounded-md transition duration-300">
                    Go Back!
                </button>

            </div>
        </div>

    );
};

export default ErrorPage;