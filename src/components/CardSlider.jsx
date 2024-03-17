// import {useState} from "react"
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const infoSlider = [
   {
      title: "Wait & save",
      image: "https://images.ctfassets.net/q8mvene1wzq4/7otqt30AWZBqIOvjxSWC4e/0381705809e9e10f905af52008a96d39/ws.svg?w=&q=60&fm=",
      extra1: "budget-friendly",
      extra2: "private",
   },
   {
      title: "Wait & save",
      image: "https://images.ctfassets.net/q8mvene1wzq4/7otqt30AWZBqIOvjxSWC4e/0381705809e9e10f905af52008a96d39/ws.svg?w=&q=60&fm=",
      extra1: "budget-friendly",
      extra2: "private",
   },
   {
      title: "Wait & save",
      image: "https://images.ctfassets.net/q8mvene1wzq4/7otqt30AWZBqIOvjxSWC4e/0381705809e9e10f905af52008a96d39/ws.svg?w=&q=60&fm=",
      extra1: "budget-friendly",
      extra2: "private",
   },
   {
      title: "Wait & save",
      image: "https://images.ctfassets.net/q8mvene1wzq4/7otqt30AWZBqIOvjxSWC4e/0381705809e9e10f905af52008a96d39/ws.svg?w=&q=60&fm=",
      extra1: "budget-friendly",
      extra2: "private",
   },
];

const setting = {
   dots: true,
};

const CardSlider = () => {
   return (
      <div className="card-slider-container">
         <Slider {...setting}>
            {infoSlider.map((infoslide) => {
               <div>
                  <h4>{infoslide.title}</h4>
                  <div>
                     <img src={infoslide.image} alt="" />
                  </div>
               </div>;
            })}
         </Slider>
      </div>
   );
};

export default CardSlider;
