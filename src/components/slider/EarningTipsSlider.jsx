// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const data = [
   {
      id: uuid(),
      name: "Frankie",
      location: "San Jose",
      tip: "Opening the doors and assisting with heavy luggage shows that we care.",
      image: "https://images.ctfassets.net/q8mvene1wzq4/5wR7D3y1wydDxp9MsAQvqq/04831c597a4f9a2648b650ab71546e5d/NewEarningsMessaging_Frankie_Headshot.png?w=300&q=60&fm=webp",
   },
   {
      id: uuid(),
      name: "Cherida",
      location: "Bakersfield",
      tip: "I try to make meaningful connections with people.",
      image: "https://images.ctfassets.net/q8mvene1wzq4/7FSDpYBwrDkP9AQUcKDoeT/c91ac246125e8c6b261283a25f2aa865/NewEarningsMessaging_Cherida_Headshot.png?w=300&q=60&fm=webp",
   },
   {
      id: uuid(),
      name: "Ariana",
      location: "Detroit",
      tip: "I love advising passengers of great night spots, shopping, or local sights.",
      image: "https://images.ctfassets.net/q8mvene1wzq4/1UvRsvPpku6LI4em25WKQ5/09b4c8fef7c07b7c6e1c991a2154fcf1/NewEarningsMessaging_Ariana_Headshot.png?w=300&q=60&fm=webp",
   },
   {
      id: uuid(),
      name: "Stephanie",
      location: "Philadelphia",
      tip: "I try to be conscious of the details, whether it's the temperature of the car, or the volume of music.",
      image: "https://images.ctfassets.net/q8mvene1wzq4/150bQ06wq6h5Q5Cl0L1Rpd/d666202bb95cde9ec178f32c90998e0c/NewEarningsMessaging_Stephanie_Headshot.png?w=300&q=60&fm=webp",
   },
];

const EarningTipsSlider = () => {
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
      <div className="flex flex-col gap-12">
         <Slider ref={sliderRef} {...sliderSettings} className="">
            {data.map((item, index) => (
               <div key={index} className="h-full w-full ">
                  <div
                     className="flex flex-col gap-10 items-center text-center"
                     key={index}
                  >
                     <img src={item.image} alt="" className="w-32 h-32" />

                     <p className="text-3xl font-light md:text-4xl md:leading-[44px]">
                        <q className="block">{item.tip}</q>
                     </p>

                     <p>{`— ${item.name}, ${item.location} driver`}</p>
                  </div>
               </div>
            ))}
         </Slider>

         {/* <Slider ref={sliderRef} {...sliderSettings} className=""></Slider> */}

         <div className="flex justify-center items-center gap-6">
            <PrevArrow />
            <div className="flex gap-3">{renderDots()}</div>
            <NextArrow />
         </div>
      </div>
   );
};

export default EarningTipsSlider;
