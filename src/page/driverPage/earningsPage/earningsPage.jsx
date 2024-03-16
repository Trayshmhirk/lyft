// import React from 'react'
import "./earningsPage.scss";
import CustomButton from "../../../components/customButton";
import { Link } from "react-router-dom";
import HorizontalLine from "../../../components/horizontalLine";
import Line from "../../../components/line";

const EarningsPage = () => {
   const img1 =
      "https://images.ctfassets.net/q8mvene1wzq4/2Jmi8QrzyxvQc6fWbPyUDa/2cb541315890dd459f31f770a881fe7b/driver_pay_hero_desktop_V2.jpg?w=2500&q=60&fm=";
   const img2 =
      "https://images.ctfassets.net/q8mvene1wzq4/6F94a6qEyU4qfwN5iyIAz7/eaede070ae62095cd1ef9e303be52d14/1_staying_busy_571x381_C.gif?w=1500&q=80&fm=webp";
   const img3 =
      "https://images.ctfassets.net/q8mvene1wzq4/4Rd5iHxEXzna4bPrHZFh4x/8c93fb61ce1348f3ee370e066edef57e/1_learning_when_where_571x381__1_.gif?w=1500&q=80&fm=webp";
   const img4 =
      "https://images.ctfassets.net/q8mvene1wzq4/1KpCG1zGKTZvJkX5nnCCKS/1d4482275a2a89a2a848dbc89cb48582/Tools_to_predict.png?w=1500&q=60&fm=";
   const img5 =
      "https://images.ctfassets.net/q8mvene1wzq4/1HfI9JLolbcsaU9pfVgE1r/fc38e0b901a8202df9c73a25927f5ab7/pay.png?w=300&q=60&fm=";
   const img6 =
      "https://images.ctfassets.net/q8mvene1wzq4/2zb5EgYG70vQUh2DadGJ3h/c57d529110b70b84dc2c24594cd60968/tips.png?w=300&q=60&fm=";
   const img7 =
      "https://images.ctfassets.net/q8mvene1wzq4/5wxSdTNvMz0uWPMDt0sNTV/4feae97e80f3135acb46259ad45a861b/bonuses.png?w=300&q=60&fm=";
   const img8 =
      "https://images.ctfassets.net/q8mvene1wzq4/5vtSqudGKlfhom4EdIuej6/f6540ea9daff064838ab1ba2c8ce494b/2_learning_pay_basics_400x346.gif?w=1500&q=80&fm=";
   const img9 =
      "https://images.ctfassets.net/q8mvene1wzq4/1UYjJwuyI4ypwJJO6vc3k9/225d58b970dff18ec61b401e9f92a919/dotcom_____driver_pay_____B-2x.png?w=1500&q=60&fm=";
   const img10 =
      "https://images.ctfassets.net/q8mvene1wzq4/Ux9sWwX1jk6umD1nvZLWL/fa691ca49153fa87704c6c4542d045bb/5_lyft_reward_571x381__1_.gif?w=1500&q=80&fm=";
   const img11 =
      "https://images.ctfassets.net/q8mvene1wzq4/5bl0SW0BOlGbnZ3Aje2hgC/67891188782a5b83ad33bc4bb7887877/3_lyft_direct_571x381_B.gif?w=1500&q=80&fm=";
   const img12 =
      "https://images.ctfassets.net/q8mvene1wzq4/eYfYMV9zt4FPuTUWJVe6K/2321b0ec29448052a769d579bbecf0b7/4_vehicle_service_center_571x381__1_.gif?w=1500&q=80&fm=";
   const img13 =
      "https://images.ctfassets.net/q8mvene1wzq4/1OQ8OBLzXGv8pVjFTLf0QF/9a7b8cdb982161daebd5618fc7cb5041/Car_blue_L.png?w=1500&q=60&fm=";

   return (
      <div className="earnings">
         <main className="flex flex-col">
            <section className="first-section flex justify-center">
               <div className="first-section-container flex self-center justify-center gap-4">
                  <div className="hero flex flex-col justify-center gap-4">
                     <h1 className="">{"The Driver's Guide to Pay"}</h1>
                     <div className="flex flex-col gap-4">
                        <p className="">
                           We want to help you stay busy on the road with our
                           driver resources, designed to give you all of the
                           information you need to maximize earnings.
                        </p>
                        <div className="flex items-center mt-2">
                           <CustomButton isPurpleBtn>
                              Apply to drive
                           </CustomButton>
                        </div>
                     </div>
                  </div>
                  <div className="first-section-img">
                     <img src={img1} className="w-100" alt="A trip ride" />
                  </div>
               </div>
            </section>

            <section className="second-section flex justify-center">
               <div className="section-container flex flex-col self-center justify-center gap-5">
                  <div className="flex items-center gap-5">
                     <div className="section-info flex flex-col gap-4">
                        <h2>
                           How to earn <br />
                           smarter{" "}
                        </h2>
                        <div className="flex flex-col gap-3">
                           <p>
                              Stay busy and keep earning by finding the right
                              times and places to drive.
                           </p>
                           <Link>Learn more</Link>
                        </div>
                     </div>
                     <div className="section-info flex flex-col gap-4">
                        <h2>
                           How to easily <br />
                           understand pay{" "}
                        </h2>
                        <div className="flex flex-col gap-3">
                           <p>
                              Understand driver pay and how to track your weekly
                              earnings.
                           </p>
                           <Link>Learn more</Link>
                        </div>
                     </div>
                     <div className="section-info flex flex-col gap-4">
                        <h2>
                           How to can get <br />
                           more with lift
                        </h2>
                        <div className="flex flex-col gap-3">
                           <p>
                              Get Trip Rewards perks and find more opportunities
                              to earn and save cash.
                           </p>
                           <Link>Learn more</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <section className="head-section flex justify-center">
               <div className="section-container flex flex-col self-center">
                  <div className="section-info w-100 flex flex-col gap-3">
                     <h2>How to earn smarter on the road</h2>
                     <p>
                        {
                           "Planning and adapting how you drive can help you stay busier — and help maximize your earnings. Learn more about why it's important to stay "
                        }
                        <br />
                        busy if you want to earn more, where and when to drive,
                        and how to find the busiest places and times to drive in
                        your app.
                     </p>
                  </div>
               </div>
            </section>

            <section className="section-desc flex justify-center">
               <div className="section-container flex flex-col self-center gap-5">
                  <div className="section-info w-100 flex justify-between gap-3">
                     <div className="gif-image-1">
                        <img className="" src={img2} />
                     </div>
                     <div className="earning-info flex flex-col justify-center gap-4">
                        <h2>
                           Stay busy, maximize <br />
                           earnings
                        </h2>
                        <div className="flex flex-col gap-3">
                           <p>
                              Learn about how staying busy when you are on the
                              road can maximize your earnings.
                           </p>
                           <Link>Take the tutorial</Link>
                        </div>
                     </div>
                  </div>
                  <div className="section-info w-100 flex justify-between gap-3">
                     <div className="earning-info flex flex-col justify-center gap-4">
                        <h2>
                           Drive with a plan to earn <br />
                           more
                        </h2>
                        <div className="flex flex-col gap-3">
                           <p>
                              Hear tips from other drivers on when and where to
                              drive and how to find the busiest times and areas
                              to drive in the app.
                           </p>
                           <Link>Watch the video</Link>
                        </div>
                     </div>
                     <div className="gif-image-1 flex justify-content-end">
                        <img className="" src={img3} />
                     </div>
                  </div>
                  <div className="section-info w-100 flex justify-between gap-3">
                     <div className="gif-image-1">
                        <img className="" src={img4} />
                     </div>
                     <div className="earning-info flex flex-col justify-center gap-4">
                        <h2>
                           Tools to find and predict <br />
                           rider demand
                        </h2>
                        <div className="flex flex-col gap-3">
                           <p>
                              {
                                 "Use in-app tools like heat maps to view your city's hotspots and forecasts to show you when people are most likely to need rides."
                              }
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <section className="head-section flex justify-center">
               <div className="section-container flex flex-col self-center">
                  <div className="section-info w-100 flex flex-col gap-3">
                     <h2>How to easily understand pay</h2>
                     <p>
                        {
                           "Understanding driver pay can actually be simple - just remember that the biggest part of your total earnings comes from upfront pay, which is the  "
                        }
                        <br />
                        fare you are paid for each ride that you give. The rest
                        of your earnings come from any tips or bonuses you may
                        have earned.
                     </p>
                  </div>
               </div>
            </section>

            <section className="section-desc flex justify-center">
               <div className="section-container flex flex-col self-center gap-5">
                  <div className="flex flex-col gap-5 mb-5">
                     <div className="understand-pay flex flex-col gap-5">
                        <div className="flex items-center gap-5">
                           <img src={img5} />

                           <div className="flex flex-col gap-4">
                              <h2>Upfront pay</h2>
                              <p>
                                 This is the fare you are paid for each ride you
                                 give. You can view the fare for a ride before
                                 you accept it. Upfront pay is based on a number
                                 of factors which may include estimated time and
                                 distance to complete the ride, your travel to
                                 the pickup point, demand for rides in your
                                 area, and other market factors.
                              </p>
                           </div>
                        </div>
                        <HorizontalLine />
                        <div className="flex items-center gap-5">
                           <img src={img6} />

                           <div className="flex flex-col gap-4">
                              <h2>Tips</h2>
                              <p>
                                 {
                                    "You keep 100% of the tips passengers choose to give you. We built tipping into the Trip app to make it easy for passengers to say thanks, and because we know it's important to our drivers. Passengers can tip during and after the ride, or set an automatic tip so they never forget."
                                 }
                              </p>
                           </div>
                        </div>
                        <HorizontalLine />
                        <div className="flex items-center gap-5">
                           <img src={img7} />

                           <div className="flex flex-col gap-4">
                              <h2>Bonuses</h2>
                              <p>
                                 {
                                    "Trip offers a variety of bonuses to help boost your earnings. Bonuses are most commonly offered during the busiest times and in the busiest places. You can see what’s available in your Lyft Driver app, or learn more about driver bonuses here."
                                 }
                              </p>
                           </div>
                        </div>
                        <HorizontalLine />
                     </div>

                     <div className="w-100 text-center px-2">
                        {
                           "*You may see a different experience in select cities. If upfront pay is not available in your city, then you will be paid for each minute and mile of the trips you complete, based on your city's per-minute and per-mile rates. Upfront pay is not available in Washington state, New York City, Portland, or Toronto."
                        }
                     </div>
                  </div>

                  <div className="section-info w-100 flex items-center justify-between gap-5">
                     <div
                        style={{ width: "400px" }}
                        className="flex flex-col gap-4"
                     >
                        <img src={img8} />

                        <div className="flex flex-col items-start gap-4">
                           <h3>How your pay works</h3>
                           <div className="flex flex-col gap-3">
                              <p>
                                 Learn how you earn with Trip through this
                                 interactive tutorial.
                              </p>
                              <Link>Watch the video</Link>
                           </div>
                        </div>
                     </div>
                     <div className="" style={{ height: "550px" }}>
                        <Line />
                     </div>
                     <div
                        style={{ width: "400px" }}
                        className="flex flex-col self-start gap-4"
                     >
                        <img width="400" src={img9} />

                        <div className="flex flex-col items-start gap-4">
                           <h3>Your earnings breakdown</h3>
                           <p>
                              You can always track a breakdown of how much you
                              made by ride in your <Link>Driver app</Link>.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <section className="head-section flex justify-center">
               <div className="section-container flex flex-col self-center">
                  <div className="section-info w-100 flex flex-col gap-3">
                     <h2>How you can get more with Trip</h2>
                     <p>
                        {
                           "We're here to help you get the most of your time driving with Trip. From exclusive driver rewards to cost-saving vehicle service options, we've got "
                        }
                        <br />
                        your back when it comes to earning (and saving) on the
                        road.
                     </p>
                  </div>
               </div>
            </section>

            <section className="section-desc flex justify-center">
               <div className="section-container flex flex-col self-center gap-5">
                  <div className="section-info w-100 flex justify-between gap-3">
                     <div className="gif-image-1">
                        <img className="" src={img10} />
                     </div>
                     <div className="earning-info flex flex-col justify-center gap-4">
                        <h2>
                           Stay busy, maximize <br />
                           earnings
                        </h2>
                        <div className="flex flex-col gap-3">
                           <p>
                              Learn about how staying busy when you are on the
                              road can maximize your earnings.
                           </p>
                           <Link>Take the tutorial</Link>
                        </div>
                     </div>
                  </div>
                  <div className="section-info w-100 flex justify-between gap-3">
                     <div className="earning-info flex flex-col justify-center gap-4">
                        <h2>
                           Drive with a plan to earn <br />
                           more
                        </h2>
                        <div className="flex flex-col gap-3">
                           <p>
                              Hear tips from other drivers on when and where to
                              drive and how to find the busiest times and areas
                              to drive in the app.
                           </p>
                           <Link>Watch the video</Link>
                        </div>
                     </div>
                     <div className="gif-image-1 flex justify-content-end">
                        <img className="" src={img11} />
                     </div>
                  </div>
                  <div className="section-info w-100 flex justify-between gap-3">
                     <div className="gif-image-1">
                        <img className="" src={img12} />
                     </div>
                     <div className="earning-info flex flex-col justify-center gap-4">
                        <h2>
                           Tools to find and predict <br />
                           rider demand
                        </h2>
                        <div className="flex flex-col gap-3">
                           <p>
                              {
                                 "Use in-app tools like heat maps to view your city's hotspots and forecasts to show you when people are most likely to need rides."
                              }
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <section className="head-section flex justify-center">
               <div className="section-container flex flex-col self-center">
                  <div className="section-info w-100 flex flex-col gap-3">
                     <h1 className="question">
                        {"Questions? We've got answers"}
                     </h1>
                  </div>
               </div>
            </section>

            <section className="section-desc flex justify-center">
               <div className="section-container flex flex-col self-center gap-5">
                  <div className="section-info w-100 flex flex-col gap-5">
                     <h1 className="question">Earning with lift</h1>
                     <div className="flex flex-col"></div>
                  </div>
                  <div className="section-info w-100 flex flex-col gap-5">
                     <h1 className="question">Getting paid</h1>
                     <div className="flex flex-col"></div>
                  </div>
                  <div className="section-info w-100 flex flex-col gap-5">
                     <h1 className="question">Earning more</h1>
                     <div className="flex flex-col"></div>
                  </div>
               </div>
            </section>

            <section className="fourth-section flex justify-center">
               <div className="section-container flex self-center gap-4">
                  <div className="image-container">
                     <img className="" src={img13} />
                  </div>

                  <div className="earning-info flex flex-col items-start justify-center gap-4">
                     <h2>Ready to start earning?</h2>
                     <CustomButton isPurpleBtn>Apply to drive</CustomButton>
                  </div>
               </div>
            </section>

            <section className="last-section flex justify-center">
               <div className="section-container self-center flex items-center gap-4">
                  <div className="section-info w-100 flex flex-col gap-4">
                     <span className="info-text w-100">
                        *The higher your Trip Rewards tier, the more you can
                        save at gas and public EV charging stations that accept
                        Mastercard. 7% cash back for Platinum drivers, 3% for
                        Gold drivers, 2% for Silver drivers, and 1% for all
                        cardholders. <Link>Terms Apply</Link>.
                     </span>
                     <span className="info-text w-100">
                        Trip Rewards and the Trip Direct debit card are not
                        available everywhere.
                     </span>
                  </div>
               </div>
            </section>
         </main>
      </div>
   );
};

export default EarningsPage;
