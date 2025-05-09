import React from 'react'
import logo from '../../../assets/images/hero1.jpg'

export const Property = () => {
  return (
    <div className='flex justify-between' style={{backgroundImage: "url(../../../assets/images/img3.png)"}}>

<section class="bg-[#0A2342] text-white py-20" style={{backgroundImage: "url(../../../assets/images/img3.png)"}}>
  <div className='mx-auto px-6 md:px-12 items-center'>
      <div className='w-full'>
        <h1 className='text-4xl md:text-5xl font-bold leading-tight mb-6'>
          Find Your Dream Home
        </h1>
        <p>
          Explore Premium properties, affordable home in your area.
        </p>
        <a>
          Browse Listings
        </a>
      </div>  
  </div>
  {/* <div class="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
   
    <div class="w-full md:w-1/2 mb-10 md:mb-0">
      <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Find Your Dream Home
      </h1>
      <p class="text-lg mb-8 text-gray-300">
        Explore premium listings, luxury properties, and affordable homes in your area.
      </p>
      <a href="#listings" class="bg-white text-[#0A2342] font-semibold py-3 px-6 rounded-xl shadow hover:bg-gray-100 transition">
        Browse Listings
      </a>
    </div>

    <div class="w-full md:w-1/2">
      <img src="" alt="Beautiful Property" class="rounded-2xl shadow-lg" />
    </div>
  </div> */}
</section>

        {/* <div className=''>
            <p>Property</p>
        </div>

        <div className=''>
            <p>property</p>
        </div>

        <div className=''>
            Property3
        </div> */}
  </div>

  )
}
 
export default Property;
