// import React from 'react'
import "./driver.scss";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { imageLinks } from "../../assets/imageLinks";
import CustomButton from "../../components/customButton";
import { Link } from "react-router-dom";
import Carousel from "../../components/carousel/Carousel";
import useWindowWidth from "../../components/hooks/useWindowWidth";

const Driver = () => {
   const windowWidth = useWindowWidth();
   const mobileView = windowWidth <= 1024;
   const driverImages = imageLinks.driver;

   return (
      <div className="driver">
         <Header isDriver isMobileView={mobileView} />

         <main className="flex flex-col">
            <section className="first-section flex justify-center">
               <div
                  className={`first-section-container flex ${mobileView ? "flex-col-reverse gap-5" : "justify-center self-center gap-4"} `}
               >
                  <div className="first-section-img">
                     <img
                        src={driverImages.img1}
                        className="w-full"
                        alt="A Lyft ride"
                     />
                  </div>
                  <div
                     className={`hero flex flex-col ${mobileView ? "items-start" : "justify-center"} gap-4`}
                  >
                     <h1 className="">Make every day payday</h1>
                     <div className="flex flex-col gap-4">
                        <input
                           className={`${mobileView ? "" : "w-75"}`}
                           type="phone"
                           placeholder="Enter mobile phone number*"
                        />
                        <span className="info-text">
                           By providing your phone number and clicking “Apply to
                           drive”, you consent to receive text messages from
                           Lyft. Text messages may be autodialed, and data rates
                           may apply. The frequency of text messages varies. You
                           may text STOP to cancel any time.
                        </span>
                        <div
                           className={`flex ${mobileView ? "flex-col-reverse items-start gap-4" : "items-center gap-5"}`}
                        >
                           <CustomButton isPurpleBtn>
                              Apply to drive
                           </CustomButton>
                           <div className="flex items-center gap-3">
                              <input type="checkbox" />
                              <label>
                                 {"I agree to Lyft's Terms of services"}
                              </label>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <section className="second-section flex justify-center">
               <div
                  className={`section-container flex ${mobileView ? "justify-between reverse " : "items-center justify-center"} gap-4`}
               >
                  <div
                     className={`section-info flex flex-col ${mobileView ? "justify-center" : ""} gap-3`}
                  >
                     <h2>Cash out right away</h2>
                     <p className="">
                        Want your cash fast? Get paid in just around an hour or
                        two with Express Pay. Or sign up for a{" "}
                        <Link>Lyft Direct</Link> debit card for instant access
                        to earnings, after every ride.
                     </p>
                     <div className="flex gap-3">
                        <p className="font-semibold">
                           Read all about driver pay
                        </p>
                        <i className="fa-solid fa-arrow-right"></i>
                     </div>
                  </div>
                  <div
                     className={`image-container flex ${mobileView ? "" : "items-end justify-end"}`}
                  >
                     <img src={driverImages.img2} alt="" />
                  </div>
               </div>
            </section>

            <section className="third-section flex justify-center">
               <div className="section-container flex flex-col self-center">
                  <div className="section-info w-full items-end flex gap-3">
                     <h2 className="w-full mb-5 pb-5">Earn bonuses, too</h2>

                     <div className=" flex justify-center">
                        <img
                           className="phone-image"
                           src={driverImages.img3}
                           alt=""
                        />
                     </div>

                     <div className="w-full flex flex-col gap-4">
                        <p className="">
                           {
                              "Get to know your city's hotspots and busy hours and get paid big. Take advantage of ride challenges and real-time and scheduled bonuses to keep earnings rolling in."
                           }
                        </p>
                        <div className="flex gap-3">
                           <p className="font-semibold">Learn about bonuses</p>
                           <i className="fa-solid fa-arrow-right"></i>
                        </div>
                     </div>
                  </div>

                  <div className="section-info w-full flex flex-col gap-5">
                     <img src={driverImages.img4} />
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
                        <p className="font-semibold">
                           {"See how you're protected"}
                        </p>
                        <i className="fa-solid fa-arrow-right"></i>
                     </div>
                  </div>
               </div>
            </section>

            <section className="fourth-section flex justify-center">
               <div className="section-container flex justify-center gap-4">
                  <div className="section-info flex flex-col items-start justify-center gap-4">
                     <h2 className="">{"Here's how you start"}</h2>
                     <p>
                        {
                           "It's easy to start earning with Lyft. Learn everything you"
                        }
                        <br />
                        need to know, with our simple application requirements
                        <br />
                        and our insurance guide.
                     </p>

                     <CustomButton isPurpleBtn>Apply here</CustomButton>
                  </div>

                  <div className="image-container flex items-center justify-end">
                     <img src={driverImages.img5} alt="" />
                  </div>
               </div>
            </section>

            <section className="last-section flex justify-center">
               <div className="section-container self-center flex items-center gap-4">
                  <div className="section-info w-full flex flex-col items-center gap-4">
                     <Carousel />
                  </div>
               </div>
            </section>
         </main>

         <Footer isMobileView={mobileView} />
      </div>
   );
};

export default Driver;
