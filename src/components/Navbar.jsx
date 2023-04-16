import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isNav, setisNav] = useState(true);
  const handlenav = () => {
    setisNav(!isNav);
  };
  return (
    <header className="text-white flex justify-between items-center container mx-auto">
      <h1 className="uppercase text-3xl text-[#00df9a] font-bold">React.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">
          <a href="/">Home</a>
        </li>
        <li className="p-4">
          <a href="/">Company</a>
        </li>
        <li className="p-4">
          <a href="/">Resources</a>
        </li>
        <li className="p-4">
          <a href="/">About</a>
        </li>
        <li className="p-4">
          <a href="/">Contact</a>
        </li>
      </ul>
      <div className="cursor-pointer md:hidden" onClick={handlenav}>
        {isNav ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
      </div>
      <div className={`md:hidden fixed top-0 pt-10 w-[60%] border-r border-r-gray-800 bg-[#000300] h-full ease-in-out duration-500 ${isNav ? "-left-[100%]" : "left-0"}`}>
        <h1 className="uppercase text-3xl text-[#00df9a] font-bold px-4">React.</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-700">
            <a href="/">Home</a>
          </li>
          <li className="p-4 border-b border-gray-700">
            <a href="/">Company</a>
          </li>
          <li className="p-4 border-b border-gray-700">
            <a href="/">Resources</a>
          </li>
          <li className="p-4 border-b border-gray-700">
            <a href="/">About</a>
          </li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
