import { useLoaderData } from "react-router-dom";
import SApp from "./SApp";

const Apps = () => {

    const apps = useLoaderData();

    // console.log(apps);

    return (
        <section className="bg-gray-100 py-20">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Our All Applications
                    </h2>
                    <p className="text-gray-500 mt-3">
                        Explore All Apps on the Market developed by us. We code for Millions
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* cards */}
                    {
                        apps.map(app => <SApp key={app.id} app={app}></SApp>)
                    }
                </div>

                {/* Button */}
                {/* <div className="flex justify-center mt-12">
                    <button onClick={() => setDataLength(datas.length)} className={`bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md transition ${dataLength === datas.length ? "hidden" : ""}`}>
                        Show All
                    </button>
                </div> */}

            </div>
        </section>
    );
};

export default Apps;