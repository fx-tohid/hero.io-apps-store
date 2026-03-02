import React from 'react';
import { FiDownload } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const SApp = ({app}) => {
    const {title, image, downloads, ratingAvg, id} = app;

    const navigate = useNavigate()
    const handeAppDetails= () => {
        navigate(`/apps/${id}`)
        console.log('I am here');
    }
    return (
        <div onClick={handeAppDetails}>
            <div className="bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition">
                <img className='h-48 rounded-lg mb-4 w-full' src={image} alt="" />
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                    {title}
                </h3>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 bg-green-100 text-green-600 px-2 py-1 rounded text-xs">
                        <FiDownload size={14} />
                        {downloads}
                    </div>
                    <div className="flex items-center gap-1 bg-orange-100 text-orange-500 px-2 py-1 rounded text-xs">
                        <FaRegStar size={14} />
                        {ratingAvg}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SApp;