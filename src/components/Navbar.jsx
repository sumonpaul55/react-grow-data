import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="text-white flex justify-between items-center  container mx-auto">
      <h1 className="uppercase text-3xl text-[#00df9a] font-bold">React.</h1>
      <ul className="flex hidden">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div>
        <AiOutlineMenu size={25} />
      </div>
      <div className="fixed top-0 left-0 w-[60%] border-r border-r-gray-800 bg-[#000300] h-full">
        <h1 className="uppercase text-3xl text-[#00df9a] font-bold px-4">React.</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-700">Home</li>
          <li className="p-4 border-b border-gray-700">Company</li>
          <li className="p-4 border-b border-gray-700">Resources</li>
          <li className="p-4 border-b border-gray-700">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
