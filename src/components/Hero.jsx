import React from "react";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mx-auto flex flex-col w-full text-center justify-center h-screen">
        <p className="uppercase text-[#00df9a] font-bold p-2">growing with data analytics</p>
        <h1 className="capitalize text-4xl sm:text-6xl md:text-7xl font-bold md:py-6">grow this data.</h1>
        <div className="flex justify-center items-center">
          <p className="text-xl sm:text-4xl md:text-5xl font-boldnpm">Fast, flexible financing for : </p>
          <TypeAnimation sequence={["BTC", "KTL", "BTF", "BTL", "TCL"]} className="text-xl sm:text-4xl md:text-5xl font-boldnpm ml-1" repeat={Infinity} speed={500} />
        </div>
        <p className="text-xl md:text-2xl font-bold text-gray-600 my-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga officiis aliquam pariatur quasi?
        </p>
        <button className="w-[200px] bg-[#00df90] font-medium py-3 rounded-md mx-auto my-6 text-xl md:text-2xl">Get Started</button>
      </div>
    </div>
  );
};
export default Hero;
