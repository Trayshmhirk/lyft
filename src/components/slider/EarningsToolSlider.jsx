// import React from 'react';
import { useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import {
   GenericPhone_11,
   Full_Width_Image_Desktop,
   Mobile_Background,
} from "../../Images/Images";

const data = [
   {
      id: uuid(),
      title: "Weekly planner",
      linkText: "See all your bonuses",
      text: "in one place, and get guidance on when and where to drive to meet your earnings goals.",
      image: "https://images.ctfassets.net/q8mvene1wzq4/7kiAMb0bx0kX6TW9qHPE4s/935d5327f3c07b798114af333a9fe965/NewEarningsMessaging_Desktop_Weekly_planner_UI_EN_3x.png?w=700&q=75",
   },
   {
      id: uuid(),
      title: "Stay within area",
      linkText: "Set a radius",
      text: "of 5–10 miles so you can stay in busy areas.",
      image: "https://images.ctfassets.net/q8mvene1wzq4/7dAey0SIlr8I2vbwEfcYQC/a691dbc8a1c60bec68e5c39cc755b57c/NewEarningsMessaging_Desktop_Stay_Within_UI_EN_3x.png?w=700&q=75",
   },
   {
      id: uuid(),
      title: "Scheduled rides",
      linkText: "Lock in rides",
      text: "that work with your driving plans. Scheduled rides include extra earnings to cover wait time.**",
      image: "https://images.ctfassets.net/q8mvene1wzq4/6o8cloCyqYoDBh4iQ9EDQW/9dd63035693c17751bd36afdb0b93f44/NewEarningsMessaging_Desktop_Scheduled_rides_UI_EN_3x.png?w=700&q=75",
   },
   {
      id: uuid(),
      title: "Wait times on the map",
      linkText: "Find busy areas",
      text: "near you in real time.",
      image: "https://images.ctfassets.net/q8mvene1wzq4/4O2L7i04ytESmSogFAsCkU/8dfe218c64e67e9991032372e087f0ad/NewEarningsMessaging_Desktop_Ride_Request_Wait_Times_UI_EN_3x.png?w=700&q=75",
   },
];

// slidesToScroll: 1,
const EarningsToolSlider = () => {
   const [sliderIndex, setSliderIndex] = useState(0);
   const sliderRef = useRef(null);

   const PrevArrow = () => {
      return (
         <div
            className="bottom-0 left-[40%] w-8 h-8 flex items-center justify-center rounded-full bg-opaqueIndigo cursor-pointer"
            onClick={() => sliderRef.current.slickPrev()}
         >
            <FaArrowLeft />
         </div>
      );
   };

   const NextArrow = () => {
      return (
         <div
            className="bottom-0 right-[40%] w-8 h-8 flex items-center justify-center rounded-full bg-opaqueIndigo cursor-pointer"
            onClick={() => sliderRef.current.slickNext()}
         >
            <FaArrowRight />
         </div>
      );
   };

   const sliderSettings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      lazyLoad: true,
      centerMode: true,
      centerPadding: 0,
      beforeChange: (current, next) => setSliderIndex(next),
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 1,
               infinite: true,
            },
         },
      ],
   };

   const renderDots = () => {
      const dots = [];
      for (let i = 0; i < data.length; i++) {
         dots.push(
            <div
               key={i}
               className={`dot ${sliderIndex === i ? "active" : ""}`}
               onClick={() => sliderRef.current.slickGoTo(i)}
            />
         );
      }
      return dots;
   };

   return (
      <div className="flex flex-col gap-8">
         <div className="relative">
            <div className="h-[280px] absolute top-0 left-0 right-0 md:h-[500px]">
               <img
                  src={Full_Width_Image_Desktop}
                  alt=""
                  className="hidden w-full h-full md:block"
               />
               <img
                  src={Mobile_Background}
                  alt=""
                  className="block w-full h-full md:hidden object-cover object-center"
               />
            </div>

            <div className="max-w-[1280px] w-full mx-auto px-4 z-50 md:px-6">
               <Slider ref={sliderRef} {...sliderSettings} className="">
                  {data.map((item, index) => (
                     <div className="flex flex-col" key={index}>
                        <div className="flex flex-col gap-6 md:flex-row md:justify-between md:mx-[64px] md:gap-0 lg:mx-[80px] xl:mx-[104px]">
                           <div className="driver-flex-1 md:mt-[500px]">
                              <h2 className="text-3xl font-semibold md:pt-10 md:text-4xl md:leading-[44px]">
                                 {item.title}
                              </h2>
                           </div>

                           <div className="mt-10 mx-auto -order-1 md:order-none md:mt-16 md:mx-16">
                              <div
                                 className="relative w-[147px] h-[300px] overflow-hidden md:w-[293px] md:h-[600px]"
                                 style={{
                                    backgroundImage: `url("${GenericPhone_11}")`,
                                    backgroundPosition: "center center",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                 }}
                              >
                                 <div
                                    className="absolute top-0 left-0 bottom-0 right-0 my-[5px] mx-[6.5px] rounded-[7px] inset-0 overflow-hidden md:my-[10px] md:mx-[13px] md:rounded-[15.5px]"
                                    style={{
                                       backgroundImage: `url("${item.image}")`,
                                       backgroundColor: "white",
                                       backgroundPosition: "center center",
                                       backgroundSize: "cover",
                                       backgroundRepeat: "no-repeat",
                                    }}
                                 ></div>
                              </div>
                           </div>

                           <div className="driver-flex-2 md:mt-[500px]">
                              <div className=" flex flex-col gap-4 md:pt-10">
                                 <p className="text-base">
                                    <Link className="link-underline">
                                       {item.linkText}
                                    </Link>{" "}
                                    {item.text}
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </Slider>
            </div>
         </div>

         {/* <Slider ref={sliderRef} {...sliderSettings} className=""></Slider> */}

         <div className="flex justify-center items-center gap-6">
            <PrevArrow />
            <div className="flex gap-3">{renderDots()}</div>
            <NextArrow />
         </div>
      </div>
   );
};

export default EarningsToolSlider;
