// eslint-disable-next-line no-unused-vars
import React from "react";

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
   return (
      <div className="w-full h-[400px] flex items-center z-50 ">
         <div className="flex gap-2 items-center">
            {images.map((info, index) => (
               <div key={index} className="max-w-full">
                  <div className="flex items-center">
                     <img
                        src={info.image}
                        className="max-h-[160px] min-w-[100px]"
                        alt=""
                     />
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default SupportSlide;
