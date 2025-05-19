import React from 'react'

const Rent = () => {
  const Properties = [
      { 
        id: 1, 
        title: 'Rent Flats',
        location: 'Banepa', 
        price: 'Rs.20,000/month',
        imageUrl:'',
     },
     {
      id: 2,
      title: 'Rent House',
      location: 'Bhaktapur',    
      price: 'Rs.30,000/month',
      imageUrl:'',
     },

     {
      id: 3,
      title: 'Rent Apartment',
      location: 'Kathmandu',    
      price: 'Rs.15,000/month',
      imageUrl:'',
     },

     {
      id: 4,
      title: 'Shop Space',
      location: 'Patan',    
      price: 'Rs.25,000/month',
      imageUrl:'',
     },

     {
      id: 5,
      title: 'Land for Sale',
      location: 'Bhaktapur',    
      price: 'Rs.50,000/month',
      imageUrl:'',
     },
     {
      id: 6,
      title: 'Office Space',
      location: 'Bhaktapur',    
      price: 'Rs.40,000/month',
      imageUrl:'',
     },

  ];
  return (
    <div>
          <section className="bg-[#0A2342] text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Rental Property</h1>
          <p className="text-lg md:text-xl">Browse affordable homes, apartments, and more</p>
        </div>
      </section>

      {/* Search Filter */}
      <section className="py-10 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Location"
            className="flex-1 p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="number"
            placeholder="Max Price"
            className="flex-1 p-3 border border-gray-300 rounded-lg"
          />
          <button className="bg-[#0A2342] text-white px-6 py-3 rounded-lg">
            Search
          </button>
        </div>
      </section>

      {/* Property Listings */}
      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {Properties.map((Property) => (
            <div key={Property.id} className="rounded-xl p-4 shadow hover:shadow-xl transition">
              <div className='h-48 bg-gray-200 rounded-lg mb-4 rounded-lg bg-cover bg-center' style={{ backgroundImage: `url(${Property.imageUrl})` }}>     
                <h3 className='text-xl font-bold'>{Property.title}</h3>
                <p className='text-gray-600'>{Property.location}</p>
                <p className='text-lg font-semibold'>{Property.price}</p>
                </div>
              </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Rent