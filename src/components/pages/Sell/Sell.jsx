import React from "react";
import logo from "../../../assets/images/sell.jpg";

const Sell = () => {
  return (
    <div>
      <section className="bg-[#0A2342] text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Perfect Property to Sell
          </h1>
          <p className="text-lg md:text-xl">
            Browse affordable homes, apartments, and more
          </p>
        </div>
      </section>
      <div className="max-w-6xl mx-auto px-4 py-8 justify-items-center">
        <h2 className="text-3xl font-bold mb-6 ">Featured Properties</h2>

        <div className="flex justify-center gap-4">

        <div>   
            <img src={logo} alt="logo" className="w-[250px] h-auto "/>
        </div>

        <div>
            <img src={logo} alt="logo" className="w-[250px] h-auto"/>
        </div>

        <div>
            <img src={logo} alt="logo" className="w-[250px] h-auto"/> 
        </div>

        <div>
            <img src={logo} alt="logo" className="w-[250px] h-auto"/> 
        </div>
      </div>

    </div>
    </div>
  );
};

export default Sell;
