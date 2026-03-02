import React from "react";

const Trust = () => {
  return (
    <section className="w-full bg-gradient-to-r from-purple-700 to-purple-500 py-24 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Trusted By Millions, Built For You
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Stat 1 */}
          <div>
            <p className="text-sm opacity-80 mb-4">Total Downloads</p>
            <h3 className="text-5xl md:text-6xl font-extrabold mb-4">
              29.6M
            </h3>
            <p className="text-sm opacity-90">
              21% More Than Last Month
            </p>
          </div>

          {/* Stat 2 */}
          <div>
            <p className="text-sm opacity-80 mb-4">Total Reviews</p>
            <h3 className="text-5xl md:text-6xl font-extrabold mb-4">
              906K
            </h3>
            <p className="text-sm opacity-90">
              46% More Than Last Month
            </p>
          </div>

          {/* Stat 3 */}
          <div>
            <p className="text-sm opacity-80 mb-4">Active Apps</p>
            <h3 className="text-5xl md:text-6xl font-extrabold mb-4">
              132+
            </h3>
            <p className="text-sm opacity-90">
              31 More Will Launch
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Trust;