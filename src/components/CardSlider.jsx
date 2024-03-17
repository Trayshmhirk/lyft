// eslint-disable-next-line no-unused-vars
import React from "react";

const cardInfo = [
   {
      title: "Wait & save",
      image: "https://images.ctfassets.net/q8mvene1wzq4/7otqt30AWZBqIOvjxSWC4e/0381705809e9e10f905af52008a96d39/ws.svg?w=&q=60&fm=",
      extra1: "Budget-friendly",
      extra2: "Private",
   },
   {
      title: "Lyft",
      image: "https://images.ctfassets.net/q8mvene1wzq4/2DS1wcFwCBPt7BDZDnC2Wo/846cc676fe7004f74dc4794a198c9de5/lyft_icon_2x.png?w=&q=60&fm=webp",
      extra1: "Efficient",
      extra2: "Private",
   },
   {
      title: "Bikes & Scooters",
      image: "https://images.ctfassets.net/q8mvene1wzq4/54zBNZxHpcSOwmg4YXPlA6/d4efb0f4c50c3627ee2718bce66da8cd/watson_scooter_icons_2x.png?w=&q=60&fm=webp",
      extra1: "Efficient",
      extra2: "Eco-friendly",
   },
   {
      title: "Priority Pickup",
      image: "https://images.ctfassets.net/q8mvene1wzq4/2IFTlPmvQ6X04CVqGMqsYq/affc79708ce1358642a8e2f97c85116c/priority_pickup.svg?w=&q=60&fm=",
      extra1: "Efficient",
      extra2: "Private",
   },
   {
      title: "Extra Comfort",
      image: "https://images.ctfassets.net/q8mvene1wzq4/5Z4GbwwL0uaBJcCLOEhcCx/9df7a63ece2284b2269f4da37c827d1d/small_3x_V2.png?w=&q=60&fm=webp",
      extra1: "Roomier cars",
      extra2: "Top drivers",
   },
   {
      title: "XL",
      image: "https://images.ctfassets.net/q8mvene1wzq4/2HtCyRlopxqoxhbHCuEiqn/3e837bec9c7a45e2e70fea5b175973fe/xtra_seats_icon_2x.png?w=&q=60&fm=webp",
      extra1: "Extra seats",
      extra2: "Private",
   },
   {
      title: "Transit",
      image: "https://images.ctfassets.net/q8mvene1wzq4/6uhGufB2Lt55HbAx6M4TbY/679d658220366795d4e3ac967796ec20/transit_icon_2x.png?w=&q=60&fm=webp",
      extra1: "Budget-friendly",
      extra2: "Eco-friendly",
   },
];

const CardSlider = () => {
   return (
      <div className="w-full h-[400px] flex items-center z-50 ">
         <div className="flex gap-2 items-center">
            {cardInfo.map((info, index) => (
               <div key={index} className="card">
                  <button className="flex flex-col items-center gap-6 py-6 px-4 text-center cursor-pointer sm:w-[280px] sm:h-[284px]">
                     <div className="flex flex-col items-center gap-2">
                        <h2 className="flex items-center h-[44px]">
                           <span className="text-[22px] font-bold">
                              {info.title}
                           </span>
                        </h2>

                        <img
                           src={info.image}
                           className="sm:w-[122px] sm:h-[96px]"
                        />
                     </div>
                     <p className="text-sm font-medium">
                        <span className="inline-block align-middle leading-5"></span>{" "}
                        {info.extra1}
                        <br />
                        <span className="inline-block align-middle leading-5"></span>{" "}
                        {info.extra2}
                     </p>
                  </button>
               </div>
            ))}
         </div>
      </div>
   );
};

export default CardSlider;
