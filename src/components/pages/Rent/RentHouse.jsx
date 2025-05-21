import React from 'react'
import logo from '../../../assets/images/sell.jpg'

const RentHouse = () => {
  return (
     <div>
              <section className="bg-[#0A2342] text-white py-20 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Find Your Perfect Property to Rent
                  </h1>
                  <p className="text-lg md:text-xl">
                    Browse affordable homes, apartments, and more
                  </p>
                </div>
              </section>
              
              <div className="max-w-6xl mx-auto px-4 py-8 justify-items-center">
                <h2 className="text-3xl font-bold mb-6 ">Featured Properties</h2>
                <div className="flex justify-center gap-4 ">
        
                   {/* property card 1*/}
                   <div className="hover:bg-blue-400 p-1.5 rounded transition-all duration-300 hover:scale-105 cursor-pointer">  
                  <div className=" h-48 overflow-hidden rounded-md"> 
                    <img src={logo} alt="logo" className="w-[250px] h-auto rounded-md"/>
                  </div> 
                  <div className="p-4">
                    <h3 className="">Joint Family</h3>
                    <p className="">Mandandeupaur,kavre</p>
                     <div className=" flex justify-between">
                      <div className="p-auto">
                         <span>3 Beds</span>
                      </div>
                      <div className="m-auto">RS.50,00,000</div>
                    </div>
                  </div>      
                  </div>     
         
                 {/* property card 2*/}
                <div className="hover:bg-blue-400 p-1.5 rounded transition-all duration-300 hover:scale-105 cursor-pointer">  
                  <div className="h-48 overflow-hidden rounded-md"> 
                    <img src={logo} alt="logo" className="w-[250px] h-auto rounded-md"/>
                  </div> 
                  <div className="p-4">
                    <h3 className="">Joint Family</h3>
                    <p className="">Mandandeupaur,kavre</p>
                     <div className="flex justify-between">
                      <div className="p-auto">
                         <span>3 Beds</span>
                      </div>
                      <div className="m-auto">Rs.20,00,00,000</div>
                    </div>
                  </div>      
                </div>
        
                {/* property card 3*/}
                <div className="hover:bg-blue-400 p-1.5 rounded transition-all duration-300 hover:scale-105 cursor-pointer">  
                  <div className="relative h-48 overflow-hidden rounded-md"> 
                    <img src={logo} alt="logo" className="w-[250px] h-auto rounded-md"/>
                  </div> 
                  <div className="p-4">
                    <h3 className="">Modern Family</h3>
                    <p className="">bethanchok,kavre</p>
                     <div className="flex justify-between">
                      <div className="p-auto">
                         <span>3 Beds</span>
                      </div>
                      <div className="m-auto">Rs.50,00,000</div>
                    </div>
                  </div>      
                </div>
        
                {/* property card 4*/}
                <div className="hover:bg-blue-400 p-1.5 rounded transition-all duration-300 hover:scale-105 cursor-pointer">  
                  <div className="h-48 overflow-hidden rounded-md"> 
                    <img src={logo} alt="logo" className="w-[250px] h-auto rounded-md"/>
                  </div> 
                  <div className="p-4">
                    <h3 className="">Modern Family</h3>
                    <p className="">bethanchok,kavre</p>
                     <div className="flex justify-between"> 
                      <div className="p-auto">
                         <span>3 Beds</span>
                      </div>
                      <div className="m-auto">Rs.50,00,000</div>
                    </div>
                  </div>      
                </div>
              </div>
        
            </div>
        
            {/* lower body*/}
            <div className="">
                    <p className="text-center font-bold text-2xl mb-6">This is the lower body portion</p>
                    <div>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero atque culpa in nobis. Nemo laudantium sint necessitatibus vero quibusdam asperiores fugit excepturi, nostrum accusamus impedit repudiandae veniam voluptatem illo perferendis? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, commodi quae atque quisquam molestias modi ratione illum quam facilis amet mollitia aliquid, pariatur sit ipsam suscipit ducimus reiciendis? Beatae, nihil.</p>
                    </div>
            </div>
        
            </div>
  )
}

export default RentHouse;