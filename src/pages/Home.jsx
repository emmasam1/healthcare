import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import community from "../assets/icons/community.svg";
import toothbrush from "../assets/icons/toothbrush.svg";
import holdinghand from "../assets/icons/holdinghand.svg";
import img_2 from "../assets/images/img_2.jpg";

const Home = () => {
  return (
    <div>
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <img
          src={img_2}
          alt="Description"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-gray-100 flex justify-center items-center flex-col text-center py-40 mt-5">
        <h2 className="text-3xl sm:text-3xl font-medium mx-4 text-green-700">
          Call us today to start a plan for you, and your loved ones
        </h2>
        <h2 className="text-2xl sm:text-2xl font-medium mt-2 text-green-600">
          301-763-0261, 248-384-849
        </h2>
      </div>

      <div className="mt-14 flex flex-col items-center justify-center py-20 bg-white">
        <h2 className="text-center text-3xl sm:text-3xl text-green-700 mb-10">
          What We Can Do for You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-11/12 m-auto">
          <div className="bg-gray-100 p-4 flex justify-center flex-col items-center">
            <img src={community} alt="Community" className="w-12" />
            <h2 className="text-xl sm:text-2xl font-bold text-green-700">
              Companion Care
            </h2>
            <p className="text-center mt-2 text-sm sm:text-base text-gray-700">
              Help with light housekeeping, grocery shopping, transportation…
            </p>
            <Link
              to="#"
              className="mt-7 text-lg text-green-600 hover:text-green-700"
            >
              Learn more
            </Link>
          </div>
          <div className="bg-gray-100 p-4 flex justify-center flex-col items-center">
            <img src={toothbrush} alt="Toothbrush" className="w-12" />
            <h2 className="text-xl sm:text-2xl font-bold text-green-700">
              Personal Care
            </h2>
            <p className="text-center mt-2 text-sm sm:text-base text-gray-700">
              There for physical assistance, hygiene, mobility…
            </p>
            <Link
              to="#"
              className="mt-7 text-lg text-green-600 hover:text-green-700"
            >
              Learn more
            </Link>
          </div>
          <div className="bg-gray-100 p-4 flex justify-center flex-col items-center">
            <img src={holdinghand} alt="Holding Hand" className="w-12" />
            <h2 className="text-xl sm:text-2xl font-bold text-green-700">
              Specialty Care
            </h2>
            <p className="text-center mt-2 text-sm sm:text-base text-gray-700">
              Support for conditions like Alzheimer’s, diabetes, Parkinson’s…
            </p>
            <Link
              to="#"
              className="mt-7 text-lg text-green-600 hover:text-green-700"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 w-11/12 lg:w-3/5 m-auto mt-20 gap-10 bg-white">
        <div className="flex justify-center flex-col border-b sm:border-r-2 sm:border-b-0 p-5">
          <h2 className="text-2xl sm:text-2xl font-semibold text-center text-green-700">
            Already know which services you need?
          </h2>
          <div className="m-auto">
            <Button className="mt-8 sm:mt-14 hover:bg-transparent hover:text-green-600 border border-green-600 bg-green-600 text-white p-6 px-10">
              Contact us
            </Button>
          </div>
        </div>

        <div className="flex justify-center flex-col p-5">
          <h2 className="text-2xl sm:text-2xl font-semibold text-center text-green-700">
            Not sure what types of care you need?
          </h2>
          <div className="m-auto">
            <Button className="mt-8 sm:mt-14 p-6 px-10 bg-white border border-green-600 text-green-600">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="m-auto mt-20 w-full lg:w-11/12 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="pr-10 flex justify-center flex-col">
            <h1 className="mb-5 font-medium text-green-700">Veterans Care</h1>
            <h2 className="mb-5 text-xl sm:text-2xl font-medium text-green-700">
              Serving Those Who Served Our Nation
            </h2>
            <p className="leading-8 text-sm sm:text-base text-gray-700">
              Right at Home Little Rock Metro is proud to offer our services to
              the many veterans in our communities. We understand the importance
              of providing care for these men and women who served our nation.
              There are a number of ways Right at Home can help veteran seniors
              and adults with disabilities stay in their homes and live richer
              lives. Someone who served in the active military, reserve or
              National Guard may qualify for VA health care benefits or State
              programs that can connect you with a variety of service providers
              including Right at Home.
            </p>
            <div>
              <Button className="mt-5 p-6 bg-green-600 text-white">
                Learn more
              </Button>
            </div>
          </div>
          <div className="bg-img2"></div>
        </div>
      </div>

      <div className="p-10 lg:p-20 bg-white">
        <h2 className="text-3xl sm:text-5xl text-center font-bold text-green-700">
          Award Winning Home Care
        </h2>
        <div className="m-auto w-full lg:w-[65%] mt-5">
          <p className="text-center text-sm sm:text-base text-gray-700">
            Right at Home Little Rock Metro is a leading in-home care company
            that has been selected as 2024 Provider of Choice, Employer of
            Choice, and Leader in Experience Award winners by Home Care Pulse.
            We are proud of our incredible staff and highly trained caregivers,
            who provide world class service to seniors and adults with
            disabilities in our community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-11 justify-center items-center w-full lg:w-[80%] m-auto">
          <div className="bg-img3"></div>
          <div className="bg-img4"></div>
          <div className="bg-img5"></div>
          <div className="bg-img6"></div>
        </div>
      </div>

      <div className="h-3/6 py-10 mb-5 bg-white">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-green-700">
          Our Value
        </h2>
        <div className="w-full lg:w-[60%] m-auto mt-8">
          <p className="text-center text-sm sm:text-base text-gray-700">
            <b>At Amazing & Steadfast Residential Agency Inc.</b> we are guided
            by a set of core values that include compassion, respect, integrity,
            and excellence. We believe that these values are essential to
            providing the best possible care to our clients, and we strive to
            uphold them in everything we do
          </p>
        </div>
        <div className="flex justify-center items-center mt-9">
          <Button className="p-5 px-14 bg-green-600 text-white font-bold">
            <Link to="/about">Learn more</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
