import InfoList from "../components/infoList/InfoList";
import Carousel from "../components/carousel/Carousel";
import CardSlider from "../components/cardSlider/CardSlider";
import InfoButton from "../components/infoButton/InfoButton";
import CustomButton from "../components/customButton/customButton";
import { Link } from "react-router-dom";
import { imageLinks } from "../assets/imageLinks";
import useWindowWidth from "../components/hooks/useWindowWidth";

const HomePage = () => {
   const homeImages = imageLinks.home;
   const windowWidth = useWindowWidth();
   const mobileView = windowWidth <= 1024;

   const img8 =
      "https://images.ctfassets.net/q8mvene1wzq4/2seUPlIdhymHhttrnTTzLZ/1626af3cfc004731c56f66026efc1b5b/Driver_Homepage_Mobile.jpg?w=1500&q=60&fm=";
   const img9 =
      "https://images.ctfassets.net/q8mvene1wzq4/5ismMaum6dR6aIhxe3c7Ge/748a1be576df8a273600645fbe451e10/Lyft-Pink-Mobile-V5.jpg?w=1500&q=60&fm=";

   return (
      <div className="">
         <main className="flex flex-col">
            <section
               className={`first-section flex ${mobileView ? "flex-col-reverse" : "justify-center"} `}
            >
               <div
                  className={`first-section-container flex ${mobileView ? "items-center flex-col-reverse gap-5" : "self-center justify-center gap-4"}  `}
               >
                  <div className="first-section-img">
                     <img
                        src={homeImages.img1}
                        className="w-100"
                        alt="A lyft ride"
                     />
                  </div>
                  <div className="hero flex flex-col justify-center gap-4">
                     <h1 className="">{"Let's ride"}</h1>
                     <div className="buttons flex gap-3">
                        <CustomButton isPurpleBtn>Apply to drive</CustomButton>
                        <CustomButton isWhiteBtn>Sign up to drive</CustomButton>
                     </div>
                  </div>
               </div>
            </section>

            <section className="second-section flex justify-center">
               <div
                  className={`section-container flex flex-col self-center justify-center gap-5`}
               >
                  <div
                     className={`flex ${mobileView ? "justify-between reverse" : "justify-center"}  gap-4`}
                  >
                     <div className="section-info flex flex-col gap-3">
                        <span className="font-semibold">DRIVE WITH LYFT</span>
                        <ul className="flex flex-col gap-4">
                           <h2 className="font-medium">
                              Set your own hours. Earn on your own terms.
                           </h2>
                           <InfoList
                              iconClass="fa-solid fa-money-bill"
                              h4text="Reliable earnings: "
                              para="Make money,keep you tips, and cash out when you want."
                           />
                           <InfoList
                              iconClass="fa-regular fa-clock"
                              h4text="A flexible schedule: "
                              para="Be your own boss and drive whenever it works for you."
                           />
                           <InfoList
                              iconClass="fa-solid fa-bolt"
                              h4text="Get paid instantly: "
                              para="Cash out your earnings whenever you want."
                           />
                        </ul>
                        <InfoButton
                           btnText="Apply to drive"
                           paraText="How driver pay works"
                           iconClass="fa-solid fa-arrow-right"
                           isMobileView={mobileView}
                        />
                     </div>
                     <div
                        className={`image-container ${mobileView ? "" : "flex items-end justify-end"}`}
                     >
                        {mobileView ? (
                           <img className="" src={img8} alt="" />
                        ) : (
                           <img src={homeImages.img2} alt="" />
                        )}
                     </div>
                  </div>
                  <Carousel />
               </div>
            </section>

            <section className="third-section flex justify-center">
               <div
                  className={`section-container flex flex-col self-center ${mobileView ? "gap-5" : ""}`}
               >
                  <div
                     className={`flex ${mobileView ? "justify-between reverse" : "justify-center"} gap-4`}
                  >
                     <div className="section-info flex flex-col gap-3">
                        <span className="font-semibold">RIDE WITH LYFT</span>
                        <ul className="flex flex-col gap-4">
                           <h2 className="font-medium">
                              Ready, set, go in just a few quick taps
                           </h2>
                           <p className="">
                              {
                                 "No matter your destination, we'll get you where you need to go"
                              }
                           </p>

                           <InfoList
                              iconClass="fa-solid fa-person-falling"
                              h4text="Get a reliable ride in minutes"
                           />

                           <InfoList
                              iconClass="fa-regular fa-calendar"
                              h4text="Schedule your ride in advance"
                           />

                           <InfoList
                              iconClass="fa-solid fa-bolt"
                              h4text="Earn rewards on every ride"
                           />
                        </ul>

                        <InfoButton
                           btnText="Get a ride"
                           paraText="learn more about riding with lyft"
                           iconClass="fa-solid fa-arrow-right"
                           isMobileView={mobileView}
                        />
                     </div>
                     <div
                        className={`image-container flex ${mobileView ? "items-start" : "items-end justify-end"}`}
                     >
                        <img src={homeImages.img3} alt="" />
                     </div>
                  </div>

                  <div
                     className={`flex ${mobileView ? "justify-between direction-column" : "justify-center"}  gap-4`}
                  >
                     <div className="image-container flex items-start justify-start">
                        {mobileView ? (
                           <img className="mt-3" src={img9} alt="" />
                        ) : (
                           <img src={homeImages.img4} alt="" />
                        )}
                     </div>

                     <div className="section-info flex flex-col gap-5">
                        <ul className="flex flex-col gap-4">
                           <h2 className="font-medium">
                              {"We're rolling out the red carpet"}
                           </h2>
                           <p className="">
                              Join the new LYFT Pink to enjoy complimentary
                              upgrades to Priority Pickup, exclusive savings,
                              and preferential pricing on Lux, XL, and Preferred
                              rides. Members save an average of $23/month.
                           </p>

                           <InfoList
                              iconClass="fa-solid fa-bolt"
                              h4text="Free Priority Pickup upgrades"
                              para="Get picked up faster and save $3-4 per ride on average"
                           />

                           <InfoList
                              iconClass="fa-regular fa-calendar"
                              h4text="Exclusive savings"
                              para="Enjoy 5% off on Extra Comfort and Lyft XL rides"
                           />

                           <InfoList
                              iconClass="fa-solid fa-bolt"
                              h4text="Cancellation forgiveness"
                              para="Cancel up to 3x/month for free"
                           />

                           <InfoList
                              iconClass="fa-solid fa-utensils"
                              h4text="Free Grubhub+ for a year"
                              para="$0 restaurant delivery fees"
                           />
                        </ul>
                        <div className="flex flex-col gap-3">
                           <div className={`${mobileView ? "w-75" : "w-50"}`}>
                              <CustomButton isPurpleBtn>
                                 Get your 1st month free
                              </CustomButton>
                           </div>
                           <span className="subject-terms">
                              Subject to the{" "}
                              <Link>Lyft Pink Terms & Conditions</Link> and{" "}
                              <Link>Lyft Terms of Service</Link>.
                           </span>
                        </div>
                     </div>
                  </div>

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
                     <img src={homeImages.img5} alt="" />
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
                        iconClass="fa-solid fa-arrow-right font-semi-bold"
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
                     <img src={homeImages.img6} alt="" />
                  </div>
               </div>
            </section>

            <section className="last-section flex justify-center">
               <div className="section-container self-center flex flex-col justify-center items-center gap-3">
                  <img className="lyft-business" src={homeImages.img7} />

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
