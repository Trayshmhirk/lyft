// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { Link } from "react-router-dom";
import Carousel from "../../components/slider/HomeSlider";

import {
   dvr_hero_pp_,
   HOSPITAL_4677,
   GenericPhone_11,
   // dvr_pgr_pp,
   how_start,
   Lyft_Night_Shot_Desktop,
   Lyft_Night_Shot_Mobile,
   Ride_Challenge,
} from "../../Images/Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";

const Driver = () => {
   const [isChecked, setIsChecked] = useState(false);

   const toggleCheckbox = () => {
      console.log("Checked");
      setIsChecked(!isChecked);
   };

   console.log(isChecked);

   return (
      <main className="flex flex-col">
         {/*  */}
         <section className="py-16 md:py-20">
            <div className="max-w-[1280px] w-full mx-auto px-4 flex flex-col-reverse gap-6 md:px-10 lg:flex-row lg:justify-between lg:gap-4">
               <div className="w-full lg:pr-4 lg:w-[50.5%]">
                  <img
                     src={dvr_hero_pp_}
                     className="w-full object-contain object-center"
                     alt="A Lyft ride"
                  />
               </div>

               <div className="w-full h-full flex flex-col gap-6 lg:w-[41.6667%] lg:items-center">
                  <h1 className="text-[48px] leading-[54px] font-semibold md:text-[60px] md:leading-[70px] lg:text-[80px] lg:leading-[92px]">
                     Make every day payday
                  </h1>

                  <div className="flex flex-col gap-6">
                     <div className="max-w-80">
                        <input
                           className="w-full"
                           type="phone"
                           placeholder="Enter mobile phone number*"
                        />
                     </div>
                     <span className="text-[13px] md:text-xs">
                        By providing your phone number and clicking “Apply to
                        drive”, you consent to receive text messages from Lyft.
                        Text messages may be autodialed, and data rates may
                        apply. The frequency of text messages varies. You may
                        text STOP to cancel any time.
                     </span>
                     <div className="flex flex-col-reverse items-start gap-6 lg:flex-row lg:items-center">
                        <CustomButton isPurpleBtn>Apply to drive</CustomButton>
                        <div className="flex items-center gap-5">
                           <label
                              className="inline-flex items-center cursor-pointer relative"
                              onClick={toggleCheckbox}
                           >
                              <input
                                 type="checkbox"
                                 className="hidden"
                                 checked={isChecked}
                                 onChange={() => {}}
                              />

                              <div className="w-6 h-6 border border-gray-400 rounded-[4px]">
                                 {isChecked && (
                                    <div className="w-full h-full flex items-center justify-center bg-cetaceanBlue transition-all">
                                       <FontAwesomeIcon
                                          icon={faCheck}
                                          className="text-white"
                                       />
                                    </div>
                                 )}
                              </div>
                           </label>

                           <span>
                              I agree to Lyft&apos;s{" "}
                              <Link className="link-underline">
                                 Terms of services
                              </Link>
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="relative bg-culturedGray py-20">
            <div className="max-w-[1280px] w-full mx-auto px-4 flex flex-col gap-12 md:px-6">
               <div className="flex flex-col-reverse gap-10 md:flex-row md:items-center md:justify-center md:gap-14 lg:gap-20 xl:gap-28">
                  <div className="w-full flex flex-col gap-8 md:w-[33.333%] md:pr-4">
                     <div className="flex flex-col gap-4">
                        <h2 className="text-3xl font-semibold md:text-4xl md:leading-[44px]">
                           Cash out right away
                        </h2>
                        <p className="">
                           Want your cash fast? Get paid in just around an hour
                           or two with Express Pay. Or sign up for a{" "}
                           <Link className="link-underline">Lyft Direct</Link>{" "}
                           debit card for instant access to earnings, after
                           every ride.
                        </p>
                     </div>
                     <Link className="flex gap-3 items-center">
                        <span className="font-bold text-center">
                           Learn how earning with Lyft works
                        </span>

                        <FontAwesomeIcon icon={faArrowRight} />
                     </Link>
                  </div>

                  <div className="w-full flex items-center justify-center  md:w-[41.6667%] md:items-start md:justify-end">
                     <img src={HOSPITAL_4677} alt="" />
                  </div>
               </div>
            </div>
         </section>

         <section className="pb-16 bg-white md:pb-20">
            <div className="relative flex self-center">
               <div className="h-[280px] absolute top-0 left-0 right-0 md:h-[500px]">
                  <img
                     src={Lyft_Night_Shot_Desktop}
                     alt=""
                     className="hidden w-full h-full md:block"
                  />
                  <img
                     src={Lyft_Night_Shot_Mobile}
                     alt=""
                     className="block w-full h-full md:hidden object-cover object-center"
                  />
               </div>

               <div className="max-w-[1280px] w-full mx-auto px-4 z-50 md:px-6">
                  <div className="flex flex-col gap-6 md:flex-row md:justify-between md:mx-[64px] md:gap-0 lg:mx-[80px] xl:mx-[104px]">
                     <div className="driver-flex-1 md:mt-[500px]">
                        <h2 className="text-3xl font-semibold md:pt-10 md:text-4xl md:leading-[44px]">
                           Earn bonuses, too
                        </h2>
                     </div>

                     <div className="mt-10 mx-auto -order-1 md:order-none md:mt-16 md:mx-16">
                        <div
                           className="relative w-[147px] h-[300px] overflow-hidden md:w-[293px] md:h-[600px]"
                           style={{
                              backgroundImage: `url("${GenericPhone_11}")`,
                              backgroundPosition: "center center",
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                           }}
                        >
                           <div
                              className="absolute top-0 left-0 bottom-0 right-0 my-[5px] mx-[6.5px] rounded-[7px] inset-0 overflow-hidden md:my-[10px] md:mx-[13px] md:rounded-[15.5px]"
                              style={{
                                 backgroundImage: `url("${Ride_Challenge}")`,
                                 backgroundColor: "white",
                                 backgroundPosition: "center center",
                                 backgroundSize: "cover",
                                 backgroundRepeat: "no-repeat",
                              }}
                           ></div>
                        </div>
                     </div>

                     <div className="driver-flex-2 md:mt-[500px]">
                        <div className=" flex flex-col gap-4 md:pt-10">
                           <p className="text-base">
                              Get to know your city&apos;s hotspots and busy
                              hours and get paid big. Take advantage of ride
                              challenges and real-time and scheduled bonuses to
                              keep earnings rolling in.
                           </p>
                           <Link className="flex gap-3 items-center min-h-12">
                              <span className="font-bold">
                                 Learn about bonuses
                              </span>
                              <FontAwesomeIcon icon={faArrowRight} />
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* <section className="">
            <div className="section-info w-full flex flex-col gap-5">
               <img src={dvr_pgr_pp} />
               <div className="flex flex-col gap-4">
                  <h2 className="font-medium">We have your back</h2>
                  <p className="">
                     {
                        "When you drive with Lyft, you're part of a community that prioritizes safety on the road. We have tools in the app for you to get help easily, if "
                     }
                     <br />
                     {
                        "you ever need it. And we're looking out for your well-being before, during, and after every ride."
                     }
                  </p>
               </div>
               <div className="flex gap-3">
                  <p className="font-semibold">{"See how you're protected"}</p>
                  <i className="fa-solid fa-arrow-right"></i>
               </div>
            </div>
         </section> */}

         <section className="py-16 bg-culturedGray">
            <div className="max-w-[1280px] w-full mx-auto px-4 md:px-6">
               <div className="flex flex-col-reverse gap-10 md:flex-row md:justify-center md:gap-14 lg:gap-20 xl:gap-28">
                  <div className="w-full flex flex-col items-start gap-8 md:w-[33.333%] md:justify-center md:pr-4">
                     <div className="flex flex-col gap-6">
                        <h2 className="text-3xl font-semibold md:text-4xl md:leading-[44px]">
                           Here&apos;s how you start
                        </h2>
                        <p>
                           It&apos;s easy to start earning with Lyft. Learn
                           everything you
                           <br />
                           need to know, with our simple{" "}
                           <Link className="link-underline">
                              application requirements
                           </Link>
                           <br />
                           and our{" "}
                           <Link className="link-underline">
                              insurance guide.
                           </Link>
                        </p>
                     </div>

                     <CustomButton isPurpleBtn>Apply here</CustomButton>
                  </div>

                  <div className="w-full flex items-center justify-center md:w-[41.6667%] md:items-start md:justify-end">
                     <img src={how_start} alt="" />
                  </div>
               </div>
            </div>
         </section>

         <section className="relative py-16 bg-aeroBlue">
            <div className="max-w-[1280px] w-full mx-auto px-4 flex flex-col gap-12 md:px-6">
               <Carousel slidesToShow={1} isDriver />
            </div>
         </section>
      </main>
   );
};

export default Driver;
