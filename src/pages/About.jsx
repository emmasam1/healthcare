import React from "react";
import helpinghand from "../assets/images/helping.webp";
import ahc from "../assets/images/ahc.png";
import img_3 from "../assets/images/img_3.jpg";
import img_1 from "../assets/images/img_1.jpg";

const About = () => {
  return (
    <div>
      <h2 className="text-center font-bold text-2xl sm:text-4xl relative">
        About Us
      </h2>

      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden mt-11">
        <img
          src={img_1}
          alt="Description"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="text-center mt-10 md:px-20 lg:px-32 w-5/6 m-auto">
        <h2 className="mb-5 text-xl sm:text-2xl font-bold">About Us</h2>
        <p className="text-base sm:text-lg text-justify sm:px-8">
          <b>Amazing & Steadfast Residential Agency Inc.</b> Is a duly
          registered, Licensed, Insured and Bonded. We are passion driven
          high-quality home health care service provider to seniors and
          individuals with disabilities. Our team are experienced, passionate
          and results oriented healthcare experts with several years of track
          records in health care industry, who recognized the need for
          personalized care that tends to the needs of the mind and spirit as
          much as to the needs of the body.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 w-5/6 m-auto mt-20 gap-10 mb-14">
        <div>
          <img src={img_3} alt="" />
        </div>
        <div>
          <h2 className="mb-1 text-xl sm:text-2xl font-bold">What We Do</h2>
          <p>
            At Amazing & Steadfast Residential Agency Inc. We provide Care
            Givers who are experienced, professional, dependable, and
            compassionate and we are patient - centric.
          </p>

          <div className="mt-5">
            <h2 className="mb-1 text-xl sm:text-2xl font-bold">Homemaking</h2>
            <p>
              Amazing & Steadfast Residential Agency Inc. Licensed, Insured and
              Bonded provides unique, friendly and familiar face, our results
              oriented team helps you keep your home in the way you will love
              it. This can include:{" "}
            </p>
          </div>

          <div className="mt-5 bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="font-bold text-xl mb-4">Light Housekeeping</h2>
            <ul className="list-disc pl-5 space-y-2 text-base">
              <li>Preparing and folding laundry</li>
              <li>Taking out the garbage as directed</li>
              <li>Home organization and management</li>
              <li>General cleaning</li>
            </ul>
          </div>
          <div className="mt-5 bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="font-bold text-xl mb-4">Meal preparation</h2>
            <ul className="list-disc pl-5 space-y-2 text-base">
              <li>Cooking nutritious meals</li>
              <li>Serving it to your comfort</li>
              <li>Grocery shopping and general errands </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
