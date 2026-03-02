import React from 'react';
import { Download, Star, MessageSquare } from "lucide-react";
import { ToastContainer, toast } from 'react-toastify';
import { useLoaderData, useParams } from 'react-router-dom';
import { setStoredApps } from '../../utils/localstorage';


const AppsDetails = () => {

    const appsDetails = useLoaderData();
    const { appsId } = useParams();
    // const appsId = appsIdObj.appsId;
    const appsInt = parseInt(appsId)
    // console.log(appsDetails)

    const apps = appsDetails.find(app => app.id === appsInt);
    console.log(apps);
    const { image, title, description, id, size, ratingAvg, companyName, downloads, reviews } = apps;

    const handleInstall = () => {
        toast('App Installed Successfully');
        setStoredApps(appsInt);
    }

    return (
        <section className="bg-gray-50">

            <div className='max-w-6xl mx-auto p-8'>
                {/* Top Section */}
                <div className="flex flex-col md:flex-row gap-8">

                    {/* App Icon */}

                    <img className='w-48 h-48 bg-white rounded-xl shadow flex items-center justify-center' src={image} alt="" />

                    {/* App Info */}
                    <div className="flex-1">
                        <h1 className="text-2xl font-semibold text-gray-800">
                            {title}
                        </h1>
                        <p className="text-sm text-gray-500 mt-1">
                            Developed by <span className="text-blue-600">{companyName}</span>
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-8 mt-6">

                            <div className="flex items-center gap-2">
                                <Download className="text-green-600" size={20} />
                                <div>
                                    <p className="text-sm text-gray-500">Downloads</p>
                                    <p className="font-semibold text-lg">{downloads}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <Star className="text-orange-500" size={20} />
                                <div>
                                    <p className="text-sm text-gray-500">Average Rating</p>
                                    <p className="font-semibold text-lg">{ratingAvg}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <MessageSquare className="text-purple-600" size={20} />
                                <div>
                                    <p className="text-sm text-gray-500">Total Reviews</p>
                                    <p className="font-semibold text-lg">{reviews}</p>
                                </div>
                            </div>

                        </div>

                        {/* Install Button */}
                        <button onClick={handleInstall} className="mt-6 cursor-pointer bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium transition">
                            Install Now ({size})
                        </button>
                    </div>
                </div>

                {/* Ratings Section */}
                <div className="mt-12">
                    <h2 className="text-lg font-semibold mb-6">Ratings</h2>

                    <div className="flex items-center gap-4 mb-3">
                        <span className="w-16 text-sm text-gray-600">5 star</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-3">
                            <div className="bg-orange-500 h-3 rounded-full w-[95%]"></div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 mb-3">
                        <span className="w-16 text-sm text-gray-600">4 star</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-3">
                            <div className="bg-orange-500 h-3 rounded-full w-[70%]"></div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 mb-3">
                        <span className="w-16 text-sm text-gray-600">3 star</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-3">
                            <div className="bg-orange-500 h-3 rounded-full w-[35%]"></div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 mb-3">
                        <span className="w-16 text-sm text-gray-600">2 star</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-3">
                            <div className="bg-orange-500 h-3 rounded-full w-[25%]"></div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="w-16 text-sm text-gray-600">1 star</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-3">
                            <div className="bg-orange-500 h-3 rounded-full w-[15%]"></div>
                        </div>
                    </div>
                </div>

                {/* Description Section */}
                <div className="mt-12">
                    <h2 className="text-lg font-semibold mb-4">Description</h2>
                    <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                        {description}
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </section>
    );


};

export default AppsDetails;