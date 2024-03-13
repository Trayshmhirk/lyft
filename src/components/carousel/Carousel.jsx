// import React from 'react';
import { useState } from 'react';
import {v4 as uuid} from "uuid"
import {FaArrowLeft, FaArrowRight} from "react-icons/fa"

import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import './Carousel.scss'; // Import your custom CSS file
// slidesToScroll: 1,
const Carousel = () => {
   const NextArrow = ({onClick})=>{
      return (<div className='arrow next' onClick={onClick}>
         <FaArrowRight/>
      </div>)
   }
   const PrevArrow = ({onClick})=>{
      return (<div className='arrow prev' onClick={onClick}>
         <FaArrowLeft/>
      </div>)
   }

   const [sliderIndex, setSliderIndex] = useState(0) 
   const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      lazyLoad: true,
      centerMode:true,
      centerPadding: 0,
      nextArrow: <NextArrow/>,
      prevArrow: <PrevArrow/>,
      beforeChange: (current, next)=> setSliderIndex(next)

   };

   const testimony = [
      {
         id: uuid(),
         name: "Harold",
         quote: "As a student, it’s hard to complete my class work around a schedule. I started driving more with Trip and realized it was the perfect opportunity to make money and work on my own time! Driving with Trip gives me freedom in my schedule to focus on school, which is my main priority.",

         image: "https://images.ctfassets.net/q8mvene1wzq4/4XI9Rg1V0ZbIZyKFoTIxuf/8e09c8a25c576532136755f5bcebde45/harold_driver.png?w=300&q=60&fm=webp",
         extra: "Driving with Trip since 2020"
      },
      {
         id: uuid(),
         name: "Christine",
         quote: "I'm a disabled Marine Corps veteran, and because of my disability, I'm no longer able to work in a structured environment. The few hours a week that I drive connects me to my community and gives me extra money to help make ends meet.",
         image: "https://images.ctfassets.net/q8mvene1wzq4/3Hn90lN9DlHkIX1tcsM8bK/917b4043e2a08907a8e07668821a98c8/christine_driver.png?w=300&q=60&fm=webp",
         extra: "Driving with Trip since 2016"
      },
      {
         id: uuid(),
         name: "Timothy",
         quote: "Driving with Trip is the perfect way to make money and be there for my family’s needs. I love providing a way to get my passengers from point A to B. Independence is key for me, and I enjoy meeting new people while driving!",
         image: "https://images.ctfassets.net/q8mvene1wzq4/7gGtACD0jNfqxw13TG69mk/8d44ecee6eca293be979b16d2dce7b79/timothy_driver.png?w=300&q=60&fm=webp",
         extra: "Driving with Trip since 2017"
      },
      {
         id: uuid(),
         name: "Mary",
         quote: "My motto is very simple. It doesn't cost you a penny to be nice and kind, but it will cost you everything if you're not. If I'm free and somebody needs my help, I'll be the first one to jump in, in a heartbeat.",
         image: "https://images.ctfassets.net/q8mvene1wzq4/5rz5QNSF3JN4ruKqGQBhiC/6f9196a1bcf65d6ba63470d197308e05/mary_driver.png?w=300&q=60&fm=webp",
         extra: "Driving with Trip since 2019"
      }
   ]

   return (
      <div className="carousel-container">
         <Slider {...sliderSettings} className="carousel-slider">
            {testimony.map((tmn,idx)=>(
               <div key={tmn.id} className={idx === sliderIndex? "slide activeSlide" : "slide"}>
                  <div className="img-container">
                     <img src={tmn.image} alt="" className='pf-img' />
                  </div>
                  <p className='quote'><q>{tmn.quote}</q></p>
                  <span className='person-name'>-{tmn.name}</span>
                  <p className='extra'>{tmn.extra}</p>
               </div>
            ))}
         </Slider>
      </div>
   );
};

export default Carousel;
