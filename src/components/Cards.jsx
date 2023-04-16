import React from "react";
import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";

const Cards = () => {
  return (
    <section className="py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem] bg-white" src={single} alt="avatar" />
          <h3 className="text-2xl font-bold text-center py-8">Single User</h3>
          <p className="text-4xl font-medium text-center">$149</p>
          <div className="text-center">
            <p className="border-b mx-8 py-2">500 GB Storage</p>
            <p className="border-b mx-8 py-2">1 Granted User</p>
            <p className="border-b mx-8 py-2">Send upto to GB</p>
          </div>
          <button className="w-[200px] bg-[#00df90] font-medium py-3 rounded-md mx-auto my-6 text-xl md:text-2xl">Start Trial</button>
        </div>
        <div className="shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300 bg-gray-100">
          <img className="w-20 mx-auto mt-[-3rem]" src={double} alt="avatar" />
          <h3 className="text-2xl font-bold text-center py-8">Single User</h3>
          <p className="text-4xl font-medium text-center">$149</p>
          <div className="text-center">
            <p className="border-b mx-8 py-2">500 GB Storage</p>
            <p className="border-b mx-8 py-2">1 Granted User</p>
            <p className="border-b mx-8 py-2">Send upto to GB</p>
          </div>
          <button className="w-[200px] bg-black font-medium py-3 rounded-md mx-auto my-6 text-xl md:text-2xl text-[#00df90]">Start Trial</button>
        </div>
        <div className="shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem] bg-white" src={triple} alt="avatar" />
          <h3 className="text-2xl font-bold text-center py-8">Single User</h3>
          <p className="text-4xl font-medium text-center">$149</p>
          <div className="text-center">
            <p className="border-b mx-8 py-2">500 GB Storage</p>
            <p className="border-b mx-8 py-2">1 Granted User</p>
            <p className="border-b mx-8 py-2">Send upto to GB</p>
          </div>
          <button className="w-[200px] bg-[#00df90] font-medium py-3 rounded-md mx-auto my-6 text-xl md:text-2xl">Start Trial</button>
        </div>
      </div>
    </section>
  );
};

export default Cards;
