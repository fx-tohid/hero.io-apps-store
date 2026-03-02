import { Star, Download } from "lucide-react";
import { Suspense, use, useState } from "react";
import TrendingApp from "../TrendingApp/TrendingApp";

const TrendingApps = ({ fetchData }) => {
    const [dataLength, setDataLength] = useState(8)

    const datas = use(fetchData)



    // const handleShowAll = () => {
    //     // setDisplayDatas(displayDatas)
    // }

    // data(datas)

    return (
        <section className="bg-gray-100 py-20">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Trending Apps
                    </h2>
                    <p className="text-gray-500 mt-3">
                        Explore All Trending Apps on the Market developed by us
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        datas.slice(0, dataLength).map(data => <TrendingApp key={data.id} app={data}></TrendingApp>)
                    }
                </div>

                {/* Button */}
                <div className="flex justify-center mt-12">
                    <button onClick={() => setDataLength(datas.length)} className={`bg-purple-600 cursor-pointer hover:bg-purple-700 text-white px-6 py-2 rounded-md transition ${dataLength === datas.length ? "hidden" : ""}`}>
                        Show All
                    </button>
                </div>

            </div>
        </section>
    );
};

export default TrendingApps;