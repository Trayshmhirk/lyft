import React, { useEffect, useState } from "react";
import axios from "axios";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FiSearch } from "react-icons/fi";

const CitiesPage = () => {
   const [states, setStates] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const options = {
            method: "GET",
            url: "https://us-states.p.rapidapi.com/basic",
            headers: {
               "X-RapidAPI-Key":
                  "0d4cd79afdmsh4a5dc9b6680a0fap168ffajsn7ba9a45278e5",
               "X-RapidAPI-Host": "us-states.p.rapidapi.com",
            },
         };

         try {
            const response = await axios.request(options);
            console.log(response.data);
            setStates(response.data);
         } catch (error) {
            console.error(error);
         }
      };

      fetchData();
   }, []);

   return (
      <main className="cities">
         <div className="max-w-[1280px] w-full h-full mx-auto px-4 flex flex-col gap-5 bg-white md:flex-row md:justify-center md:gap-14 lg:gap-20 xl:gap-28">
            <div className="w-full max-w-5xl md:w-[83.3333%] md:pr-4">
               <section className="py-16 hidden">
                  <div className="flex flex-col gap-12">
                     <label className="relative w-full border-b border-majorelleBlue">
                        <input
                           className="w-full font-bold border-0 p-0 py-4 pr-14 text-[40px] text-black placeholder:text-majorelleBlue placeholder:opacity-30 rounded-none focus:border-[1px] focus:border-majorelleBlue"
                           placeholder="Find Your City"
                        />
                        <div className="absolute top-5 right-0">
                           <FiSearch className="text-[40px] font-bold text-majorelleBlue" />
                        </div>
                     </label>

                     <div className="w-full flex justify-end">
                        <div className="relative h-14 w-60 flex justify-between items-center px-4 border border-[#0c0b3173] rounded-xl">
                           <div className="">
                              <span className="text-sm text-[#0c0b31b3]">
                                 Country
                              </span>
                              <div className="w-full">{"United States"}</div>
                           </div>

                           <ul className="dropdown-shadow absolute -bottom-[120px] left-0 right-0 max-h-[280px] bg-white rounded-xl mt-2">
                              <li className="">
                                 <div className="w-full min-h-14 flex items-center justify-between px-4 py-3 cursor-pointer">
                                    <p className="font-medium">Canada</p>
                                    <span>
                                       <FontAwesomeIcon
                                          icon={faCheck}
                                          className="font-medium"
                                       />
                                    </span>
                                 </div>
                              </li>
                              <li className="">
                                 <div className="w-full min-h-14 flex items-center justify-between px-4 py-3 cursor-pointer">
                                    <p className="font-medium">United States</p>
                                    <span>
                                       <FontAwesomeIcon
                                          icon={faCheck}
                                          className="font-medium"
                                       />
                                    </span>
                                 </div>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </section>

               <section className="hidden">
                  <ul className="">
                     {states.map((state, index) => (
                        <React.Fragment key={index}>
                           <li>
                              <div className="flex flex-col gap-6">
                                 <h2 className="font-bold">
                                    {state.name.toUpperCase()}
                                 </h2>

                                 <div></div>
                              </div>
                           </li>
                        </React.Fragment>
                     ))}
                  </ul>
               </section>
            </div>
         </div>
      </main>
   );
};

export default CitiesPage;
