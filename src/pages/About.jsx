import React, { useEffect } from "react";
import helpinghand from "../assets/images/helping.webp";
import ahc from "../assets/images/ahc.png";
import img_3 from "../assets/images/img_3.jpg";
import img_1 from "../assets/images/img_1.jpg";
import abt_1 from "../assets/images/about_1.jpg";
import abt_2 from "../assets/images/about_2.jpg";
import abt_4 from "../assets/images/about_3.jpg";

const About = () => {
  useEffect(() => {
    document.title = "About - Amazing & Steadfast Residential Agency Inc";
  }, []);

  return (
    <div>
      <h2 className="text-center font-bold text-2xl sm:text-4xl relative">
        About Us
      </h2>

      <div className="w-full object-fill sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden mt-11 ">
        <img
          src={img_1}
          alt="Description"
          className="w-full h-full object-fill"
        />
      </div>

      <div className="w-5/6 m-auto mt-20 mb-14 flex flex-wrap items-start gap-6">
        <div className="w-full lg:w-1/3 flex-shrink-0">
          <img src={abt_1} alt="About" className="w-full h-auto" />
        </div>
        <div className="flex-1">
          <h2 className="mb-5 text-2xl font-bold">
            About Amazing & Steadfast Residential Agency Inc
          </h2>
          <p className="text-base sm:text-lg text-justify">
            Amazing & Steadfast Residential Agency Inc. Is a duly registered,
            Licensed, Insured and Bonded. We are passion driven high-quality
            home health care service provider to seniors and individuals with
            disabilities. Our team are experienced, passionate and results
            oriented healthcare experts with several years of track records in
            health care industry, who recognized the need for personalized care
            that tends to the needs of the mind and spirit as much as to the
            needs of the body.
          </p>
        </div>
      </div>

      <div className="w-5/6 m-auto mt-20 mb-14 flex flex-wrap lg:flex-nowrap gap-6">
        <div className="w-full  lg:w-1/3">
          <h2 className="mb-5 text-2xl font-bold">Our Mission</h2>
          <p className="text-base sm:text-lg text-justify">
            Our Mission, as a duly registered, Licensed, Insured and Bonded. We
            are passion driven high-quality home health care service provider to
            seniors and individuals with disabilities. Our team are experienced,
            passionate and results oriented healthcare experts with several
            years of track records in health care industry, who recognized the
            need for personalized care that tends to the needs of the mind and
            spirit as much as to the needs of the body.
          </p>
        </div>
        <div className="w-full lg:w-2/3 flex-shrink-0">
          <img src={abt_2} alt="About" className="w-full h-auto" />
        </div>
      </div>

      <div className="w-5/6 m-auto mt-20 gap-10 mb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <img src={img_3} alt="" className="w-full" />
          </div>
          <div className="h-52">
            <h2 className="mb-1 text-xl sm:text-2xl font-bold">What We Do</h2>
            <p>
              At Amazing & Steadfast Residential Agency Inc. We provide Care
              Givers who are experienced, professional, dependable, and
              compassionate and we are patient-centric.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 xl:h-96">
          <div>
            <img src={abt_4} alt="" className="w-full" />
          </div>
          <div className="relative md:top-[0] lg:-top-48 xl:-top-48">
            <h2 className="mb-1 text-xl sm:text-2xl font-bold">Homemaking</h2>
            <p>
              Amazing & Steadfast Residential Agency Inc. Licensed, Insured and
              Bonded provides unique, friendly and familiar face, our results
              oriented team helps you keep your home in the way you will love
              it. This can include:
            </p>

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
                <li>Grocery shopping and general errands</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
