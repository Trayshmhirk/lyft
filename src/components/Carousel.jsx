// import React from 'react';
import { useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const testimony = [
   {
      id: uuid(),
      name: "Harold",
      quote: "As a student, it’s hard to complete my class work around a schedule. I started driving more with Trip and realized it was the perfect opportunity to make money and work on my own time! Driving with Trip gives me freedom in my schedule to focus on school, which is my main priority.",
      image: "https://images.ctfassets.net/q8mvene1wzq4/4XI9Rg1V0ZbIZyKFoTIxuf/8e09c8a25c576532136755f5bcebde45/harold_driver.png?w=300&q=60&fm=webp",
      extra: "Driving with Trip since 2020",
   },
   {
      id: uuid(),
      name: "Christine",
      quote: "I'm a disabled Marine Corps veteran, and because of my disability, I'm no longer able to work in a structured environment. The few hours a week that I drive connects me to my community and gives me extra money to help make ends meet.",
      image: "https://images.ctfassets.net/q8mvene1wzq4/3Hn90lN9DlHkIX1tcsM8bK/917b4043e2a08907a8e07668821a98c8/christine_driver.png?w=300&q=60&fm=webp",
      extra: "Driving with Trip since 2016",
   },
   {
      id: uuid(),
      name: "Timothy",
      quote: "Driving with Trip is the perfect way to make money and be there for my family’s needs. I love providing a way to get my passengers from point A to B. Independence is key for me, and I enjoy meeting new people while driving!",
      image: "https://images.ctfassets.net/q8mvene1wzq4/7gGtACD0jNfqxw13TG69mk/8d44ecee6eca293be979b16d2dce7b79/timothy_driver.png?w=300&q=60&fm=webp",
      extra: "Driving with Trip since 2017",
   },
   {
      id: uuid(),
      name: "Mary",
      quote: "My motto is very simple. It doesn't cost you a penny to be nice and kind, but it will cost you everything if you're not. If I'm free and somebody needs my help, I'll be the first one to jump in, in a heartbeat.",
      image: "https://images.ctfassets.net/q8mvene1wzq4/5rz5QNSF3JN4ruKqGQBhiC/6f9196a1bcf65d6ba63470d197308e05/mary_driver.png?w=300&q=60&fm=webp",
      extra: "Driving with Trip since 2019",
   },
];

// slidesToScroll: 1,
const Carousel = () => {
   const [sliderIndex, setSliderIndex] = useState(0);
   const sliderRef = useRef(null);

   const PrevArrow = () => {
      return (
         <div
            className="bottom-0 left-[40%] w-8 h-8 flex items-center justify-center rounded-full border border-cetaceanBlue"
            onClick={() => sliderRef.current.slickPrev()}
         >
            <FaArrowLeft />
         </div>
      );
   };

   const NextArrow = () => {
      return (
         <div
            className="bottom-0 right-[40%] w-8 h-8 flex items-center justify-center rounded-full border border-cetaceanBlue"
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
      slidesToShow: 3,
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
      for (let i = 0; i < testimony.length; i++) {
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
      <div className="">
         <Slider ref={sliderRef} {...sliderSettings} className="">
            {testimony.map((tmn, idx) => (
               <div
                  key={tmn.id}
                  className={`
                     h-full w-full px-8 
                     ${idx === sliderIndex ? "text-black" : "text-darkElectricBlue "}
                  `}
               >
                  <div className="flex flex-col items-center gap-8 text-center ">
                     <img
                        src={tmn.image}
                        alt=""
                        className={`
                           max-w-20 w-full h-auto transition-transform duration-300 delay-[400ms] scale-[.6]
                           ${idx === sliderIndex ? "scale-100" : "opacity-50"}
                        `}
                     />

                     <p className="text-xl">
                        <q>{tmn.quote}</q>
                     </p>
                     <div className="flex flex-col gap-2">
                        <p className="font-medium">--{tmn.name}</p>
                        <p className="italic">{tmn.extra}</p>
                     </div>
                  </div>
               </div>
            ))}
         </Slider>

         <div className="flex justify-center items-center gap-7 mt-6">
            <PrevArrow />
            <div className="flex gap-4">{renderDots()}</div>
            <NextArrow />
         </div>
      </div>
   );
};

export default Carousel;
