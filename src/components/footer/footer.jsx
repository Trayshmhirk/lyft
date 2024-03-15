// import React from 'react'
import { useState } from "react";
import CustomButton from "../customButton/customButton";
import { Link } from "react-router-dom";

const Footer = ({ isMobileView }) => {
   const [toggleDriver, setToggleDriver] = useState(false);
   const [toggleRider, setToggleRider] = useState(false);
   const [toggleLyft, setToggleLyft] = useState(false);

   const toggleDriverDropdown = () => {
      isMobileView ? setToggleDriver(!toggleDriver) : null;
   };

   const toggleRiderDropdown = () => {
      isMobileView ? setToggleRider(!toggleRider) : null;
   };

   const toggleLyftDropdown = () => {
      isMobileView ? setToggleLyft(!toggleLyft) : null;
   };

   return (
      <footer className="flex justify-center">
         <div
            className={`footer-container flex flex-col gap-4 lg:mt-3 lg:gap-2`}
         >
            <div className={`flex flex-col gap-2 lg:flex-row`}>
               <ul className="flex flex-col gap-2">
                  <p
                     onClick={toggleDriverDropdown}
                     className={`${isMobileView ? "flex justify-between items-center" : ""} py-3 fs-6 font-semibold`}
                  >
                     Driver
                     {isMobileView && (
                        <>
                           {toggleDriver ? (
                              <i className="fa-solid fa-angle-up"></i>
                           ) : (
                              <i className="fa-solid fa-angle-down"></i>
                           )}
                        </>
                     )}
                  </p>
                  {isMobileView ? (
                     <>
                        {toggleDriver && (
                           <>
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
                           </>
                        )}
                     </>
                  ) : (
                     <>
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
                     </>
                  )}
               </ul>
               <ul className="flex flex-col gap-2">
                  <p
                     onClick={toggleRiderDropdown}
                     className={`${isMobileView ? "flex justify-between items-center" : ""} py-3 fs-6 font-semibold`}
                  >
                     Rider
                     {isMobileView && (
                        <>
                           {toggleRider ? (
                              <i className="fa-solid fa-angle-up"></i>
                           ) : (
                              <i className="fa-solid fa-angle-down"></i>
                           )}
                        </>
                     )}
                  </p>
                  {isMobileView ? (
                     <>
                        {toggleRider && (
                           <>
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
                           </>
                        )}
                     </>
                  ) : (
                     <>
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
                     </>
                  )}
               </ul>
               <ul className="flex flex-col gap-2">
                  <p
                     onClick={toggleLyftDropdown}
                     className={`${isMobileView ? "flex justify-between items-center" : ""} py-3 fs-6 font-semibold`}
                  >
                     Lyft
                     {isMobileView && (
                        <>
                           {toggleLyft ? (
                              <i className="fa-solid fa-angle-up"></i>
                           ) : (
                              <i className="fa-solid fa-angle-down"></i>
                           )}
                        </>
                     )}
                  </p>

                  {isMobileView ? (
                     <>
                        {toggleLyft && (
                           <>
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
                           </>
                        )}
                     </>
                  ) : (
                     <>
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
                     </>
                  )}
               </ul>
               <ul
                  className={`flex flex-col ${isMobileView ? "w-full items-center" : "items-start"}  gap-3`}
               >
                  <CustomButton isWhiteBtn>Lyft driver app</CustomButton>
                  <CustomButton isWhiteBtn>Lyft rider app</CustomButton>
               </ul>
            </div>

            <div className="socials-and-terms w-full flex justify-end gap-3">
               <div className={`flex ${isMobileView ? "flex-wrap" : ""} gap-3`}>
                  <Link>Terms</Link>
                  <Link>Privacy</Link>
                  <Link>Accessibility statement</Link>
                  <Link>Your privacy choices</Link>
                  <span>2024 Lyft, Inc</span>
                  <span>CPUD ID No. TC74936374-Y</span>
               </div>

               <div></div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
