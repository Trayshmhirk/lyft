import InfoList from "../components/infoList/InfoList";
import Carousel from "../components/carousel/Carousel";
import CardSlider from "../components/cardSlider/CardSlider";
import InfoButton from "../components/infoButton/InfoButton";
import CustomButton from "../components/customButton";
import { Link } from "react-router-dom";
import useWindowWidth from "../components/hooks/useWindowWidth";

import {
   home_pinkpaint_hero,
   home_pinkpaint_driver,
   Driver_Homepage_Mobile,
   Lyft_Pink_Mobile_V5,
   rider_stylized_text_image,
   Lyft_Pink_Image,
   home_pinkpaint_safety,
   Lyft_HealthClinic,
   Lyft_Business_Pink,
} from "../images/images";
import {
   faCalendar,
   faClock,
   faMoneyBill1,
} from "@fortawesome/free-regular-svg-icons";
import {
   faArrowRight,
   faBolt,
   faHandSparkles,
   faPersonFalling,
   faShieldHalved,
   faUtensils,
} from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
   const windowWidth = useWindowWidth();
   const mobileView = windowWidth <= 1024;

   return (
      <div className="">
         <main className="flex flex-col">
            <section className="py-16 md:py-20">
               <div className="max-w-[1280px] w-full mx-auto px-4 flex flex-col-reverse gap-6 md:px-6 lg:flex-row lg:justify-between lg:items-center lg:gap-4">
                  <div className="w-full lg:pr-4 lg:w-1/2">
                     <img
                        src={home_pinkpaint_hero}
                        className="w-full h-full object-contain object-center"
                        alt="A lyft ride"
                     />
                  </div>
                  <div className="w-full h-full flex flex-col items-center gap-10 lg:w-[41.6667%] lg:items-start lg:justify-center">
                     <h1 className="text-[48px] leading-[54px] font-semibold lg:text-[80px] lg:leading-[92px]">
                        {"Let's ride"}
                     </h1>
                     <div className="buttons flex gap-4 flex-col xs:flex-row">
                        <CustomButton isPurpleBtn>Apply to drive</CustomButton>
                        <CustomButton isWhiteBtn>Sign up to drive</CustomButton>
                     </div>
                  </div>
               </div>
            </section>

            <section className="relative bg-culturedGray py-16">
               <div className="max-w-[1280px] w-full mx-auto px-4 flex flex-col gap-12 md:px-6">
                  <div className="flex flex-col-reverse gap-10 md:flex-row md:justify-center md:gap-14 lg:gap-20 xl:gap-28">
                     {/*  */}
                     <div className="w-full flex flex-col gap-8 self-start md:w-[41.6667%] md:pr-4">
                        <div className="flex flex-col gap-2 text-center text-[17px] md:text-base lg:text-start">
                           <span className="font-bold">DRIVE WITH LYFT</span>

                           {/*  */}
                           <ul className="flex flex-col gap-6">
                              <h2 className="text-3xl font-semibold md:text-[36px] md:leading-[44px]">
                                 Set your own hours. Earn on your own terms.
                              </h2>
                              <InfoList
                                 iconClass={faMoneyBill1}
                                 h4text="Reliable earnings: "
                                 para="Make money, keep you tips, and cash out when you want."
                              />
                              <InfoList
                                 iconClass={faClock}
                                 h4text="A flexible schedule: "
                                 para="Be your own boss and drive whenever it works for you."
                              />
                              <InfoList
                                 iconClass={faBolt}
                                 h4text="Get paid instantly: "
                                 para="Cash out your earnings whenever you want."
                              />
                           </ul>
                        </div>
                        <InfoButton
                           btnText="Apply to drive"
                           paraText="How driver pay works"
                           iconClass={faArrowRight}
                        />
                     </div>

                     {/*  */}
                     <div className="w-full flex items-center justify-center md:w-[33.333%] md:items-start md:justify-end">
                        {mobileView ? (
                           <img
                              className=""
                              src={Driver_Homepage_Mobile}
                              alt=""
                           />
                        ) : (
                           <img src={home_pinkpaint_driver} alt="" />
                        )}
                     </div>
                  </div>

                  {/*  */}
                  <Carousel />
               </div>
            </section>

            <section className="flex flex-col gap-20 py-16 lg:gap-12">
               {/* 1 */}
               <div className="max-w-[1280px] w-full mx-auto px-4 flex flex-col gap-12 md:px-6">
                  <div className="flex flex-col-reverse gap-10 md:flex-row md:justify-center md:gap-14 lg:gap-20 xl:gap-28">
                     {/*  */}
                     <div className="w-full flex flex-col gap-8 self-start md:w-[41.6667%] md:pr-4 my-auto">
                        <div className="flex flex-col gap-2 text-center text-[17px] md:text-base lg:text-start">
                           <span className="font-bold">RIDE WITH LYFT</span>

                           <ul className="flex flex-col gap-6">
                              <h2 className="text-3xl font-semibold md:text-[36px] md:leading-[44px]">
                                 Ready, set, go in just a few quick taps
                              </h2>
                              <p className="">
                                 {
                                    "No matter your destination, we'll get you where you need to go"
                                 }
                              </p>

                              <InfoList
                                 iconClass={faPersonFalling}
                                 h4text="Get a reliable ride in minutes"
                              />

                              <InfoList
                                 iconClass={faCalendar}
                                 h4text="Schedule your ride in advance"
                              />

                              <InfoList
                                 iconClass={faHandSparkles}
                                 h4text="Earn rewards on every ride"
                              />
                           </ul>
                        </div>

                        <InfoButton
                           btnText="Get a ride"
                           paraText="Learn more about riding with lyft"
                           iconClass={faArrowRight}
                           isMobileView={mobileView}
                        />
                     </div>

                     {/*  */}
                     <div className="w-full flex items-center justify-center md:w-[33.333%] md:items-start md:justify-end">
                        <img src={rider_stylized_text_image} alt="" />
                     </div>
                  </div>
               </div>

               {/* 2 */}
               <div className="max-w-[1280px] w-full mx-auto px-4 flex flex-col gap-12 md:px-6">
                  <div className="flex flex-col gap-10 md:flex-row md:justify-center md:gap-14 lg:gap-20 xl:gap-28">
                     <div className="w-full flex items-center justify-center md:w-[33.333%] md:items-start md:justify-end">
                        {mobileView ? (
                           <img src={Lyft_Pink_Mobile_V5} alt="" />
                        ) : (
                           <img src={Lyft_Pink_Image} alt="" />
                        )}
                     </div>

                     <div className="w-full flex flex-col gap-8 self-start md:w-[41.6667%] md:pr-4">
                        <ul className="flex flex-col gap-6 text-[17px] md:text-base text-start">
                           <h2 className="text-3xl font-semibold text-center md:text-[36px] md:leading-[44px] lg:text-start">
                              {"We're rolling out the red carpet"}
                           </h2>
                           <p className="">
                              Join the new LYFT Pink to enjoy complimentary
                              upgrades to Priority Pickup, exclusive savings,
                              and preferential pricing on Lux, XL, and Preferred
                              rides. Members save an average of $23/month.
                           </p>

                           <InfoList
                              iconClass={faBolt}
                              h4text="Free Priority Pickup upgrades"
                              para="Get picked up faster and save $3-4 per ride on average"
                           />

                           <InfoList
                              iconClass={faCalendar}
                              h4text="Exclusive savings"
                              para="Enjoy 5% off on Extra Comfort and Lyft XL rides"
                           />

                           <InfoList
                              iconClass={faShieldHalved}
                              h4text="Cancellation forgiveness"
                              para="Cancel up to 3x/month for free"
                           />

                           <InfoList
                              iconClass={faUtensils}
                              h4text="Free Grubhub+ for a year"
                              para="$0 restaurant delivery fees"
                           />
                        </ul>
                        <div className="flex flex-col gap-3">
                           <div className="w-75 lg:w-50">
                              <CustomButton isPurpleBtn>
                                 Get your 1st month free
                              </CustomButton>
                           </div>
                           <span className="text-[15px]">
                              Subject to the{" "}
                              <Link className="underline text-majorelleBlue">
                                 Lyft Pink Terms & Conditions
                              </Link>{" "}
                              and{" "}
                              <Link className="underline text-majorelleBlue">
                                 Lyft Terms of Service
                              </Link>
                              .
                           </span>
                        </div>
                     </div>
                  </div>
               </div>

               {/* 3 */}
               <div className="flex flex-col self-center gap-5 lg:gap-0">
                  <div className="mt-5 pt-5">
                     <div className="slider-heading">
                        <h2 className="">Ride. Bike. Scoot. Go bananas.</h2>
                        <p>
                           {
                              "We've got options to get you where you're going. Choose a ride* that suits your mood and budget."
                           }
                        </p>
                     </div>

                     <CardSlider />
                  </div>
               </div>
            </section>

            <section className="fourth-section flex justify-center">
               <div
                  className={`section-container flex ${mobileView ? "justify-between direction-column" : "justify-center gap-4"}`}
               >
                  <div
                     className={`image-container flex ${mobileView ? "items-start" : "items-center justify-start"} `}
                  >
                     <img src={home_pinkpaint_safety} alt="" />
                  </div>

                  <div className="section-info flex flex-col gap-3">
                     <span className="font-semibold">DRIVE SAFELY</span>
                     <ul className="flex flex-col gap-4">
                        <h2 className="font-medium">
                           Your safety comes first. Always.
                        </h2>
                        <p className="">
                           {
                              "We look out for you before, during, and after every single ride. And we monitor rides to help you get where you need to go. If you ever need it, we're standing by, ready to help."
                           }
                        </p>
                     </ul>
                     <InfoButton
                        btnText="Learn about safety"
                        paraText="Community guidelines"
                        iconClass={faArrowRight}
                        isMobileView={mobileView}
                     />
                  </div>
               </div>
            </section>

            <section className="fifth-section flex justify-center">
               <div
                  className={`section-container flex ${mobileView ? "justify-between reverse" : "justify-center gap-4"}`}
               >
                  <div className="section-info flex flex-col gap-3">
                     <ul className="flex flex-col gap-4">
                        <h2 className="font-medium">
                           Making millions of rides more accessible
                        </h2>
                        <p className="">
                           {
                              "A ride is more than just a ride. It's a gateway to opportunities and jobs. A connection to community. And access to essentials like groceries, healthcare, and polling places. Our Lyft Up initiative makes rides more accessible for millions, and helps bring communities even closer."
                           }
                        </p>
                     </ul>
                     <div className="flex gap-3">
                        <div className="">
                           <Link className="font-semibold">
                              Learn about our Lyft Up programs
                           </Link>
                        </div>
                        <div>
                           <i className="fa-solid fa-arrow-right"></i>
                        </div>
                     </div>
                  </div>

                  <div
                     className={`image-container flex ${mobileView ? "items-start" : "items-end justify-end"}`}
                  >
                     <img src={Lyft_HealthClinic} alt="" />
                  </div>
               </div>
            </section>

            <section className="last-section flex justify-center">
               <div className="section-container self-center flex flex-col justify-center items-center gap-3">
                  <img className="lyft-business" src={Lyft_Business_Pink} />

                  <h2 className="flex flex-col items-center gap-2">
                     We help move
                     <span>business</span>
                  </h2>

                  <div className="flex flex-col items-center gap-5">
                     <p className="text-center">
                        {
                           "From affordable transportation solutions to effortless expensing, we'll help drive your business forward by getting your people where they need to go."
                        }
                     </p>

                     <CustomButton isNoBorderBtn>Learn more</CustomButton>
                  </div>
               </div>
            </section>
         </main>
      </div>
   );
};

export default HomePage;
