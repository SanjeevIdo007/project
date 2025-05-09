import React from 'react'

const Footer = () => {
  return (
    <div className='text-center items-center flex justify-between bg-[#0A1E35]'>
      
     
     <div className='pl-6'> 
        <p className='text-gray-300'>Homes.com</p>
        <p className='text-gray-300'>Banepa,Kavre 449900</p>
        <p className='text-gray-300'>+9779860437219</p>
      </div>
  

      <div className='items-center'>
          <p className='text-gray-300'>Apartments</p> 
          <p className='text-gray-300'>House</p>
          <p className='text-gray-300'>Shop Spaces</p> 
          <p className='text-gray-300'>Land</p>
          <p className='text-gray-300'>Office Spaces</p> 
          <p className='text-gray-300'>Flats</p> 
      </div>

      <div className='pr-6 items-center'>
        <p className='text-gray-300'>Follow Us</p>
        <p className='text-gray-300'>Facebook</p>
        <p className='text-gray-300'>Instagram</p>
        <p className='text-gray-300'>Twitter</p>
      </div>
    </div>
  )
}

export default Footer;