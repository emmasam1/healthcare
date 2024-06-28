import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import community from "../assets/icons/community.svg";
import toothbrush from "../assets/icons/toothbrush.svg";
import holdinghand from "../assets/icons/holdinghand.svg";
import img_2 from "../assets/images/img_2.jpg";

const Home = () => {
  useEffect(() => {
    document.title = "Home - Amazing & Steadfast Residential Agency Inc";
  }, []);

  return (
    <div>
      <div className="w-full sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden mt-11 ">
        <img
          src={img_2}
          alt="Description"
          className="w-full h-full object-fill"
        />
      </div>
      <div className="bg-gray-100 flex justify-center items-center flex-col text-center py-10 sm:py-20 mt-5">
        <h2 className="text-xl sm:text-3xl font-medium mx-4 text-green-700">
          Call us today to start a plan for you, and your loved ones
        </h2>
        <h2 className="text-lg sm:text-2xl font-medium mt-2 text-green-600">
          +1-301-768-0261, +1-240-838-4849
        </h2>
      </div>

      <div className="mt-14 flex flex-col items-center justify-center py-10 sm:py-20 bg-white">
        <h2 className="text-center text-xl sm:text-3xl text-green-700 mb-5 sm:mb-10">
          What We Can Do for You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-11/12 m-auto">
          <div className="bg-gray-100 p-4 flex justify-center flex-col items-center">
            <img src={community} alt="Community" className="w-12" />
            <h2 className="text-lg sm:text-xl font-bold text-green-700">
              Companion Care
            </h2>
            <p className="text-center mt-2 text-sm sm:text-base text-gray-700">
              Help with light housekeeping, grocery shopping, transportation…
            </p>
            <Link
              to="#"
              className="mt-7 text-sm sm:text-lg text-green-600 hover:text-green-700"
            >
              Learn more
            </Link>
          </div>
          <div className="bg-gray-100 p-4 flex justify-center flex-col items-center">
            <img src={toothbrush} alt="Toothbrush" className="w-12" />
            <h2 className="text-lg sm:text-xl font-bold text-green-700">
              Personal Care
            </h2>
            <p className="text-center mt-2 text-sm sm:text-base text-gray-700">
              There for physical assistance, hygiene, mobility…
            </p>
            <Link
              to="#"
              className="mt-7 text-sm sm:text-lg text-green-600 hover:text-green-700"
            >
              Learn more
            </Link>
          </div>
          <div className="bg-gray-100 p-4 flex justify-center flex-col items-center">
            <img src={holdinghand} alt="Holding Hand" className="w-12" />
            <h2 className="text-lg sm:text-xl font-bold text-green-700">
              Specialty Care
            </h2>
            <p className="text-center mt-2 text-sm sm:text-base text-gray-700">
              Support for conditions like Alzheimer’s, diabetes, Parkinson’s…
            </p>
            <Link
              to="#"
              className="mt-7 text-sm sm:text-lg text-green-600 hover:text-green-700"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 w-11/12 lg:w-3/5 m-auto mt-10 sm:mt-20 gap-10 bg-white">
        <div className="flex justify-center flex-col border-b sm:border-r-2 sm:border-b-0 p-5">
          <h2 className="text-lg sm:text-2xl font-semibold text-center text-green-700">
            Don't know which services you need?
          </h2>
          <div className="m-auto">
            <Button className="mt-8 sm:mt-14 hover:bg-transparent hover:text-green-600 border border-green-600 bg-green-600 text-white p-4 sm:p-6 px-8 sm:px-10">
              <Link to="/services">Learn more</Link>
            </Button>
          </div>
        </div>

        <div className="flex justify-center flex-col p-5">
          <h2 className="text-lg sm:text-2xl font-semibold text-center text-green-700">
            Not sure what types of care you need?
          </h2>
          <div className="m-auto">
            <Button className="mt-8 sm:mt-14 p-4 sm:p-6 px-8 sm:px-10 bg-white border border-green-600 text-green-600">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="w-[95%] sm:w-11/12 m-auto mt-10 sm:mt-20 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="pr-10 flex justify-center flex-col">
            <h2 className="text-xl sm:text-3xl text-green-700 mb-5 sm:mb-10">
              Compassionate Care and Support for Older Adults
            </h2>

            <h2 className="mb-5 text-lg sm:text-xl font-medium text-green-700">
              Discover how we create safe, comfortable environments where
              independence and well-being thrive.
            </h2>
            <p className="leading-8 text-sm sm:text-base text-gray-700">
              Welcome to Amazing & Steadfast Residential Agency Inc., dedicated
              to enhancing the lives of older adults through compassionate care
              and support. We specialize in creating safe, comfortable
              environments where independence and well-being thrive. Discover
              how we can help your loved ones live their best life today.
            </p>
            <div>
              <Button className="mt-5 p-4 sm:p-6 bg-green-600 text-white">
                <Link to="/services">Learn more</Link>
              </Button>
            </div>
          </div>
          <div className="bg-img2"></div>
        </div>
      </div>

      <div className="p-10 sm:p-20 bg-white">
        <h2 className="text-2xl sm:text-3xl text-center font-bold text-green-700">
          Award Winning Home Care
        </h2>
        <div className="m-auto w-full lg:w-[65%] mt-5">
          <p className="text-center text-sm sm:text-base text-gray-700">
            Amazing & Steadfast Residential Agency Inc. is a leading care agency
            that has been selected as a 2024 Provider of Choice, Employer of
            Choice, and Leader in Experience Award winner by Home Care Pulse. We
            are proud of our incredible staff and highly trained caregivers, who
            provide world-class service to elderly individuals and adults with
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
        <h2 className="text-center text-xl sm:text-3xl font-bold text-green-700">
          Our Value
        </h2>
        <div className="w-full lg:w-[60%] m-auto mt-8 sm:w-11/12">
          <p className="text-center text-sm sm:text-base text-gray-700">
            <b>At Amazing & Steadfast Residential Agency Inc.</b> we are guided
            by a set of core values that include compassion, respect, integrity,
            and excellence. We believe that these values are essential to
            providing the best possible care to our clients, and we strive to
            uphold them in everything we do
          </p>
        </div>
        <div className="flex justify-center items-center mt-9">
          <Button className="p-4 sm:p-5 px-10 sm:px-14 bg-green-600 text-white font-bold">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
