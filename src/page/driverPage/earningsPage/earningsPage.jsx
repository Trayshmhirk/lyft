// import React from 'react'
import CustomButton from "../../../components/CustomButton";
import EarningsToolSlider from "../../../components/slider/EarningsToolSlider";
import Line from "../../../components/Line";
import InfoList from "../../../components/InfoList";
import { Link } from "react-router-dom";
import {
   Hero_Desktop,
   Hero_Mobile_v2,
   NewEarningsMessaging_Desktop_UpfrontPay,
   NewEarningsMessaging_Desktop_UI_Earnings,
   NewEarningsMessaging_Desktop_Turbo,
   NewEarningsMessaging_Desktop_Bonus_Hours,
   NewEarningsMessaging_Desktop_Ride_Challenges,
   NewEarningsMessaging_Desktop_Bonus_Zone,
} from "../../../Images/Images";
import {
   faAngleDown,
   faAngleUp,
   faMobileScreen,
   faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import EarningTipsSlider from "../../../components/slider/EarningTipsSlider";
import HorizontalLine from "../../../components/HorizontalLine";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const EarningsPage = () => {
   const [toggleBonusOffered, setToggleBonusOffered] = useState(false);
   const [toggleBonusesVary, setToggleBonusesVary] = useState(false);
   const [toggleGetPaid, setToggleGetPaid] = useState(false);
   const [toggleEarningsFluctuate, setToggleEarningsFluctuate] =
      useState(false);

   const [toggleTimesToDrive, setToggleTimesToDrive] = useState(false);
   const [toggleStayingBusy, setToggleStayingBusy] = useState(false);
   const [toggleEarningsCommitment, setToggleEarningsCommitment] =
      useState(false);

   const [toggleInsuranceWork, setToggleInsuranceWork] = useState(false);

   const handleToggleBonusOffered = () => {
      setToggleBonusOffered(!toggleBonusOffered);
   };

   const handleToggleBonusesVary = () => {
      setToggleBonusesVary(!toggleBonusesVary);
   };

   const handleToggleGetPaid = () => {
      setToggleGetPaid(!toggleGetPaid);
   };

   const handleToggleEarningsFluctuate = () => {
      setToggleEarningsFluctuate(!toggleEarningsFluctuate);
   };

   const handleToggleTimesToDrive = () => {
      setToggleTimesToDrive(!toggleTimesToDrive);
   };

   const handleToggleStayingBusy = () => {
      setToggleStayingBusy(!toggleStayingBusy);
   };

   const handleToggleEarningsCommitment = () => {
      setToggleEarningsCommitment(!toggleEarningsCommitment);
   };

   const handleToggleInsuranceWork = () => {
      setToggleInsuranceWork(!toggleInsuranceWork);
   };

   return (
      <main className="flex flex-col">
         <section className="w-full bg-ultramarineBlue text-white pt-10 md:pt-0">
            <div className=" h-full flex flex-col justify-center lg:flex-row">
               <div className="w-full h-full self-center lg:w-[41.6667%] lg:items-center md:pr-4">
                  <div className="flex flex-col justify-center items-start gap-10 px-4 pb-12 lg:py-4 lg:pr-10 lg:pl-14">
                     <div className="flex flex-col gap-5">
                        <span className="font-bold">
                           THE DRIVER&apos;S GUIDE TO PAY
                        </span>
                        <h1 className="text-[48px] leading-[54px] font-semibold md:text-[60px] md:leading-[70px] lg:text-[80px] lg:leading-[92px]">
                           Earnings you can count on
                        </h1>
                        <p className="">
                           Riders rely on you. And you can rely on making good
                           money with Lyft. Get to know the tools and strategies
                           that can help you meet your earnings goals.
                        </p>
                     </div>

                     <CustomButton isWhiteBtn className={"text-cetaceanBlue"}>
                        Apply to drive
                     </CustomButton>
                  </div>
               </div>

               <div className="w-full lg:w-[58.333%]">
                  <img
                     src={Hero_Desktop}
                     className="hidden h-full object-cover sm:block"
                     alt="A trip ride"
                  />
                  <img
                     src={Hero_Mobile_v2}
                     className="block sm:hidden"
                     alt="A trip ride"
                  />
               </div>
            </div>
         </section>

         <section className="py-16 bg-white">
            <div className="max-w-[1280px] w-full mx-auto">
               <div className="flex flex-col items-center gap-12">
                  <div className="w-full md:w-[83.3333%] px-4 md:px-6">
                     <h2 className="text-3xl text-center font-semibold md:text-4xl md:leading-[44px]">
                        How earning works
                     </h2>
                  </div>

                  <div className="max-w-[1280px] w-full h-full mx-auto px-4 flex flex-col gap-5 md:h-[174px] md:flex-row md:justify-center md:items-center md:px-6 md:gap-14 lg:gap-20 xl:gap-28">
                     <div className="w-full md:w-[33.333%] md:pr-4">
                        <div className="flex flex-col gap-8">
                           <div className="flex items-center gap-5">
                              <span>
                                 <svg
                                    width="48"
                                    height="48"
                                    viewBox="0 0 32 32"
                                    style={{ fill: "" }}
                                    aria-hidden="true"
                                    focusable="false"
                                    data-testid="core-ui-icon-document-inspect"
                                 >
                                    <path d="m28.93 27.882-2.749-2.75a5.932 5.932 0 0 0 1.235-3.61c0-3.215-2.586-5.848-5.778-5.941V9.174L15.418 3H3v23.787h15.633a5.989 5.989 0 0 0 2.795.699c1.352 0 2.61-.466 3.611-1.235L27.79 29l1.141-1.118ZM4.63 4.608h9.133v6.243h6.268v4.87a5.947 5.947 0 0 0-4.543 5.777c0 1.375.465 2.656 1.258 3.658H4.63V4.608Zm16.822 21.27a4.365 4.365 0 0 1-4.357-4.357c0-2.4 1.957-4.356 4.357-4.356 2.4 0 4.356 1.957 4.356 4.357 0 2.4-1.957 4.356-4.356 4.356Z"></path>
                                 </svg>
                              </span>
                              <div>
                                 <p className="text-xl font-bold">
                                    <Link className="link-underline text-[26px]">
                                       Get transparent earnings on every ride
                                    </Link>
                                 </p>
                              </div>
                           </div>

                           <div className="flex items-center gap-5">
                              <span>
                                 <svg
                                    width="48"
                                    height="48"
                                    viewBox="0 0 32 32"
                                    style={{ fill: "" }}
                                    aria-hidden="true"
                                    focusable="false"
                                    data-testid="core-ui-icon-request"
                                 >
                                    <path d="M26.325 18.638c-.679-2.638-2.676-4.673-5.238-5.464l-.49-.15V6.315A3.32 3.32 0 0 0 17.281 3H6.316A3.297 3.297 0 0 0 3 6.316v19.33a3.32 3.32 0 0 0 3.316 3.316H16.79l-3.956-7.988a2.17 2.17 0 0 1-.113-1.809c.188-.603.64-1.092 1.206-1.394 1.168-.603 2.6-.113 3.202 1.055l2.224 4.56 1.243-.302v-8.44h.038c2.072.64 3.617 2.26 4.182 4.37l2.638 9.91L29 28.51l-2.675-9.872Zm-7.386.377-.452-.905c-.98-1.96-3.391-2.75-5.35-1.77-.943.489-1.659 1.28-1.998 2.298a3.92 3.92 0 0 0 .226 3.052l2.789 5.652H6.316a1.689 1.689 0 0 1-1.696-1.696V6.316A1.69 1.69 0 0 1 6.316 4.62H17.28a1.69 1.69 0 0 1 1.696 1.696v12.699h-.038Z"></path>
                                    <path d="M15.51 5.94H8.012v1.582h7.498V5.939Z"></path>
                                 </svg>
                              </span>
                              <div>
                                 <p className="text-xl font-bold">
                                    <Link className="link-underline text-[26px]">
                                       Use tools to help you stay busy
                                    </Link>
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="hidden h-full sm:block">
                        <Line />
                     </div>

                     <div className="w-full md:w-[33.333%] md:pr-4">
                        <div className="flex flex-col gap-8">
                           <div className="flex items-center gap-5">
                              <span>
                                 <svg
                                    width="48"
                                    height="48"
                                    viewBox="0 0 32 32"
                                    style={{ fill: "" }}
                                    aria-hidden="true"
                                    focusable="false"
                                    data-testid="core-ui-icon-money-bag"
                                 >
                                    <path d="M26.692 16.836c-1.21-3.086-3.843-5.084-5.265-6.173-.364-.272-.666-.484-.787-.635a1.183 1.183 0 0 1-.242-.303h.907V8.121h-1.18c.06-.12.121-.211.182-.333l1.543-1.845c.696-.848.514-1.665.09-2.149-.937-1.059-3.297-1.059-5.052 0a2.103 2.103 0 0 1-2.149 0c-1.755-1.059-4.145-1.059-5.053 0-.424.484-.605 1.301.09 2.149l1.544 1.845a.72.72 0 0 1 .181.333h-1.33v1.604h1.058c-.06.09-.151.212-.242.303-.12.12-.424.363-.787.635-1.422 1.09-4.054 3.086-5.265 6.173-1.664 4.266-.726 8.593 2.603 11.922L7.78 29h16.067l.242-.242c3.329-3.298 4.267-7.656 2.603-11.922ZM12.59 6.79l-1.543-1.846c-.06-.06-.06-.09-.091-.12.302-.243 1.694-.425 2.995.362 1.18.726 2.603.726 3.813 0 1.362-.817 2.814-.575 2.996-.423 0 0 0 .06-.121.181L19.096 6.79c-.332.393-.514.847-.605 1.331h-5.295c-.09-.454-.272-.938-.605-1.331Zm10.62 20.606H8.507c-2.693-2.844-3.42-6.384-1.997-9.955 1.029-2.663 3.359-4.418 4.72-5.477.424-.302.726-.575.969-.787.423-.423.726-.907.877-1.422h5.568c.181.515.453.999.877 1.422.212.212.545.454.968.787 1.392 1.06 3.692 2.814 4.72 5.477 1.393 3.57.697 7.11-1.996 9.955Z"></path>
                                    <path d="M15.829 18.5c-.848-.09-1.695-.212-2.058-.544-.242-.243-.303-.606-.151-.969.242-.605.968-.968 1.906-.968 1.301 0 2.027.363 2.42.666l1.241-1.03c-.454-.423-1.24-.937-2.511-1.149v-1.18h-1.604v1.12c-1.422.12-2.511.816-2.965 1.936-.394.968-.182 2.058.544 2.723.726.696 1.876.817 2.966.969.907.09 1.845.211 2.3.605.241.181.302.544.15.908-.241.635-.968.998-1.936.998-1.331 0-2.058-.363-2.42-.666l-1.241 1.03c.454.423 1.27.967 2.602 1.149v1.18h1.604v-1.15c1.634-.181 2.602-1.12 2.935-2.027.363-.968.12-2.027-.605-2.663-.878-.665-2.058-.817-3.178-.938Z"></path>
                                 </svg>
                              </span>
                              <div>
                                 <p className="text-xl font-bold">
                                    <Link className="link-underline text-[26px]">
                                       Earn bonuses to reach your goals faster
                                    </Link>
                                 </p>
                              </div>
                           </div>

                           <div className="flex items-center gap-5">
                              <span>
                                 <svg
                                    width="48"
                                    height="48"
                                    viewBox="0 0 32 32"
                                    style={{ fill: "" }}
                                    aria-hidden="true"
                                    focusable="false"
                                    data-testid="core-ui-icon-star"
                                 >
                                    <path d="M28.865 12.85a2.642 2.642 0 0 0-2.547-1.853h-5.56a.517.517 0 0 1-.492-.357L18.55 5.353A2.637 2.637 0 0 0 16.003 3.5a2.635 2.635 0 0 0-2.547 1.853l-1.72 5.287a.515.515 0 0 1-.492.357H5.688a2.642 2.642 0 0 0-2.55 1.853 2.64 2.64 0 0 0 .975 2.996l4.496 3.268a.515.515 0 0 1 .188.58L7.08 24.98a2.643 2.643 0 0 0 .975 3 2.668 2.668 0 0 0 1.572.52 2.66 2.66 0 0 0 1.575-.523l4.496-3.266a.514.514 0 0 1 .61 0l4.492 3.257a2.637 2.637 0 0 0 3.15 0 2.642 2.642 0 0 0 .975-3l-1.716-5.286a.515.515 0 0 1 .188-.579l4.496-3.268a2.642 2.642 0 0 0 .972-2.985Zm-1.916 1.697-4.496 3.268a2.118 2.118 0 0 0-.772 2.377l1.716 5.284a1.042 1.042 0 0 1-.39 1.202 1.044 1.044 0 0 1-1.263 0L17.25 23.41a2.123 2.123 0 0 0-2.492 0l-4.493 3.265a1.049 1.049 0 0 1-1.265 0 1.05 1.05 0 0 1-.39-1.202l1.719-5.284a2.12 2.12 0 0 0-.773-2.376L5.06 14.545a1.05 1.05 0 0 1-.39-1.202 1.05 1.05 0 0 1 1.02-.742h5.557a2.117 2.117 0 0 0 2.02-1.468l1.717-5.287a1.047 1.047 0 0 1 1.022-.742 1.043 1.043 0 0 1 1.021.742l1.72 5.287a2.118 2.118 0 0 0 2.018 1.468h5.558a1.052 1.052 0 0 1 1.022.742 1.05 1.05 0 0 1-.396 1.204Z"></path>
                                 </svg>
                              </span>
                              <div>
                                 <p className="text-xl font-bold">
                                    <Link className="link-underline text-[26px]">
                                       Keep 100% of your tips
                                    </Link>
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="py-16 bg-bubbles">
            <div className="max-w-[1280px] w-full flex justify-center mx-auto px-4 md:px-6">
               <div className="w-full flex text-center sm:w-[50%]">
                  <div className="flex flex-col gap-6">
                     <h2 className="text-3xl font-semibold md:text-4xl md:leading-[44px]">
                        Transparent earning on every ride
                     </h2>
                     <p>
                        The biggest part of your total earnings typically comes
                        from the fare you earn for each ride.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         <section className="py-16 bg-white">
            <div className="flex flex-col items-center gap-12">
               <div className="max-w-[1280px] w-full mx-auto px-4 md:px-6">
                  <div className="flex flex-col gap-10 md:flex-row md:justify-center md:gap-14 lg:gap-20 xl:gap-28">
                     <div className="w-full flex items-center justify-center md:w-[41.6667%] md:items-start md:justify-end md:pr-4">
                        <img
                           src={NewEarningsMessaging_Desktop_UpfrontPay}
                           alt=""
                        />
                     </div>

                     <div className="w-full flex flex-col gap-8 self-start md:w-[33.333%] md:pr-4">
                        <div className="flex flex-col gap-5">
                           <p className="text-[26px] leading-[32px] font-bold ">
                              See what you&apos;ll earn upfront
                           </p>
                           <p className="">
                              In most cities, you&apos;ll see the earnings for
                              each ride upfront, along with the ride details, to
                              help you evaluate if you want to accept it.*
                           </p>

                           <p className="font-bold">
                              The fare is based on characteristics of the ride,
                              such as:
                           </p>

                           <ul className="pl-10">
                              <li className="list-disc">
                                 Estimated time and distance to complete the
                                 ride
                              </li>
                              <li className="list-disc">
                                 Distance to the pickup
                              </li>
                           </ul>

                           <p className="font-bold">
                              The fare also depends on what&apos;s going on in
                              your area, such as:
                           </p>

                           <ul className="pl-10">
                              <li className="list-disc">
                                 The number of ride requests in the area
                              </li>
                              <li className="list-disc">
                                 How many drivers are on the road
                              </li>
                              <li className="list-disc">
                                 How busy it is at the destination
                              </li>
                           </ul>

                           <p>
                              For more details about how earning with Lyft
                              works, take this interactive{" "}
                              <Link className="link-underline">tutorial</Link>.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="max-w-[1280px] w-full mx-auto px-4 md:px-6">
                  <div className="flex flex-col-reverse gap-10 md:flex-row md:justify-center md:gap-14 lg:gap-20 xl:gap-28">
                     <div className="w-full flex flex-col items-start gap-8 md:w-[41.6667%] md:pr-4">
                        <div className="flex flex-col gap-5">
                           <p className="text-[26px] leading-[32px] font-bold ">
                              Your share of the fare, guaranteed
                           </p>
                           <p className="">
                              You can see how rider payments are split between
                              you, Lyft, and external fees—on every ride.
                           </p>

                           <InfoList
                              isDriver
                              iconClass={faMoneyBill}
                              h4text="You get 70% or more after external fees"
                              para="If your weekly earnings are below 70% of passenger payments after external fees, you'll get paid the difference. That's our earnings commitment."
                           />

                           <InfoList
                              isDriver
                              iconClass={faMobileScreen}
                              h4text="Track it all in the app"
                              para="Your earnings summary shows a weekly breakdown of your total earnings and your share of rider payments. All in one place."
                           />
                        </div>

                        <CustomButton isPurpleBtn>
                           Track your earnings
                        </CustomButton>
                     </div>

                     <div className="w-full flex items-center justify-center md:w-[33.333%] md:items-start md:justify-end md:pr-4">
                        <img
                           src={NewEarningsMessaging_Desktop_UI_Earnings}
                           alt=""
                        />
                     </div>
                  </div>
               </div>

               {/*  */}
               <div className="w-full max-w-5xl mt-10 md:w-[83.3333%] px-4 md:px-6">
                  <p className="text-[13px] text-center md:text-xs">
                     *Upfront pay is not available in Washington state, New York
                     City, Portland, or Toronto. If upfront pay is not available
                     in your city, then you will be paid for each minute and
                     mile of the trips you complete, based on your city&apos;s
                     per-minute and per-mile rates.
                  </p>
               </div>
            </div>
         </section>

         <section className="py-16 bg-bubbles">
            <div className="max-w-[1280px] w-full flex justify-center mx-auto px-4 md:px-6">
               <div className="w-full flex text-center sm:w-[50%]">
                  <div className="flex flex-col gap-6">
                     <h2 className="text-3xl font-semibold md:text-4xl md:leading-[44px]">
                        Bonuses to reach your goals faster
                     </h2>
                     <p>
                        Bonuses can help you make decisions about when, where,
                        and how much to drive. Turbo, Bonus Hours, and Ride
                        Challenges are scheduled in advance, while Bonus Zones
                        appear on the map in real time.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         <section className="py-16 bg-white">
            <div className="flex flex-col items-center gap-12">
               <div className="max-w-[1280px] w-full h-full mx-auto px-4 flex flex-col gap-5 md:h-[470px] md:flex-row md:justify-center md:gap-14 lg:gap-20 xl:gap-28">
                  <div className="w-full md:w-[33.333%] md:pr-4">
                     <div className="flex flex-col gap-6">
                        <img src={NewEarningsMessaging_Desktop_Turbo} alt="" />

                        <div className="flex flex-col text-center gap-6 pb-6 sm:text-center">
                           <p className="text-[26px] leading-[32px] font-bold">
                              Turbo
                           </p>
                           <p>
                              Earn 10–40% more per ride with Turbo. You&apos;ll
                              see Turbo times every week during busy times. Just
                              drive when they&apos;re offered and watch your
                              earnings stack up. Turbo is available only in
                              select regions.
                           </p>
                        </div>
                     </div>
                  </div>

                  <div className="hidden h-full sm:block">
                     <Line />
                  </div>

                  <div className="w-full md:w-[33.333%] md:pr-4">
                     <div className="flex flex-col gap-6">
                        <img
                           src={NewEarningsMessaging_Desktop_Bonus_Hours}
                           alt=""
                        />

                        <div className="flex flex-col text-center gap-6 pb-6 sm:text-center">
                           <p className="text-[26px] leading-[32px] font-bold">
                              Bonus hours
                           </p>
                           <p>
                              With Bonus Hours, you earn extra for every ride
                              you give. Check your weekly planner for Bonus
                              Hours and drive during those times.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               {/*  */}
               <div className="max-w-[1280px] w-full h-full mx-auto px-4 flex flex-col gap-5 md:h-[446px] md:flex-row md:justify-center md:gap-14 lg:gap-20 xl:gap-28">
                  <div className="w-full md:w-[33.333%] md:pr-4">
                     <div className="flex flex-col gap-6">
                        <img
                           src={NewEarningsMessaging_Desktop_Ride_Challenges}
                           alt=""
                        />

                        <div className="flex flex-col text-center gap-6 pb-6 sm:text-center">
                           <p className="text-[26px] leading-[32px] font-bold">
                              Ride Challenges
                           </p>
                           <p>
                              Earn a bonus by giving a set number of rides
                              within a set time frame. You can choose a Ride
                              Challenge that works with your driving plans.
                           </p>
                        </div>
                     </div>
                  </div>

                  <div className="hidden h-full sm:block">
                     <Line />
                  </div>

                  <div className="w-full md:w-[33.333%] md:pr-4">
                     <div className="flex flex-col gap-6">
                        <img
                           src={NewEarningsMessaging_Desktop_Bonus_Zone}
                           alt=""
                        />

                        <div className="flex flex-col text-center gap-6 sm:text-center md:pb-6">
                           <p className="text-[26px] leading-[32px] font-bold">
                              Bonus Zones
                           </p>
                           <p>
                              See where to earn more right now. Just drive into
                              a Bonus Zone on your map to unlock a bonus on your
                              next ride.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="py-16 bg-bubbles">
            <div className="flex flex-col gap-12">
               <div className="max-w-[1280px] w-full flex flex-col items-center mx-auto px-4 md:px-6">
                  <div className="w-full flex text-center sm:w-[50%]">
                     <div className="flex flex-col gap-6">
                        <h2 className="text-3xl font-semibold md:text-4xl md:leading-[44px]">
                           Tools to help you stay busy
                        </h2>
                        <p>
                           Drive when and where it&apos;s busy to maximize your
                           earnings and minimize downtime. The Driver app
                           provides tools you can use to find busy areas and
                           earn more.
                        </p>
                     </div>
                  </div>
               </div>

               {/*  */}
               <div className="w-full">
                  <EarningsToolSlider />
               </div>
            </div>
         </section>

         <section className="py-16 bg-white">
            <div className="max-w-[1280px] w-full h-full mx-auto px-4 flex flex-col gap-16 md:h-[112px] md:flex-row md:justify-center md:items-center md:gap-14 lg:gap-20 xl:gap-28">
               <div className="w-full md:w-[33.333%] md:pr-4">
                  <div className="flex items-center gap-5">
                     <span>
                        <svg
                           width="48"
                           height="48"
                           viewBox="0 0 32 32"
                           style={{ fill: "currentColor" }}
                           aria-hidden="true"
                           focusable="false"
                           data-testid="core-ui-icon-checkmark"
                        >
                           <path d="M11.938 25.32 3 16.406l1.577-1.601 7.36 7.36L27.424 6.68 29 8.257 11.937 25.32Z"></path>
                        </svg>
                     </span>
                     <div>
                        <p className="text-xl font-bold">
                           Hear how top drivers stay busy in this{" "}
                           <Link className="link-underline">video</Link>
                        </p>
                     </div>
                  </div>
               </div>

               <div className="hidden h-full sm:block">
                  <Line />
               </div>

               <div className="w-full md:w-[33.333%] md:pr-4">
                  <div className="flex items-center gap-5">
                     <span>
                        <svg
                           width="48"
                           height="48"
                           viewBox="0 0 32 32"
                           style={{ fill: "currentColor" }}
                           aria-hidden="true"
                           focusable="false"
                           data-testid="core-ui-icon-checkmark"
                        >
                           <path d="M11.938 25.32 3 16.406l1.577-1.601 7.36 7.36L27.424 6.68 29 8.257 11.937 25.32Z"></path>
                        </svg>
                     </span>
                     <div>
                        <p className="text-xl font-bold">
                           Discover more ways to stay busy in this short{" "}
                           <Link className="link-underline">tutorial</Link>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="py-16 bg-bubbles">
            <div className="max-w-[1280px] w-full flex justify-center mx-auto px-4 md:px-6">
               <div className="w-full flex text-center sm:w-[50%]">
                  <div className="flex flex-col gap-6">
                     <h2 className="text-3xl font-semibold md:text-4xl md:leading-[44px]">
                        Keep 100% of your tips
                     </h2>

                     <div className="flex flex-col gap-5">
                        <p>
                           Connecting with riders and offering good service can
                           lead to great tips. It&apos;s how riders say thank
                           you. In 2023, tips made up 8% of earnings on average
                           for all drivers.
                        </p>
                        <p>
                           Check out top drivers&apos; strategies for earning
                           tips below.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="py-16 bg-white">
            <div className="w-full max-w-5xl mx-auto flex flex-col md:w-[83.3333%] px-4 md:px-6">
               <EarningTipsSlider />
            </div>
         </section>

         <section className="py-16 bg-bubbles">
            <div className="max-w-[1280px] w-full flex justify-center mx-auto px-4 md:px-6">
               <div className="w-full flex justify-center text-center sm:w-[50%]">
                  <h2 className="text-3xl font-semibold md:text-4xl md:leading-[44px]">
                     Frequently asked questions
                  </h2>
               </div>
            </div>
         </section>

         <section className="py-16 bg-white">
            <div className="max-w-[1280px] w-full flex flex-col mx-auto px-4 md:px-12 lg:px-20 xl:px-28">
               <div className="flex flex-col">
                  {/*  */}
                  <div className="w-full">
                     <div className="flex flex-col gap-6">
                        <button
                           onClick={handleToggleBonusOffered}
                           className="flex justify-between items-center pt-12 gap-10 text-start"
                        >
                           <h2 className="font-bold text-[26px] leading-8">
                              When are bonuses offered?
                           </h2>
                           {toggleBonusOffered ? (
                              <>
                                 <FontAwesomeIcon
                                    icon={faAngleUp}
                                    className="w-6 h-6 font-light"
                                 />
                              </>
                           ) : (
                              <>
                                 <FontAwesomeIcon
                                    icon={faAngleDown}
                                    className="w-6 h-6 font-light"
                                 />
                              </>
                           )}
                        </button>
                        {toggleBonusOffered && (
                           <p className="w-full md:w-[78.6667%]">
                              Bonuses are typically offered at the busiest times
                              and in the busiest places, like during weekday
                              commute hours, or after a concert. That way, there
                              will likely be enough drivers on the road when
                              passengers need rides.
                           </p>
                        )}
                     </div>
                  </div>

                  <HorizontalLine className={"mt-12"} />

                  {/*  */}
                  <div className="w-full">
                     <div className="flex flex-col gap-6">
                        <button
                           onClick={handleToggleBonusesVary}
                           className="flex justify-between items-center pt-12 gap-10 text-start"
                        >
                           <h2 className="font-bold text-[26px] leading-8">
                              Why do bonuses vary over time?
                           </h2>
                           {toggleBonusesVary ? (
                              <>
                                 <FontAwesomeIcon
                                    icon={faAngleUp}
                                    className="w-6 h-6 font-light"
                                 />
                              </>
                           ) : (
                              <>
                                 <FontAwesomeIcon
                                    icon={faAngleDown}
                                    className="w-6 h-6 font-light"
                                 />
                              </>
                           )}
                        </button>
                        {toggleBonusesVary && (
                           <p className="w-full flex flex-col gap-5 md:w-[78.6667%]">
                              <span className="">
                                 Bonuses vary for a variety of reasons.
                              </span>

                              <ul className="pl-10">
                                 <li className="list-disc">
                                    Bonuses are usually offered during busy
                                    times and places. Those times and places may
                                    change from week to week.
                                 </li>
                                 <li className="list-disc">
                                    Bonuses are offered to help balance the
                                    number of drivers on the road with the
                                    demand for rides. If the number of drivers
                                    or riders changes, bonus offers may vary as
                                    a result.
                                 </li>
                                 <li className="list-disc">
                                    Bonuses are offered to encourage more
                                    drivers to hit the road, so bonuses may vary
                                    based on expected driver availability. Not
                                    all bonuses are offered to all drivers.
                                 </li>
                              </ul>
                           </p>
                        )}
                     </div>
                  </div>

                  <HorizontalLine className={"mt-12"} />

                  {/*  */}
                  <div className="w-full">
                     <div className="flex flex-col gap-6">
                        <button
                           onClick={handleToggleGetPaid}
                           className="flex justify-between items-center pt-12 gap-10 text-start"
                        >
                           <h2 className="font-bold text-[26px] leading-8">
                              When do I get paid?
                           </h2>
                           {toggleGetPaid ? (
                              <>
                                 <FontAwesomeIcon
                                    icon={faAngleUp}
                                    className="w-6 h-6 font-light"
                                 />
                              </>
                           ) : (
                              <>
                                 <FontAwesomeIcon
                                    icon={faAngleDown}
                                    className="w-6 h-6 font-light"
                                 />
                              </>
                           )}
                        </button>
                        {toggleGetPaid && (
                           <p className="w-full md:w-[78.6667%]">
                              There are a few ways to get paid with Lyft: Direct
                              Pay, Express Pay, and Weekly Pay. With the{" "}
                              <Link className="link-underline">
                                 Lyft Direct debit card
                              </Link>
                              , you can use Direct Pay to get paid instantly
                              after each ride. In nearly all states, when you
                              use Express Pay, you&apos;ll pay a $0.85 fee to
                              have your earnings transferred to your account
                              within a short time. And with Weekly Pay, your
                              earnings are transferred into your account every
                              Tuesday morning, arriving within two business
                              days.
                           </p>
                        )}
                     </div>
                  </div>

                  <HorizontalLine className={"mt-12"} />

                  {/*  */}
                  <div className="w-full">
                     <div className="flex flex-col gap-6">
                        <button
                           onClick={handleToggleEarningsFluctuate}
                           className="flex justify-between items-center pt-12 gap-10 text-start"
                        >
                           <h2 className="font-bold text-[26px] leading-8">
                              Why do my earnings fluctuate?
                           </h2>
                           {toggleEarningsFluctuate ? (
                              <>
                                 <FontAwesomeIcon
                                    icon={faAngleUp}
                                    className="w-6 h-6 font-light"
                                 />
                              </>
                           ) : (
                              <>
                                 <FontAwesomeIcon
                                    icon={faAngleDown}
                                    className="w-6 h-6 font-light"
                                 />
                              </>
                           )}
                        </button>
                        {toggleEarningsFluctuate && (
                           <p className="w-full flex flex-col gap-5 md:w-[78.6667%]">
                              <span className="">
                                 Many factors can impact earnings, including:
                              </span>

                              <ul className="pl-10">
                                 <li className="list-disc">
                                    The number of rides you give
                                 </li>
                                 <li className="list-disc">
                                    How many drivers are on the road
                                 </li>
                                 <li className="list-disc">
                                    The number of passengers requesting rides
                                 </li>
                                 <li className="list-disc">
                                    The time and distance of each ride
                                 </li>
                                 <li className="list-disc">
                                    What bonuses are available
                                 </li>
                              </ul>

                              <span>
                                 The Driver app has tools to help make the most
                                 of your time on the road. For example, you can
                                 use the weekly planner to get guidance on the
                                 best times and places to drive. And you can
                                 take advantage of scheduled rides to lock in
                                 rides that fit with your driving plans.
                              </span>
                           </p>
                        )}
                     </div>
                  </div>

                  <HorizontalLine className={"mt-12"} />

                  {/*  */}
                  <div className="w-full">
                     <div className="flex flex-col gap-6">
                        <button
                           onClick={handleToggleTimesToDrive}
                           className="flex justify-between items-center pt-12 gap-10 text-start"
                        >
                           <h2 className="font-bold text-[26px] leading-8">
                              When are the busiest times to drive?
                           </h2>
                           {toggleTimesToDrive ? (
                              <>
                                 <FontAwesomeIcon
                                    icon={faAngleUp}
                                    className="w-6 h-6 font-light"
                                 />
                              </>
                           ) : (
                              <>
                                 <FontAwesomeIcon
                                    icon={faAngleDown}
                                    className="w-6 h-6 font-light"
                                 />
                              </>
                           )}
                        </button>
                        {toggleTimesToDrive && (
                           <p className="w-full md:w-[78.6667%]">
                              The busiest times to drive are usually happy hour,
                              rush hour, and evening weekend hours. Holidays
                              like St. Patrick&apos;s Day, Halloween, and New
                              Year&apos;s Eve are usually busy, too. Your Lyft
                              Driver app shows you the best times to earn each
                              week, and where riders are requesting rides.
                           </p>
                        )}
                     </div>
                  </div>

                  <HorizontalLine className={"mt-12"} />

                  {/*  */}
                  <div className="w-full">
                     <div className="flex flex-col gap-6">
                        <button
                           onClick={handleToggleStayingBusy}
                           className="flex justify-between items-center pt-12 gap-10 text-start"
                        >
                           <h2 className="font-bold text-[26px] leading-8">
                              What does staying busy mean?
                           </h2>
                           {toggleStayingBusy ? (
                              <>
                                 <FontAwesomeIcon
                                    icon={faAngleUp}
                                    className="w-6 h-6 font-light"
                                 />
                              </>
                           ) : (
                              <>
                                 <FontAwesomeIcon
                                    icon={faAngleDown}
                                    className="w-6 h-6 font-light"
                                 />
                              </>
                           )}
                        </button>
                        {toggleStayingBusy && (
                           <p className="w-full md:w-[78.6667%]">
                              Staying busy means maximizing the time you are
                              booked with riders and minimizing the downtime in
                              between ride requests. Staying busy is important
                              because the more time you are booked with riders,
                              the more opportunities you have to earn. In
                              addition to driving during the busiest times and
                              in the busiest places, a great strategy to stay
                              busy is to accept more rides, rather than being
                              selective about the rides you accept. Drivers who
                              accept more rides tend to earn more overall.
                           </p>
                        )}
                     </div>
                  </div>

                  <HorizontalLine className={"mt-12"} />

                  {/*  */}
                  <div className="w-full">
                     <div className="flex flex-col gap-6">
                        <button
                           onClick={handleToggleEarningsCommitment}
                           className="flex justify-between items-center pt-12 gap-10 text-start"
                        >
                           <h2 className="font-bold text-[26px] leading-8">
                              How does the 70% earnings commitment work?
                           </h2>
                           {toggleEarningsCommitment ? (
                              <>
                                 <FontAwesomeIcon
                                    icon={faAngleUp}
                                    className="w-6 h-6 font-light"
                                 />
                              </>
                           ) : (
                              <>
                                 <FontAwesomeIcon
                                    icon={faAngleDown}
                                    className="w-6 h-6 font-light"
                                 />
                              </>
                           )}
                        </button>
                        {toggleEarningsCommitment && (
                           <p className="w-full md:w-[78.6667%]">
                              Rider payments go toward more than just your
                              earnings and Lyft. They also cover external fees
                              like commercial insurance and taxes. With our
                              earnings commitment, you&apos;ll always earn 70%
                              or more of rider payments after external fees,
                              each week—guaranteed. If your weekly earnings are
                              ever below 70%, you&apos;ll get paid the
                              difference. You can track your earnings in your
                              weekly earnings breakdown as soon as you give your
                              first ride of the week. Get{" "}
                              <Link className="link-underline">
                                 more details
                              </Link>{" "}
                              about our earnings commitment.
                           </p>
                        )}
                     </div>
                  </div>

                  <HorizontalLine className={"mt-12"} />

                  {/*  */}
                  <div className="w-full">
                     <div className="flex flex-col gap-6">
                        <button
                           onClick={handleToggleInsuranceWork}
                           className="flex justify-between items-center gap-10 pt-12 text-start"
                        >
                           <h2 className="font-bold text-[26px] leading-8">
                              How does insurance work?
                           </h2>
                           {toggleInsuranceWork ? (
                              <>
                                 <FontAwesomeIcon
                                    icon={faAngleUp}
                                    className="w-6 h-6 font-light"
                                 />
                              </>
                           ) : (
                              <>
                                 <FontAwesomeIcon
                                    icon={faAngleDown}
                                    className="w-6 h-6 font-light"
                                 />
                              </>
                           )}
                        </button>
                        {toggleInsuranceWork && (
                           <p className="w-full md:w-[78.6667%]">
                              You&apos;re required to maintain personal auto
                              insurance that meets minimum state requirements.
                              However, most personal auto policies will not
                              cover you while you&apos;re using the Lyft app.
                              Where consistent with state and local laws, Lyft
                              maintains commercial insurance on behalf of
                              drivers. This commercial insurance provides
                              certain coverages while you&apos;re using the Lyft
                              app.{" "}
                              <Link className="link-underline">
                                 Learn more.
                              </Link>
                           </p>
                        )}
                     </div>
                  </div>

                  <HorizontalLine className={"mt-12"} />
               </div>

               <div className="mt-16">
                  <span className="text-[13px] md:text-xs">
                     **Extra pay for wait time on scheduled rides is available
                     in most major cities in the US, with plans to expand to
                     more this year.
                  </span>
               </div>
            </div>
         </section>
      </main>
   );
};

export default EarningsPage;
