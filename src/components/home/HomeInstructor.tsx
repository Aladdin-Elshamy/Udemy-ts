import React from "react";
import img from "../../assets/home/images/instructor-1x-v3.jpg";
const HomeInstructor = () => {
  return (
    <div className=" min-h-screen container flex items-center justify-center py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="">
          <img src={img} className="mx-auto" alt="" />
        </div>
        <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-start">
          <h2 className="font-bold text-2xl">Become an instructor</h2>
          <p>
            Instructors from around the world teach millions of learners on
            Udemy. We provide the tools and skills to teach what you love.
          </p>
          <button className="bg-gray-900 text-white w-fit p-4">
            Start teaching today
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeInstructor;
