import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import community from "../assets/icons/community.svg";
import toothbrush from "../assets/icons/toothbrush.svg";
import holdinghand from "../assets/icons/holdinghand.svg";
import hero from '../assets/images/home-hero.jpg'

const Home = () => {
  return (
    <div>
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden mt-11">
      <img 
        src={hero} 
        alt="Description" 
        className="w-full h-full object-cover"
      />
    </div>
      <div className="bg-gray-100 pt-10 h-96 flex justify-center items-center flex-col text-center">
        <h2 className="text-3xl sm:text-5xl font-medium mx-4">
          Call us today to start a plan for you, and your loved ones
        </h2>
        <h2 className="text-2xl sm:text-4xl font-medium mt-2">+234(80)34-123-900</h2>
      </div>
      <div className="mt-14 flex flex-col items-center justify-center">
        <h2 className="text-center text-3xl sm:text-5xl font-bold mb-5">
          What We Can Do for You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-11/12 m-auto">
          <div className="bg-gray-100 p-4 flex justify-center flex-col items-center">
            <img src={community} alt="Community" className="w-12" />
            <h2 className="text-xl sm:text-2xl font-bold">Companion Care</h2>
            <p className="text-center mt-2 text-sm sm:text-base">
              Help with light housekeeping, grocery shopping, transportation…
            </p>
            <Link to="#" className="mt-7 text-lg text-blue-600">
              Learn more
            </Link>
          </div>
          <div className="bg-gray-100 p-4 flex justify-center flex-col items-center">
            <img src={toothbrush} alt="Toothbrush" className="w-12" />
            <h2 className="text-xl sm:text-2xl font-bold">Personal Care</h2>
            <p className="text-center mt-2 text-sm sm:text-base">
              There for physical assistance, hygiene, mobility…
            </p>
            <Link to="#" className="mt-7 text-lg text-blue-600">
              Learn more
            </Link>
          </div>
          <div className="bg-gray-100 p-4 flex justify-center flex-col items-center">
            <img src={holdinghand} alt="Holding Hand" className="w-12" />
            <h2 className="text-xl sm:text-2xl font-bold">Specialty Care</h2>
            <p className="text-center mt-2 text-sm sm:text-base">
              Support for conditions like Alzheimer’s, diabetes, Parkinson’s…
            </p>
            <Link to="#" className="mt-7 text-lg text-blue-600">
              Learn more
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 w-11/12 lg:w-3/5 m-auto mt-20 gap-10">
        <div className="flex justify-center flex-col border-b sm:border-r-2 sm:border-b-0 p-5">
          <h2 className="text-2xl sm:text-4xl font-semibold text-center">
            Already know which services you need?
          </h2>
          <div className="m-auto">
            <Button className="mt-8 sm:mt-14 hover:bg-transparent hover:text-blue-600 border border-blue-600 bg-blue-600 text-white p-6 px-10">
              Contact us
            </Button>
          </div>
        </div>

        <div className="flex justify-center flex-col p-5">
          <h2 className="text-2xl sm:text-4xl font-semibold text-center">
            Not sure what types of care you need?
          </h2>
          <div className="m-auto">
            <Button className="mt-8 sm:mt-14 p-6 px-10">Contact us</Button>
          </div>
        </div>
      </div>

      <div className="m-auto mt-20 w-full lg:w-11/12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="pr-10 flex justify-center flex-col">
            <h1 className="mb-5 font-medium">Veterans Care</h1>
            <h2 className="mb-5 text-xl sm:text-2xl font-medium">
              Serving Those Who Served Our Nation
            </h2>
            <p className="leading-8 text-sm sm:text-base">
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
              <Button className="mt-5 p-6 bg-blue-600 text-white">
                Learn more
              </Button>
            </div>
          </div>
          <div className="bg-img2"></div>
        </div>
      </div>

      <div className="p-10 lg:p-20">
        <h2 className="text-3xl sm:text-5xl text-center font-bold">
          Award Winning Home Care
        </h2>
        <div className="m-auto w-full lg:w-[65%] mt-5">
          <p className="text-center text-sm sm:text-base">
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

      <div className="mt-15">
        <h2 className="text-center text-3xl sm:text-4xl font-bold">Our Story</h2>
        <div className="w-full lg:w-[60%] m-auto mt-8">
          <p className="text-center text-sm sm:text-base">
            Home—there’s no place like it. It’s where your memories are. Where
            you raised your family and where friends have gathered for life’s
            celebrations. It’s been your basecamp through good times and bad.
            And it’s where you want to stay. At Right at Home, our intention is
            to help you do just that. Why? Because we exist to be your guide to
            living successfully at home, wherever home may be. It’s our purpose.
          </p>
        </div>
        <div className="w-full lg:w-[60%] m-auto mt-5">
          <p className="text-center text-sm sm:text-base">
            Aging, disability, illness or injury can make living at home a
            challenge. We believe that no one should have to face the long list
            of complex decisions and unforeseen changes alone. We are experts,
            providing not just care, but coaching and experience to help
            navigate every step of the journey. Right at Home’s trained
            caregivers are passionate about helping clients because they know
            with each life they impact, they are changing the world.
          </p>
        </div>
        <div className="flex justify-center items-center mt-9">
          <Button className="p-5 px-14 bg-blue-600 text-white font-bold">
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
