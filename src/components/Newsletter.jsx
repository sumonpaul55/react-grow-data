import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-2">
      <div className="max-w-[1240px] grid mx-auto items-center lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="text-xl sm:text-3xl md:text-4xl font-bold py-2">Want tips & tricks to optimize your flow?</h1>
          <p>sign up to our newsletter and stay up to date</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row">
            <input className="p-3 w-full text-black" type="email" placeholder="Enter Email" />
            <button className="w-[200px] bg-[#00df90] font-medium rounded-md text-xl md:text-2xl ml-0 sm:ml-4 px-6 py-3 sm:py-0">Notify Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
