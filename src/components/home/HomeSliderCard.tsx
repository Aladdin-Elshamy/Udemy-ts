import React from "react";
import { BiCheck } from "react-icons/bi";

const HomeSliderCard = () => {
  return (
    <div className="shadow-md w-full relative p-4 flex flex-col gap-2">
      {/* <span
        className="absolute left-[-20px] top-1/2 translate-y-[-50%] w-0 h-0 
      border-[10px] border-solid border-transparent border-r-gray-300 "
      ></span> */}
      <div className="flex flex-col gap-2">
        <h3 className="font-bold">
          The Complete 2024 Web Development Bootcamp
        </h3>
        <div className="flex gap-2 items-center">
          <span className="p-1 bg-amber-300">Bestseller</span>
          <span className="text-sm">Updated September 2024</span>
        </div>
      </div>
      <div className="flex gap-2">
        <span className="text-sm text-gray-500">15 total hours</span>
        <span className="text-sm text-gray-500">Beginner Level</span>
        <span className="text-sm text-gray-500">Subtitles, CC</span>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          Full Practice Exam included + explanations | Learn Cloud Computing |
          Pass the AWS Cloud Practitioner CLF-C02 exam!
        </p>

        <p className="flex gap-2 text-sm items-center">
          <BiCheck size={30} />
          FULLY UPDATED FOR CLF-C02: Pass the AWS Certified Cloud Practitioner
          Certification
        </p>
        <p className="flex gap-2 text-sm items-center">
          <BiCheck size={30} />
          FULLY UPDATED FOR CLF-C02: Pass the AWS Certified Cloud Practitioner
          Certification
        </p>
      </div>

      <button className="bg-[#A435F0] w-full gap-2 p-2 text-white">
        Add to Cart
      </button>
    </div>
  );
};

export default HomeSliderCard;
