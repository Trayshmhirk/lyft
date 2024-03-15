// import React from 'react'
import CustomButton from "./customButton";
import Line from "./line";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLyft } from "@fortawesome/free-brands-svg-icons";
import { MdGTranslate } from "react-icons/md";
import { faBars, faCheck } from "@fortawesome/free-solid-svg-icons";
import { HiOutlineUser } from "react-icons/hi2";

const Header = ({
   isHome,
   isDriver,
   isEarning,
   isCities,
   isBusiness,
   isRider,
}) => {
   return (
      <header className="w-full h-[81px] flex justify-center border-b border-gainsboro">
         <div className="header-container max-w-[1280px] w-full mx-auto px-6 flex justify-between items-center gap-5">
            <span className="font-bold text-shockingPink cursor-pointer hover:text-cetaceanBlue">
               <FontAwesomeIcon icon={faLyft} className="w-16 text-[52px]" />{" "}
               {isBusiness && "business"}
            </span>

            <nav
               className={`
                  nav w-full h-full flex
                  ${isDriver ? "" : "justify-end"} 
               `}
            >
               <div
                  className={`
                   flex gap-6 items-center
                     ${isDriver ? "w-full justify-end" : ""}
                  `}
               >
                  {isHome && (
                     <div className="">
                        <CustomButton isPurpleBtn className={"w-[138px]"}>
                           Get a ride
                        </CustomButton>
                     </div>
                  )}

                  <span className="block mobile-menu lg:hidden">
                     <FontAwesomeIcon icon={faBars} />
                  </span>

                  <div className="hidden links-container w-full h-full items-center lg:flex lg:gap-6">
                     <Line />
                     {isDriver ? (
                        <div className="sub-links-container h-full w-full flex items-center gap-[35px]">
                           <Link className="nav-links" to="/driver">
                              DRIVER
                           </Link>
                           <Link
                              className={`sub-links ${isEarning ? "active-sub-link" : ""}`}
                              to={"/driver/pay"}
                           >
                              Earnings
                           </Link>
                           <Link
                              className={`sub-links ${isCities ? "active-sub-link" : ""}`}
                              to={"/driver/cities"}
                           >
                              Cities
                           </Link>
                           <Link className="sub-links" to={""}>
                              Help
                           </Link>

                           {isEarning && (
                              <CustomButton isPurpleBtn>
                                 Become a driver
                              </CustomButton>
                           )}
                        </div>
                     ) : (
                        <Link className="nav-links" to="/driver">
                           DRIVER
                        </Link>
                     )}
                     <Line />
                     {isRider ? (
                        <div
                           className={`sub-links-container ${isBusiness ? "w-[500px]" : "w-[560px]"}  flex items-center h-full`}
                        >
                           <Link className="nav-links" to="/rider">
                              RIDER
                           </Link>
                           <Link
                              className={`sub-links ${isCities ? "active-sub-link" : ""}`}
                              to={"/rider/cities"}
                           >
                              Cities
                           </Link>
                           <Link
                              className={`sub-links ${isBusiness ? "active-sub-link" : ""}`}
                              to={"/rider/business"}
                           >
                              For Business
                           </Link>
                           <Link className="sub-links">Help</Link>

                           <CustomButton isPurpleBtn>Get a ride</CustomButton>
                        </div>
                     ) : (
                        <Link className="nav-links" to="/rider">
                           RIDER
                        </Link>
                     )}
                     <Line />
                     <Link className="nav-links" to="/business">
                        BUSINESS
                     </Link>
                     <Line />
                     {isBusiness ? (
                        <>
                           <Link className="nav-links" to="">
                              <HiOutlineUser className="w-8 h-8" />
                           </Link>
                        </>
                     ) : (
                        <>
                           <Link className="nav-links" to="/login">
                              LOG IN
                           </Link>
                           <Line />
                           <div className="relative h-full flex items-center">
                              <Link className="nav-links">SIGN UP</Link>
                           </div>
                           <Line />

                           <div className="relative h-full flex items-center">
                              <Link className="nav-links flex items-center gap-2">
                                 <MdGTranslate className="text-xl" /> {"EN"}
                              </Link>

                              <ul className="translate hidden absolute top-[50px] right-0 max-h-[280px] w-[300px] bg-white rounded-xl mt-2 overflow-y-hidden overflow-x-auto">
                                 <li className="hover:bg-platinum">
                                    <div className="w-full min-h-14 flex items-center justify-between px-4 py-3 cursor-pointer">
                                       <p className="font-medium">
                                          English (US)
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
                                       <p className="font-medium">
                                          Français (Canada)
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
                                       <p className="font-medium">
                                          Português (Brazil)
                                       </p>
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
                        </>
                     )}
                  </div>
               </div>
            </nav>
         </div>
      </header>
   );
};

export default Header;
