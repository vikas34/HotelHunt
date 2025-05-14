import React from "react";
import Logo from "../assets/Logo.png";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" bg-slate-200 shadow-md p-1.5 ">
      <div className="flex justify-between items-center max-w-6xl mx-auto ml-0.5 mr-0.5">
        {/* <h1 className='font-bold text-sm sm:text-xl flex-wrap'>
            <span className='text-blue-500'>Hotel</span>
            <span className='text-orange-500'>Hunt</span>
        </h1> */}

        <Link to='/'> <img
          src={Logo} alt="img"
          className=" h-[40px] sm:h-[50px] sm:w-[100px]  pt-1 pb-1 cursor-pointer"
        /></Link>

        <form className="bg-slate-100 rounded-3xl p-2 flex items-center cursor-pointer">
          <input
            type="text"
            placeholder="Serach..."
            className="bg-transparent w-24 sm:w-64 focus:outline-none"
          />
          <FaSearch className="text-slate-500" />
        </form>
        <ul className="flex gap-4">
            <Link to='/'><li className="hidden sm:inline text-slate-700 hover:underline">Home</li></Link>
            <Link to='/about'><li className=" hidden sm:inline text-slate-700 hover:underline">About</li></Link>
            <Link to='/signin'><li className=" text-slate-700 hover:underline">Sign-In</li></Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
