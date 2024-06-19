import React from "react";
import helpinghand from '../assets/images/helping.webp'

const About = () => {
  return (
    <div>
      <h2 className="text-center font-medium text-2xl sm:text-4xl mt-10">
        About Us
      </h2>

      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden mt-11">
      <img 
        src={helpinghand} 
        alt="Description" 
        className="w-full h-full object-cover"
      />
    </div>

    <div className="text-center mt-10 md:px-20 lg:px-32">
        <h2 className="mb-5 text-xl sm:text-2xl font-bold">Our Mission</h2>
        <p className="text-base sm:text-lg text-justify">
          <b>Amazing & Steadfast Residential Agency Inc.</b> is your locally owned and trusted source
          for healthcare. At Amazing & Steadfast Residential Agency Inc, we provide quality homecare services
          that include: companionship, meal preparation, personal care, bath
          assistance, light house cleaning, transportation to the grocery store,
          medical appointments, and much more. Whether a few hours a day or
          around the clock care, Caring Hearts will provide the level of care
          you need. Our caregivers are thoroughly checked & trained to ensure
          you peace of mind. Caring Hearts is licensed & insured. Our mission at
          Caring Hearts is to give back to the generations that have paved the
          way for us with respect, integrity, and compassion.
        </p>
      </div>

      
    </div>
  );
};

export default About;
