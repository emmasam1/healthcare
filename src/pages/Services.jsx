import React from "react";
import img1 from "../assets/images/service_1.jpg";
import { Card } from "antd";
import hero from '../assets/images/service_hero.jpg'

const { Meta } = Card;

const Services = () => {

  const data = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      title: "Preparing and folding laundry",
      content:
        "Our caregivers are trained to efficiently handle laundry tasks, including washing, drying, folding, and putting away clothes. We ensure that your loved one's clothes are clean, fresh, and well-organized.",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      title: "Taking out the garbage as directed",
      content:
        "Our caregivers can assist with regular garbage disposal according to your specific instructions. Whether it's daily, weekly, or as needed, we ensure that your home remains clean and sanitary.",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      title: "Home organization and management",
      content:
        "We help maintain a clutter-free and organized home environment. From arranging items to keeping spaces tidy, our caregivers ensure that everything is in its place.",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150",
      title: "General Cleaning",
      content:
        "Our caregivers can handle various cleaning tasks, such as dusting, vacuuming, mopping, and cleaning bathrooms and kitchens. We strive to create a clean and comfortable living space for your loved one.",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/150",
      title: "Cooking nutritious meals",
      content:
        "We provide meal preparation services tailored to your loved one's dietary needs and preferences. Our caregivers ensure that your loved one receives delicious and nutritious meals every day.",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/150",
      title: "Serving it to your comfort",
      content:
        "Our caregivers offer assistance with meal service, ensuring that meals are served at the right time and in a manner that meets your loved one's preferences. We aim to make mealtime enjoyable and stress-free.",
    },
    {
      id: 7,
      image: "https://via.placeholder.com/150",
      title: "Grocery shopping and general errands ",
      content:
        "We can help with grocery shopping and running general errands, ensuring that your loved one has everything they need. Our caregivers can also assist with picking up prescriptions and other essential items.",
    },
  ];

  return (
    <div>
         <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mb-28">
        <div className="absolute inset-0 bg-green-900 bg-opacity-50"></div>
        <img
          src={hero}
          alt="Description"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-4/5 m-auto mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data.map((e) => (
            <Card
            id={e.id}
            hoverable
            style={{
            //   width: 300,
              height: 400,
            }}
            cover={<img alt="example" src={img1} />}
          >
            <Meta title={e.title} description={e.content} />
          </Card>
          ))}
        </div>
      </div>
   
    </div>
  );
};

export default Services;
