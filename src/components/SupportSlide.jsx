// eslint-disable-next-line no-unused-vars
import React from "react";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [
   {
      image: "https://images.ctfassets.net/q8mvene1wzq4/2qouu5dgmPIwFAfymqAaCt/51f6420ce20948a7b32a51576b64f061/airbnb.svg?w=320&q=60&fm=",
   },
   {
      image: "https://images.ctfassets.net/q8mvene1wzq4/6vP6ET09OOpnoGeOyWv5sh/1c438dc20c31182f865597eeda7aebec/ascension.svg?w=320&q=60&fm=",
   },
   {
      image: "https://images.ctfassets.net/q8mvene1wzq4/6HPCN4MZjLDYxRyNLkr8UB/fc1d2e75a7775ece3ecab814a20338d4/delta.svg?w=320&q=60&fm=",
   },
   {
      image: "https://images.ctfassets.net/q8mvene1wzq4/3J9GP5MrI6Lh5Tv3h13Z0i/4979bff135108ba92f63f70b10a8a603/modivcare.svg?w=320&q=60&fm=",
   },
   {
      image: "https://images.ctfassets.net/q8mvene1wzq4/4C5aQl7JaIK8Hs2tPOmyVQ/51c3848a9c817459fa5b399c7bb3fa14/salesforce.svg?w=320&q=60&fm=",
   },
   {
      image: "https://images.ctfassets.net/q8mvene1wzq4/3TANpALSa53QtgOf8bJvFL/b5c0a15c968fe1eada70d616a90bbc2e/SAP_Concur.svg?w=320&q=60&fm=",
   },
   {
      image: "https://images.ctfassets.net/q8mvene1wzq4/2XBJ4fyw11PNDRUzq5PGJo/1ed0167d95598a10e4ae28f187120870/slack.svg?w=320&q=60&fm=",
   },
   {
      image: "https://images.ctfassets.net/q8mvene1wzq4/3jy4lmes6gSDWkCJ926YAa/23c9a44501c65e8c74783e5ee5e16e35/USC.svg?w=320&q=60&fm=",
   },
];

const SupportSlide = () => {
   const sliderRef = React.useRef(null);

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
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      lazyLoad: true,
      centerPadding: 0,
      // beforeChange: (current, next) => setSliderIndex(next),
      responsive: [
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
            },
         },
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   };

   return (
      <div className="w-full ">
         <div className="">
            <Slider ref={sliderRef} {...sliderSettings}>
               {images.map((info, index) => (
                  <div key={index} className="">
                     <div className="md:min-w-[100px]">
                        <img
                           src={info.image}
                           className="w-full md:max-h-[160px] "
                           alt=""
                        />
                     </div>
                  </div>
               ))}
            </Slider>
         </div>
         <div className="flex justify-center items-center gap-7 mt-6">
            <PrevArrow />
            <NextArrow />
         </div>
      </div>
   );
};

export default SupportSlide;
