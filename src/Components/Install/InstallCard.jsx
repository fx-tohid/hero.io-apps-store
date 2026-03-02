import React from 'react';
import { Download, Star } from 'lucide-react';

const InstallCard = ({ installedApp, handleRemove }) => {
    const { image, title, downloads, size, ratingAvg, id } = installedApp;
    return (
        <div>
            <div className="bg-white rounded-lg p-5 flex items-center justify-between mb-4 shadow-sm">
                <div className="flex items-center gap-5">

                    <img className="w-16 h-16 bg-gray-300 rounded-md" src={image} alt="" />

                    <div>
                        <h3 className="font-semibold text-slate-900">
                            {title}
                        </h3>

                        <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                            <div className="flex items-center gap-1 text-green-600">
                                <Download size={14} />
                                <span>{downloads}</span>
                            </div>

                            <div className="flex items-center gap-1 text-orange-500">
                                <Star size={14} />
                                <span>{ratingAvg}</span>
                            </div>

                            <span>{size} MB</span>
                        </div>
                    </div>
                </div>

                <button onClick={()=>handleRemove(id)} className="bg-green-500 cursor-pointer hover:bg-green-600 text-white px-5 py-2 rounded-md text-sm transition">
                    Uninstall
                </button>
            </div>
        </div>
    );
};

export default InstallCard;