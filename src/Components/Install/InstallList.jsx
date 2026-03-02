import React, { useEffect, useState } from "react";
import { Download, Star } from "lucide-react";
import { getStoredApps, removeStoredApps, setStoredApps } from "../../utils/localstorage";
import { useLoaderData } from "react-router-dom";
import InstallCard from "./InstallCard";

const InstallList = () => {

    const apps = useLoaderData();
    const [installedApps, setInstalledApps] = useState([])

    useEffect(() => {
        const storedAppIds = getStoredApps();
        if (apps.length > 0) {
            const appInstalled = [];
            for (const id of storedAppIds) {
                const app = apps.find(app => app.id === id);
                if (app) {
                    appInstalled.push(app)
                }
            }
            setInstalledApps(appInstalled);
            setStoredApps(installedApps);
        }

    }, [apps]);

    // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))

    const handleRemove = (id) => {
        const newAppsList = installedApps.filter(app => app.id !== id)
        // console.log('App Unistalled', id);
        setInstalledApps(newAppsList)
        removeStoredApps(id);
    }




    return (
        <div className="min-h-screen bg-gray-100 py-16 px-6">

            {/* Page Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-slate-900 mb-3">
                    Your Installed Apps
                </h1>
                <p className="text-slate-500">
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>

            <div className="max-w-5xl mx-auto">

                {/* Top Bar */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-slate-800">
                        {installedApps.length} Apps Found
                    </h2>

                    <button className="bg-white border border-gray-300 text-slate-600 px-4 py-2 rounded-md text-sm hover:bg-gray-50 transition">
                        Sort By Size ▾
                    </button>
                </div>

                {/* <div className="bg-white rounded-lg p-5 flex items-center justify-between mb-4 shadow-sm">
                    <div className="flex items-center gap-5">

                        <div className="w-16 h-16 bg-gray-300 rounded-md"></div>

                        <div>
                            <h3 className="font-semibold text-slate-900">
                                Forest: Focus For Productivity
                            </h3>

                            <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                                <div className="flex items-center gap-1 text-green-600">
                                    <Download size={14} />
                                    <span>9M</span>
                                </div>

                                <div className="flex items-center gap-1 text-orange-500">
                                    <Star size={14} />
                                    <span>5</span>
                                </div>

                                <span>258 MB</span>
                            </div>
                        </div>
                    </div>

                    <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md text-sm transition">
                        Uninstall
                    </button>
                </div> */}
                <div>
                    {
                        installedApps.map(app => <InstallCard handleRemove={handleRemove} key={app.id} installedApp={app}></InstallCard>)
                    }
                </div>


            </div>
        </div>
    );
};

export default InstallList;