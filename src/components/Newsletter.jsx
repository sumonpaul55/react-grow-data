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
          <div className="flex flex-col md:flex-row justify-center items-center">
            <input className="p-3 w-full text-black rounded-md" type="email" placeholder="Enter Email" />
            <button className="w-[200px] bg-[#00df90] rounded-md font-medium text-xl sm:text-md lg:text-2xl md:ml-3 my-6 px-6 py-3 lg:px-0">Notify Me</button>
          </div>
          <p>
            We care about the protection of your data. Read our{" "}
            <a className="text-[#00df90]" href="/privacy&policy">
              Privacy & Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
