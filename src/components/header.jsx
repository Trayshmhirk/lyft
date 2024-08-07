// import React from 'react'
import CustomButton from "./CustomButton";
import Line from "./Line";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLyft } from "@fortawesome/free-brands-svg-icons";
import { MdGTranslate } from "react-icons/md";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { HiOutlineUser } from "react-icons/hi2";
import { HiMiniBars3 } from "react-icons/hi2";

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
         <div className="max-w-[1280px] w-full mx-auto px-4 flex justify-between items-center gap-10 md:px-6">
            <Link
               to="/"
               className="font-bold text-shockingPink cursor-pointer hover:text-cetaceanBlue"
            >
               <FontAwesomeIcon icon={faLyft} className="w-16 text-[52px]" />{" "}
               {isBusiness && "business"}
            </Link>

            <nav
               className={`
                  nav w-full h-full flex
                  ${isDriver ? "" : "justify-end"} 
               `}
            >
               <div
                  className={`
                   flex  items-center
                     ${isDriver ? "w-full justify-end" : ""}
                     ${isHome ? "gap-5" : "gap-6"}
                  `}
               >
                  {isHome && (
                     <Link to="/ride-with-lyft" className="">
                        <CustomButton
                           isPurpleBtn
                           isHome
                           className={
                              "h-8 min-w-[100px] px-4 sm:h-12 sm:w-[138px]"
                           }
                        >
                           Get a ride
                        </CustomButton>
                     </Link>
                  )}

                  <span className="block lg:hidden">
                     <HiMiniBars3 className="w-8 h-8 cursor-pointer" />
                  </span>

                  <div className="hidden w-full h-full items-center lg:flex lg:gap-6">
                     <Line />
                     {isDriver ? (
                        <div className="h-full w-full flex items-center gap-8">
                           <Link className="nav-link" to="/driver">
                              DRIVER
                           </Link>
                           <div className="h-full w-full flex items-center gap-6">
                              <Link
                                 className="sub-link"
                                 to={"/driver/earnings"}
                              >
                                 Earnings
                              </Link>
                              <Link
                                 className={`sub-link ${isCities ? "active-sub-link" : ""}`}
                                 to={"/driver/cities"}
                              >
                                 Cities
                              </Link>
                              <Link className="sub-link" to={""}>
                                 Help
                              </Link>

                              {isEarning && (
                                 <CustomButton
                                    isPurpleBtn
                                    isEarning
                                    className={"h-8 px-4"}
                                 >
                                    Become a driver
                                 </CustomButton>
                              )}
                           </div>
                        </div>
                     ) : (
                        <Link className="nav-link" to="/driver">
                           DRIVER
                        </Link>
                     )}
                     <Line />
                     {isRider ? (
                        <div
                           className={`${isBusiness ? "w-[500px]" : "w-[560px]"} h-full w-full flex items-center gap-8`}
                        >
                           <Link className="nav-link" to="/rider">
                              RIDER
                           </Link>
                           <Link
                              className={`sub-link ${isCities ? "active-sub-link" : ""}`}
                              to={"/rider/cities"}
                           >
                              Cities
                           </Link>
                           <Link
                              className={`sub-link ${isBusiness ? "active-sub-link" : ""}`}
                              to={"/rider/business"}
                           >
                              For Business
                           </Link>
                           <Link className="sub-link">Help</Link>

                           <CustomButton isPurpleBtn>Get a ride</CustomButton>
                        </div>
                     ) : (
                        <Link className="nav-link" to="/rider">
                           RIDER
                        </Link>
                     )}
                     <Line />
                     <Link className="nav-link" to="/business">
                        BUSINESS
                     </Link>
                     <Line />
                     {isBusiness ? (
                        <>
                           <Link className="nav-link" to="">
                              <HiOutlineUser className="w-8 h-8" />
                           </Link>
                        </>
                     ) : (
                        <>
                           <Link className="nav-link" to="/login">
                              LOG IN
                           </Link>
                           <Line />
                           <div className="relative h-full flex items-center">
                              <Link className="nav-link">SIGN UP</Link>
                           </div>
                           <Line />

                           <div className="relative h-full flex items-center">
                              <Link className="nav-link flex items-center gap-2">
                                 <MdGTranslate className="text-xl" /> {"EN"}
                              </Link>

                              <ul className="dropdown-shadow hidden absolute top-[50px] right-0 max-h-[280px] w-[300px] bg-white rounded-xl mt-2 overflow-y-hidden overflow-x-auto">
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
