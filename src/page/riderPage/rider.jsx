// import React from 'react'
import "./rider.scss";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import CustomButton from "../../components/customButton";
import Line from "../../components/line";
import { imageLinks } from "../../assets/imageLinks";
import { Link } from "react-router-dom";

const Rider = () => {
   const riderImages = imageLinks.rider;

   return (
      <div className="rider">
         <Header isRider />

         <main className="d-flex flex-column">
            <section className="first-section d-flex justify-content-center">
               <div className="first-section-container d-flex align-self-center justify-content-center  gap-4">
                  <div className="first-section-img">
                     <img
                        src={riderImages.img1}
                        className="w-100"
                        alt="A Lyft ride"
                     />
                  </div>
                  <div className="hero d-flex flex-column justify-content-center gap-4">
                     <h1 className="">
                        One app.
                        <br />
                        All the rides.
                     </h1>
                     <div className="buttons d-flex gap-3">
                        <CustomButton isPurpleBtn>Sign up</CustomButton>
                     </div>
                  </div>
               </div>
            </section>

            <section className="second-section d-flex justify-content-center">
               <div className="section-container d-flex flex-column align-self-center justify-content-center gap-5">
                  <div className="d-flex align-items-center justify-content-center gap-4">
                     <div className="section-info d-flex flex-column gap-3">
                        <h2>
                           On-demand rides for <br /> in-demand people
                        </h2>
                        <p className="">
                           {
                              "Your shift starts at 8. Happy hour on the patio only lasts for an hour. And your family would love to see your face again, ASAP. We’ll match you with a driver in seconds, show you the quickest bus route, or help you find the nearest bike or scooter."
                           }
                        </p>
                     </div>
                     <div className="rider-image-container d-flex align-items-end justify-content-end">
                        <img src={riderImages.img2} alt="" />
                     </div>
                  </div>
               </div>
            </section>

            <section className="third-section d-flex justify-content-center">
               <div className="section-container d-flex flex-column align-self-center">
                  <div className="d-flex gap-4">
                     <div className="d-flex flex-column gap-5">
                        <div className="slider-heading">
                           <h2 className="">
                              A hop, skip, and a jump is just a tap away
                           </h2>
                           <p>
                              {
                                 "Hit the road, or the rails. Find a ride that fits your style and budget.*"
                              }
                           </p>
                        </div>

                        {/* <CardSlider/> */}

                        <span className="info-text">
                           *Availability of bikes, scooters, rentals, ride
                           types, and transit information varies by region.
                        </span>
                     </div>
                  </div>
               </div>
            </section>

            <section className="fourth-section d-flex justify-content-center">
               <div className="section-container d-flex flex-column gap-5">
                  <div className="w-50 d-flex flex-column gap-4">
                     <span className="fs-6 fw-semibold">MEMBER REWARDS</span>
                     <h2>
                        {"There's no such thing "}
                        <br />
                        {"as too many perks"}
                     </h2>
                  </div>

                  <div className="section-info w-100 d-flex align-items-center justify-content-between gap-5">
                     <div
                        style={{ width: "400px" }}
                        className="d-flex flex-column gap-4"
                     >
                        <img src={riderImages.img3} />

                        <div className="d-flex flex-column align-items-start gap-4">
                           <h3>VIP Benefits</h3>
                           <div className="d-flex flex-column gap-3">
                              <p>
                                 Unlock faster pickups at no extra cost,
                                 member-exclusive pricing, and free roadside
                                 assistance for your own car—right in the app.
                                 Plus relaxed ride cancellations, free classic
                                 bike rides, and more.
                              </p>
                              <span className="subject-terms">
                                 Subject to the{" "}
                                 <Link>Lyft Pink Terms & Conditions</Link> and{" "}
                                 <Link>Lyft Terms of Service</Link>.
                              </span>
                           </div>

                           <CustomButton isPurpleBtn>
                              Join Lyft Pink
                           </CustomButton>
                        </div>
                     </div>
                     <div className="h-100">
                        <Line />
                     </div>
                     <div
                        style={{ width: "400px" }}
                        className="d-flex flex-column align-self-start gap-4"
                     >
                        <img width="400" height="320" src={riderImages.img4} />

                        <div className="d-flex flex-column align-items-start gap-4">
                           <h3>Reward programs</h3>
                           <p>
                              {
                                 "We've got rewards for miles. Literally. Earn everything from airline miles to credit card or hotel points, and more, every time you ride."
                              }
                           </p>
                           <CustomButton isPurpleBtn>Get started</CustomButton>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <section className="fifth-section d-flex justify-content-center">
               <div className="section-container d-flex flex-column gap-5">
                  <div className="d-flex gap-4">
                     <div className="section-info d-flex flex-column gap-3">
                        <ul className="d-flex flex-column gap-4">
                           <h2 className="fw-medium">
                              Safety for all means looking out for our riders
                           </h2>
                           <p className="">
                              {
                                 "We'll always treat you with respect and look out for your safety. We do this by maintaining high standards, which start before your very first ride. Our proactive safety features are always on. And anytime, night or day, we offer real help from real humans."
                              }
                           </p>
                        </ul>
                        <div className="d-flex gap-3">
                           <p className="fw-semibold">See our safety feature</p>
                           <i className="fa-solid fa-arrow-right"></i>
                        </div>
                     </div>

                     <div className="image-container d-flex align-items-center justify-content-end">
                        <img src={riderImages.img5} alt="" />
                     </div>
                  </div>
               </div>
            </section>

            <section className="sixth-section d-flex justify-content-center">
               <div className="section-container d-flex flex-column gap-5">
                  <span className="info-text mb-4">
                     *Priority pickup subject to availability.
                  </span>
                  <div className="d-flex gap-4">
                     <div className="image-container d-flex align-items-center justify-content-start">
                        <img src={riderImages.img6} alt="" />
                     </div>

                     <div className="section-info d-flex flex-column gap-3">
                        <ul className="d-flex flex-column gap-4">
                           <h2 className="fw-medium">
                              Making millions of rides more accessible
                           </h2>
                           <p className="">
                              {
                                 "We believe transportation is a basic necessity. Getting to polling places, healthcare facilities, grocery stores, or to grandma's house for a visit. It all requires accessible, dependable transportation. That’s why we’re working to offer affordable, reliable rides to everyone who needs them. No matter their income, zip or postal code."
                              }
                           </p>
                        </ul>
                        <div className="d-flex gap-3">
                           <p className="fw-semibold">Learn about Lyft Up</p>
                           <i className="fa-solid fa-arrow-right"></i>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <section className="last-section d-flex justify-content-center">
               <div className="section-container align-self-center d-flex align-items-center gap-4">
                  <div className="section-info d-flex flex-column align-items-start gap-4">
                     <h2 className="">Give the gift of getting around</h2>
                     <p>
                        {
                           "When you give Lyft gift cards to your family and friends, it's like the world is their present. That's because they’ll get access to convenient, reliable, masked-up Lyft rides, whether they're headed all around town, or just around the block."
                        }
                     </p>

                     <CustomButton isPurpleBtn>Send a gift card</CustomButton>
                  </div>
                  <div className="image-container d-flex align-items-end justify-content-end">
                     <img src={riderImages.img7} />
                  </div>
               </div>
            </section>
         </main>

         <Footer />
      </div>
   );
};

export default Rider;
