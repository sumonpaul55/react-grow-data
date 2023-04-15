import React from "react";
import laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-[1224px] mx-auto grid md:grid-cols-2">
        <div className="">
          <img className="w-full my-4 mx-auto" src={laptop} alt="laptop" />
        </div>
        <div className="flex flex-col justify-center p-4 md:p-0">
          <p className="uppercase text-[#00df9a] font-bold">Data analytics dashboard</p>
          <h2 className="capitalize text-2xl sm:text-3xl md:text-4xl font-bold py-2">Manage data analytics centerlly</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deserunt maiores perferendis ipsa earum enim! Libero error tempora esse maiores at nobis
            ratione fuga? Laborum vitae nulla odit aperiam blanditiis.
          </p>
          <button className="w-[200px] bg-black text-[#00df9a] font-medium py-3 rounded-md mx-auto my-6 text-xl md:text-2xl">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
