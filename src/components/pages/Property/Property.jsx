import React from 'react'
import logo from '../../../assets/images/hero1.jpg'

export const Property = () => {
  return (
    <div> 
    <section className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center text-white" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1650&q=80")' }}>
      <div className="absolute inset-0 bg-[#0A2342]/70"></div>

      <div className="relative z-10 max-w-3xl px-4 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">
          Find Your Perfect Space   
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-8">
          Buy, rent, or sell your dream property effortlessly with us.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-[#FBBF24] text-[#0A2342] hover:bg-yellow-400 transition-all duration-300 py-3 px-6 rounded font-semibold shadow-lg">
            Explore Listings
          </button>
          <button className="bg-white text-[#0A2342] hover:bg-gray-200 transition-all duration-300 py-3 px-6 rounded font-semibold shadow-lg">
            Post Your Property
          </button>
        </div>
      </div>
    </section>
</div>
  )
}
 
export default Property;
