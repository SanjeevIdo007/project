import React from "react";
import Navbar from "./components/Navbar";
// import Router from "express/lib/router";
import { BrowserRouter as Router,Link, Route, Routes} from "react-router";

// import of the property pages
import { Property } from "./components/pages/Property/Property";
import SellHouse from "./components/pages/Property/SellHouse";
import SellLands from "./components/pages/Property/SellLands";
import SellFlats from "./components/pages/Property/SellFlats";
import SellApartments from "./components/pages/Property/SellApartments";


// import of the rent pages
import Rent from "./components/pages/Rent/Rent";
import RentHouse from "./components/pages/Rent/RentHouse";
import RentLands from "./components/pages/Rent/RentLands";
import RentFlats from "./components/pages/Rent/RentFlats";
import RentApartments from "./components/pages/Rent/RentApartments";


//import of the Buy pages
import Buy from "./components/pages/Buy/Buy";
import BuyHouse from "./components/pages/Buy/BuyHouse";
import BuyLands from "./components/pages/Buy/BuyLands";
import BuyFlats from "./components/pages/Buy/BuyFlats";
import BuyApartments from "./components/pages/Buy/BuyApartments";

//import of the Space pages
import Spaces from "./components/pages/Spaces/Spaces";
import ShopSpaces from "./components/pages/Spaces/ShopSpaces";
import OfficeSpaces from "./components/pages/Spaces/OfficeSpaces";
import HouseSpaces from "./components/pages/Spaces/HouseSpaces";
import LandSpaces from "./components/pages/Spaces/LandSpaces";

//import of the Trending pages
import Trending from "./components/pages/Trending/Trending";
import TopRented from "./components/pages/Trending/TopRented";
import MostViewed from "./components/pages/Trending/MostViewed";
import Vacation from "./components/pages/Trending/Vacation";
import NewList from "./components/pages/Trending/NewList";
import PriceDrop from "./components/pages/Trending/PriceDrop";

import Footer from  "./components/Footer"

const App =() =>{
    return <div>
        {/* Routes of page starts here */}
        <Router> 
        <Navbar/>
        <Routes>
            <Route>
                {/* property routes starts here */}
                <Route path="/property" element={<Property/>}/>
                <Route path="/sell" element={<Property/>}/>
                <Route path="/sellhouse" element={<SellHouse/>}/>
                <Route path="/selllands" element={<SellLands/>}/>
                <Route path="/sellflats" element={<SellFlats/>}/>
                <Route path="/sellapartments" element={<SellApartments/>}/>

                {/* Rent routes starts here */}
                <Route path="/rent" element={<Rent/>}/>
                <Route path="/renthouse" element={<RentHouse/>}/>
                <Route path="/rentlands" element={<RentLands/>}/>
                <Route path="/rentflats" element={<RentFlats/>}/>
                <Route path="/rentapartments" element={<RentApartments/>}/>

                

              {/* Buy routes starts here */}
              <Route path="/buy" element={<Buy/>}/>
                <Route path="/buyhouse" element={<BuyHouse/>}/>
                <Route path="/buylands" element={<BuyLands/>}/>
                <Route path="/buyflats" element={<BuyFlats/>}/>
                <Route path="/buyapartments" element={<BuyApartments/>}/>
                
                {/* Spaces routes starts here */}
                <Route path="/spaces" element={<Spaces/>}/>
                <Route path="/shopspaces" element={<ShopSpaces/>}/>
                <Route path="/officespaces" element={<OfficeSpaces/>}/>
                <Route path="/housespaces" element={<HouseSpaces/>}/>
                <Route path="/landspaces" element={<LandSpaces/>}/>  

                {/* Trending routes starts here */}
                <Route path="/trending" element={<Trending/>}/>
                <Route path="/toprented" element={<TopRented/>}/>
                <Route path="/vacation" element={<Vacation/>}/>
                <Route path="/mostviewed" element={<MostViewed/>}/>
                <Route path="/newlist" element={<NewList/>}/>
                <Route path="/pricedrop" element={<PriceDrop/>}/>  

            </Route>
        </Routes>
            <Footer/>
        </Router>
        
    </div>
};

export default App;