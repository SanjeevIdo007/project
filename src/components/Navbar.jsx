import React, { Component } from "react";
import logo from "../assets/images/Home.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa6";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { FaPlusSquare } from "react-icons/fa";

const Dropdownlinks1 = [
  {
    id: 1,
    name: "House",
    link: "/house",
  },
  {
    id: 2,
    name: "Lands",
    link: "/lands",
  },
  {
    id: 3,
    name: "Flats",
    link: "/flats",
  },
  {
    id: 4,
    name: "Apartments",
    link: "/apartments",
  },
];

const Dropdownlinks2 = [
  {
    id: 1,
    name: "Rent House",
    link: "/renthouse",
  },
  {
    id: 2,
    name: "Rent Lands",
    link: "/rentlands",
  },
  {
    id: 3,
    name: "Rent Flats",
    link: "/rentflats",
  },
  {
    id: 4,
    name: "Rent Apartments ",
    link: "/rentapartments",
  },
];

const Dropdownlinks3 = [
  {
    id: 1,
    name: "Sell House",
    link: "/sellhouse",
  },
  {
    id: 2,
    name: "Sell Lands",
    link: "/selllands",
  },
  {
    id: 3,
    name: "Sell Flats",
    link: "/sellflats",
  },
  {
    id: 4,
    name: "Sell Apartments ",
    link: "/sellapartments",
  },
];

const Dropdownlinks4 = [
  {
    id: 1,
    name: "Buy House",
    link: "/buyhouse",
  },
  {
    id: 2,
    name: "Buy Lands",
    link: "/buylands",
  },
  {
    id: 3,
    name: "Buy Flats",
    link: "/buyflats",
  },
  {
    id: 4,
    name: "Buy Apartments ",
    link: "/buyapartments",
  },
];

const Dropdownlinks5 = [
  {
    id: 1,
    name: "Shop Spaces",
    link: "/shopspaces",
  },
  {
    id: 2,
    name: "Office Spaces",
    link: "/officespaces",
  },
  {
    id: 3,
    name: "House Spaces",
    link: "/housespaces",
  },
  {
    id: 4,
    name: "Land Spaces",
    link: "/landspaces",
  },
];

const Dropdownlinks6 = [
  {
    id: 1,
    name: "Top Rented",
    link: "/toprented",
  },
  {
    id: 2,
    name: "Vacation spaces",
    link: "/vacation",
  },
  {
    id: 3,
    name: "Most Viewed",
    link: "/mostviewed",
  },
  {
    id: 4,
    name: "New Listed",
    link: "/newlist",
  },
  {
    id: 5,
    name: "Price Drops",
    link: "/pricedrop",
  },
];

const Navbar = () => {
  return (
    <div className="shadow-md bg-[#FFFFFF] dark:bg-[#212529] dark:text-[#FFFFFF] duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-[#0A2342]/60 py-2 ">
        <div className="contianer flex justify-between items-center">
          <div className="ml-5">
            <a href="#" className="font-bold tex-2xl sm:text-3xl flex gap-2 ">
              <img src={logo} alt="Logo" className="w-10" />
              Home
            </a>
          </div>

          {/* Search Navbar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="bg-[#FFFFFF]/20 w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded border border-[#E0E0E0] px-2 py-1 focus:outline-none focus:border-1 focus:border-[#0A2342]"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-[#0A2342] absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* Post button */}
            <div className="h-[50px] w-[50px] ">
              <img
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=200&q=80"
                alt="profilepPic"
                className="w-full h-full rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* lower Navbar */}
      <div className="flex justify-center items-center bg-[#F5F5F5] relative">
        <ul className="sm:flex hidden items-center gap-4 text-[#000000]">
          <div className=" flex items-center">
            {/* Property DropDown starts*/}
            <li className="group relative py px-3">
              <a
                href="property"
                className="flex items-center gap-[2px] py-2 text-[#000000] hover:text-[#0A2342]"
              >
                Property
              </a>
              <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-[#000000] shadow-md">
                <ul>
                  {Dropdownlinks1.map((data) => (
                    <li key={data.name}>
                      <a
                        href={data.link}
                        className="inline-block w-full rounded-md p-2 hover:bg-[#000000]/20"
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Rent DropDown starts*/}
            <li className="group relative py px-3">
              <a
                href="rent"
                className="flex items-center gap-[2px] py-2 text-[#000000] hover:text-[#0A2342]"
              >
                Rent
              </a>
              <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-[#000000] shadow-md">
                <ul>
                  {Dropdownlinks2.map((data) => (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="inline-block w-full rounded-md p-2 hover:bg-[#000000]/20"
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Sell DropDown starts*/}
            <li className="group relative py px-3">
              <a
                href="sell"
                className="flex items-center gap-[2px] py-2 text-[#000000] hover:text-[#0A2342]"
              >
                Sell
              </a>
              <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-[#000000] shadow-md">
                <ul>
                  {Dropdownlinks3.map((data) => (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="inline-block w-full rounded-md p-2 hover:bg-[#000000]/20"
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Buy DropDown starts */}
            <li className="group relative py px-3">
              <a
                href="buy"
                className="flex items-center gap-[2px] py-2 text-[#000000] hover:text-[#0A2342]"
              >
                Buy
              </a>
              <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-[#000000] shadow-md">
                <ul>
                  {Dropdownlinks4.map((data) => (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="inline-block w-full rounded-md p-2 hover:bg-[#000000]/20"
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Space DropDown starts */}
            <li className="group relative py px-3">
              <a
                href="space"
                className="flex items-center gap-[2px] py-2 text-[#000000] hover:text-[#0A2342]"
              >
                Spaces
              </a>
              <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-[#000000] shadow-md">
                <ul>
                  {Dropdownlinks5.map((data) => (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="inline-block w-full rounded-md p-2 hover:bg-[#000000]/20"
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Trending DropDown starts */}
            <li className="group relative cursor-pointer py">
              <a
                href="trending"
                className="flex items-center gap-[2px] py-2 text-[#000000] hover:text-[#0A2342]"
              >
                Trending
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>
              <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-[#000000] shadow-md">
                <ul>
                  {Dropdownlinks6.map((data) => (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="inline-block w-full rounded-md p-2 hover:bg-[#000000]/20"
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </div>
        </ul>

        <div className="hidden sm:flex items-center gap-4  absolute right-2 ">
          {/* Post button */}
          <button
            onClick={() => alert("Post not available yet")}
            className="bg-gradient-to-r from-[#0A2342] to-[#FBBF24] transition-all duration-200 text-[#FFFFFF] py-1 px-4 rounded flex items-center gap-2   group"
          >
            <span className="group-hover:block hidden transition-all duration-200">
              Post your Property
            </span>
            <FaPlusSquare className="text-xl text-[#FFFFF] drop-shadow-sm cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
