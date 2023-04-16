import React from "react";
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="">
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
          <h1 className="uppercase text-3xl text-[#00df9a] font-bold">React.</h1>
          <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas accusamus tenetur quibusdam animi ducimus numquam!</p>
          <ul className="list-none flex gap-5 mt-4">
            <li>
              <AiFillFacebook size={30} className="hover:scale-110 duration-300 cursor-pointer" />
            </li>
            <li>
              <AiFillInstagram size={30} className="hover:scale-110 duration-300 cursor-pointer" />
            </li>
            <li>
              <AiFillTwitterSquare size={30} className="hover:scale-110 duration-300 cursor-pointer" />
            </li>
            <li>
              <AiFillLinkedin size={30} className="hover:scale-110 duration-300 cursor-pointer" />
            </li>
            <li>
              <AiFillGithub size={30} className="hover:scale-110 duration-300 cursor-pointer" />
            </li>
          </ul>
        </div>
        <div className="flex flex-col lg:flex-row justify-between col-span-2">
          <div>
            <h3 className="font-medium text-2xl lg:text-2xl">Solutions</h3>
            <ul className="list-none flex flex-col">
              <li className="text-sm py-2">Analytics</li>
              <li className="text-sm py-2">Marketing</li>
              <li className="text-sm py-2">Commerce</li>
              <li className="text-sm py-2">Insights</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-2xl lg:text-2xl">Solutions</h3>
            <ul className="list-none flex flex-col">
              <li className="text-sm py-2">Pricing</li>
              <li className="text-sm py-2">Documentation</li>
              <li className="text-sm py-2">Guides</li>
              <li className="text-sm py-2">Api Status</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-2xl lg:text-2xl">Company</h3>
            <ul className="list-none flex flex-col">
              <li className="text-sm py-2">About</li>
              <li className="text-sm py-2">Blog</li>
              <li className="text-sm py-2">Jobs</li>
              <li className="text-sm py-2">Press</li>
              <li className="text-sm py-2">Careers</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-2xl lg:text-2xl">Legal</h3>
            <ul className="list-none flex flex-col">
              <li className="text-sm py-2">Claim</li>
              <li className="text-sm py-2">Policy</li>
              <li className="text-sm py-2">Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
