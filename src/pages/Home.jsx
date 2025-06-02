import React from 'react';

const Home = () => {
  return (
    <div className="font-sans pt-16"> {/* Push content below fixed navbar */}
      
      {/* Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center px-4 pt-20"> {/* Added pt-20 */}
        
        {/* Background Image */}
        <img
          src="https://disk.com/wp-content/uploads/2024/09/digital-priniting_367726020_S.jpg"
          alt="Printing Banner"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl px-6 py-8 shadow-xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
            Welcome to Smart Print & Stationery
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed">
            Your one-stop solution for online stationery, printing, and photocopy needs.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10">
          Our Services
        </h2>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          
          {/* Stationery Service */}
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQodSTbw3m5Poyg1EgUakoNVJmc4ZNwx65-g&s"
              alt="Stationery"
              className="mx-auto mb-4 w-full h-auto max-h-40 object-contain"
            />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Stationery Items</h3>
            <p className="text-sm sm:text-base">
              Order pens, notebooks, files, and other essentials from our online catalogue.
            </p>
          </div>

          {/* Printing Service */}
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
            <img
              src="https://industry.pulpandpaper-technology.com/articles/images/laser-printers.jpg"
              alt="Printing"
              className="mx-auto mb-4 w-full h-auto max-h-40 object-contain"
            />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Online Printing</h3>
            <p className="text-sm sm:text-base">
              Upload your documents and get high-quality prints delivered to your doorstep.
            </p>
          </div>

          {/* Photocopy Service */}
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
            <img
              src="https://p.turbosquid.com/ts-thumb/zC/BYdgVt/WO/canonmultifunctioncopierimagerunneradvance4551ic4dmodel000/jpg/1642518968/300x300/sharp_fit_q85/e59fe3f5a771c717eba76fb8e75724dd102350ce/canonmultifunctioncopierimagerunneradvance4551ic4dmodel000.jpg"
              alt="Photocopy"
              className="mx-auto mb-4 w-full h-auto max-h-40 object-contain"
            />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Photocopy Services</h3>
            <p className="text-sm sm:text-base">
              Fast and affordable photocopying with doorstep pickup and delivery.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
