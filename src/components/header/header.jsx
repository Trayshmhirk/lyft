// import React from 'react'
import "./header.scss";
import CustomButton from "../customButton/customButton";
import Line from "../line";
import { Link } from "react-router-dom";
import ProfileIcon from "../../assets/business-profile-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLyft } from "@fortawesome/free-brands-svg-icons";

const Header = ({
   isHome,
   isDriver,
   isEarning,
   isCities,
   isBusiness,
   isRider,
}) => {
   return (
      <header className="w-100 h-20 flex justify-center px-20 border border-gainsboro">
         <div className="header-container flex justify-between items-center gap-5">
            <span className="lyft-logo text-[52px] font-bold">
               <FontAwesomeIcon icon={faLyft} className="w-16" />{" "}
               {isBusiness && "business"}
            </span>

            <nav
               className={`
                  main-nav w-100 h-100 flex
                  ${isDriver ? "" : "justify-end"} 
               `}
            >
               <div
                  className={`
                   flex gap-4 items-center
                     ${isDriver ? "w-100 justify-end" : ""}
                  `}
               >
                  {isHome && (
                     <CustomButton isPurpleBtn>Get a ride</CustomButton>
                  )}

                  <span className="block mobile-menu lg:hidden">
                     <i className="fa-solid fa-bars"></i>
                  </span>

                  <div className="hidden links-container w-100 h-100 items-center lg:flex">
                     <Line />
                     {isDriver ? (
                        <div className="sub-links-container flex items-center h-100 w-100">
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
                           className={`sub-links-container ${isBusiness ? "business-width" : "link-width"}  flex items-center h-100`}
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
                              <img width="32" height="32" src={ProfileIcon} />
                           </Link>
                        </>
                     ) : (
                        <>
                           <Link className="nav-links" to="/login">
                              LOG IN
                           </Link>
                           <Line />
                           <Link className="nav-links" to="/signup">
                              SIGN UP
                           </Link>
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
