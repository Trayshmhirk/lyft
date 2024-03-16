// import React from 'react'
import { useState } from "react";
import CustomButton from "./customButton";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { MdGTranslate } from "react-icons/md";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import HorizontalLine from "./horizontalLine";
import {
   faFacebook,
   faInstagram,
   faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
   const [toggleDriver, setToggleDriver] = useState(false);
   const [toggleRider, setToggleRider] = useState(false);
   const [toggleLyft, setToggleLyft] = useState(false);
   const [toggleTranslate, setToggleTranslate] = useState(false);

   const toggleDriverDropdown = () => {
      setToggleDriver(!toggleDriver);
   };

   const toggleRiderDropdown = () => {
      setToggleRider(!toggleRider);
   };

   const toggleLyftDropdown = () => {
      setToggleLyft(!toggleLyft);
   };

   const handleToggleTranslateDropdown = () => {
      setToggleTranslate(!toggleTranslate);
   };

   return (
      <footer className="flex justify-center bg-white md:py-8">
         <div
            className={`footer-container max-w-[1280px] w-full flex flex-col gap-8 px-4 pb-4 md:pt-8 md:px-12 md:pb-0 lg:gap-2 lg:px-20 xl:px-28`}
         >
            <div
               className={`flex flex-col md:gap-4 md:flex-row md:justify-between`}
            >
               {/* DRIVER */}
               <div className="pr-4 md:p-0">
                  <div className="hidden flex-col gap-8 md:flex">
                     <h2 className="font-semibold">Driver</h2>
                     <div className="flex flex-col gap-2">
                        <li>Become a driver</li>
                        <li>New driver guide</li>
                        <li>Earnings</li>
                        <li>Cities</li>
                        <li>Help</li>
                        <li>Safety</li>
                        <li>Application requirement</li>
                        <li>Express drive</li>
                        <li>Bonus</li>
                        <li>Lyft rewards</li>
                        <li>Driving opportunities</li>
                        <li>Go electric</li>
                        <li>Insurance</li>
                        <li>Driver Blog</li>
                     </div>
                  </div>
                  <div className="flex flex-col gap-8 md:hidden">
                     <button
                        onClick={toggleDriverDropdown}
                        className="flex justify-between items-center py-8"
                     >
                        <h2 className="font-bold text-[17px]">Driver</h2>
                        {toggleRider ? (
                           <>
                              <FontAwesomeIcon icon={faAngleUp} />
                           </>
                        ) : (
                           <>
                              <FontAwesomeIcon icon={faAngleDown} />
                           </>
                        )}
                     </button>
                     {toggleDriver && (
                        <div className="flex flex-col gap-2">
                           <li>Become a driver</li>
                           <li>New driver guide</li>
                           <li>Earnings</li>
                           <li>Cities</li>
                           <li>Help</li>
                           <li>Safety</li>
                           <li>Application requirement</li>
                           <li>Express drive</li>
                           <li>Bonus</li>
                           <li>Lyft rewards</li>
                           <li>Driving opportunities</li>
                           <li>Go electric</li>
                           <li>Insurance</li>
                           <li>Driver Blog</li>
                        </div>
                     )}
                  </div>
               </div>
               <HorizontalLine className="block md:hidden" />

               {/* RIDER */}
               <div className="pr-4 md:p-0">
                  <div className="hidden flex-col gap-8 md:flex">
                     <h2 className="font-semibold">Rider</h2>
                     <div className="flex flex-col gap-2">
                        <li>Sign Up To Ride</li>
                        <li>Lyft Pink</li>
                        <li>Cities</li>
                        <li>Help</li>
                        <li>Safety</li>
                        <li>Business Profile</li>
                        <li>Rewards</li>
                        <li>Events</li>
                        <li>Airports</li>
                        <li>Gift Cards</li>
                        <li>Lyft Family</li>
                        <li>Donate</li>
                     </div>
                  </div>
                  <div className="flex flex-col gap-8 md:hidden">
                     <button
                        onClick={toggleRiderDropdown}
                        className="flex justify-between items-center py-8"
                     >
                        <h2 className="font-bold text-[17px]">Rider</h2>
                        {toggleRider ? (
                           <>
                              <FontAwesomeIcon icon={faAngleUp} />
                           </>
                        ) : (
                           <>
                              <FontAwesomeIcon icon={faAngleDown} />
                           </>
                        )}
                     </button>
                     {toggleRider && (
                        <div className="flex flex-col gap-2">
                           <li>Sign Up To Ride</li>
                           <li>Lyft Pink</li>
                           <li>Cities</li>
                           <li>Help</li>
                           <li>Safety</li>
                           <li>Business Profile</li>
                           <li>Rewards</li>
                           <li>Events</li>
                           <li>Airports</li>
                           <li>Gift Cards</li>
                           <li>Lyft Family</li>
                           <li>Donate</li>
                        </div>
                     )}
                  </div>
               </div>
               <HorizontalLine className="block md:hidden" />

               {/* LYFT */}
               <div className="pr-4 md:p-0">
                  <div className="hidden flex-col gap-8 md:flex">
                     <h2 className="font-semibold">Lyft</h2>
                     <div className="flex flex-col gap-2">
                        <li>Careers</li>
                        <li>Lyft Up</li>
                        <li>Business</li>
                        <li>Healthcare</li>
                        <li>Bikes</li>
                        <li>Scooters</li>
                        <li>Autonomous</li>
                        <li>Lyft Media</li>
                        <li>Developers</li>
                        <li>Newsroom</li>
                        <li>Press</li>
                        <li>Investor Relations</li>
                     </div>
                  </div>
                  <div className="flex flex-col gap-8 md:hidden">
                     <button
                        onClick={toggleLyftDropdown}
                        className="flex justify-between items-center py-8"
                     >
                        <h2 className="font-bold text-[17px]">Lyft</h2>
                        {toggleLyft ? (
                           <>
                              <FontAwesomeIcon icon={faAngleUp} />
                           </>
                        ) : (
                           <>
                              <FontAwesomeIcon icon={faAngleDown} />
                           </>
                        )}
                     </button>
                     {toggleLyft && (
                        <div className="flex flex-col gap-2">
                           <li>Careers</li>
                           <li>Lyft Up</li>
                           <li>Business</li>
                           <li>Healthcare</li>
                           <li>Bikes</li>
                           <li>Scooters</li>
                           <li>Autonomous</li>
                           <li>Lyft Media</li>
                           <li>Developers</li>
                           <li>Newsroom</li>
                           <li>Press</li>
                           <li>Investor Relations</li>
                        </div>
                     )}
                  </div>
               </div>
               <HorizontalLine className="block md:hidden" />

               {/* BUTTONS */}
               <div className="w-full flex flex-col items-center gap-3 py-8 md:w-fit md:items-stretch md:py-0">
                  <CustomButton isFooterBtn>Lyft driver app</CustomButton>
                  <CustomButton isFooterBtn>Lyft rider app</CustomButton>
               </div>

               {/* translate */}
               <div className="relative hidden md:block">
                  <Link className="nav-link flex items-center gap-2">
                     <MdGTranslate className="text-xl" /> {"EN"}
                  </Link>

                  <ul className="translate hidden absolute top-[30px] right-0 max-h-[280px] w-[300px] bg-white rounded-xl mt-2 overflow-y-hidden overflow-x-auto">
                     <li className="hover:bg-platinum">
                        <div className="w-full min-h-14 flex items-center justify-between px-4 py-3 cursor-pointer">
                           <p className="font-medium">English (US)</p>
                           <span>
                              <FontAwesomeIcon
                                 icon={faCheck}
                                 className="font-medium"
                              />
                           </span>
                        </div>
                     </li>
                     <li className="hover:bg-platinum">
                        <div className="w-full min-h-14 flex items-center justify-between px-4 py-3 cursor-pointer">
                           <p className="font-medium">
                              Español (Estados Unidos)
                           </p>
                           <span>
                              <FontAwesomeIcon
                                 icon={faCheck}
                                 className="font-medium"
                              />
                           </span>
                        </div>
                     </li>
                     <li className="hover:bg-platinum">
                        <div className="w-full min-h-14 flex items-center justify-between px-4 py-3 cursor-pointer">
                           <p className="font-medium">Français (Canada)</p>
                           <span>
                              <FontAwesomeIcon
                                 icon={faCheck}
                                 className="font-medium"
                              />
                           </span>
                        </div>
                     </li>
                     <li className="hover:bg-platinum">
                        <div className="w-full min-h-14 flex items-center justify-between px-4 py-3 cursor-pointer">
                           <p className="font-medium">Português (Brazil)</p>
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

               {/* mobile translate dropdown */}
               <div className=" flex flex-col md:hidden">
                  <button
                     className="w-full min-h-16 flex justify-between items-center px-4 py-3"
                     onClick={handleToggleTranslateDropdown}
                  >
                     <h2 className="flex items-center gap-3 text-[17px] font-bold">
                        <MdGTranslate className="text-2xl" /> {"EN"}
                     </h2>

                     {toggleTranslate ? (
                        <>
                           <FontAwesomeIcon icon={faAngleUp} />
                        </>
                     ) : (
                        <>
                           <FontAwesomeIcon icon={faAngleDown} />
                        </>
                     )}
                  </button>

                  {toggleTranslate && (
                     <ul className="w-full mt-2 overflow-y-hidden overflow-x-auto">
                        <li className="hover:bg-platinum">
                           <div className="w-full min-h-16 flex items-center justify-between px-4 py-3 cursor-pointer">
                              <p className="font-medium">English (US)</p>
                              <span>
                                 <FontAwesomeIcon
                                    icon={faCheck}
                                    className="font-medium"
                                 />
                              </span>
                           </div>
                        </li>
                        <li className="hover:bg-platinum">
                           <div className="w-full min-h-16 flex items-center justify-between px-4 py-3 cursor-pointer">
                              <p className="font-medium">
                                 Español (Estados Unidos)
                              </p>
                              <span>
                                 <FontAwesomeIcon
                                    icon={faCheck}
                                    className="font-medium"
                                 />
                              </span>
                           </div>
                        </li>
                        <li className="hover:bg-platinum">
                           <div className="w-full min-h-16 flex items-center justify-between px-4 py-3 cursor-pointer">
                              <p className="font-medium">Français (Canada)</p>
                              <span>
                                 <FontAwesomeIcon
                                    icon={faCheck}
                                    className="font-medium"
                                 />
                              </span>
                           </div>
                        </li>
                        <li className="hover:bg-platinum">
                           <div className="w-full min-h-16 flex items-center justify-between px-4 py-3 cursor-pointer">
                              <p className="font-medium">Português (Brazil)</p>
                              <span>
                                 <FontAwesomeIcon
                                    icon={faCheck}
                                    className="font-medium"
                                 />
                              </span>
                           </div>
                        </li>
                     </ul>
                  )}
               </div>
               <HorizontalLine className="block md:hidden" />
            </div>

            {/* SOCIALS */}
            <div className="text-xs w-full flex flex-col-reverse justify-end gap-6 pl-6 lg:flex-row lg:p-0">
               <div className="footer-socials flex flex-wrap gap-5 lg:flex-nowrap lg:gap-6">
                  <Link>Terms</Link>
                  <Link>Privacy</Link>
                  <Link>Accessibility statement</Link>
                  <Link className="flex">
                     Your privacy choices
                     <svg
                        height="12px"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 30 14"
                     >
                        <g fillRule="evenodd" clipRule="evenodd" fill="#fff">
                           <path d="M7.4 12.8h6.8l3.1-11.6H7.4C4.2 1.2 1.6 3.8 1.6 7s2.6 5.8 5.8 5.8z"></path>
                        </g>
                        <g fillRule="evenodd" clipRule="evenodd" fill="#06f">
                           <path d="M22.6 0H7.4c-3.9 0-7 3.1-7 7s3.1 7 7 7h15.2c3.9 0 7-3.1 7-7s-3.2-7-7-7zm-21 7c0-3.2 2.6-5.8 5.8-5.8h9.9l-3.1 11.6H7.4c-3.2 0-5.8-2.6-5.8-5.8z"></path>
                        </g>
                        <g fill="#fff">
                           <path d="M24.6 4c.2.2.2.6 0 .8L22.5 7l2.2 2.2c.2.2.2.6 0 .8-.2.2-.6.2-.8 0l-2.2-2.2-2.2 2.2c-.2.2-.6.2-.8 0-.2-.2-.2-.6 0-.8L20.8 7l-2.2-2.2c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0l2.2 2.2L23.8 4c.2-.2.6-.2.8 0z"></path>
                        </g>
                        <g fill="#06f">
                           <path d="M12.7 4.1c.2.2.3.6.1.8L8.6 9.8c-.1.1-.2.2-.3.2-.2.1-.5.1-.7-.1L5.4 7.7c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0L8 8.6l3.8-4.5c.2-.2.6-.2.9 0z"></path>
                        </g>
                     </svg>
                  </Link>
                  <span>© 2024 Lyft, Inc.</span>
                  <span>CPUD ID No. TC74936374-Y</span>
               </div>

               <div className="flex items-center gap-6">
                  <FontAwesomeIcon icon={faTwitter} />
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faInstagram} />
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
