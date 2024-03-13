// import React from 'react'
import "./businessPage.scss";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import CustomButton from "../../components/customButton/customButton";
import { Link } from "react-router-dom";

const BusinessPage = () => {
   const img1 =
      "https://images.ctfassets.net/7qj0pq66qmy0/4OhYWRomjdbEereillakVN/984a2da7ad2be76ceb42ebd39d77ccd1/Homepage_hero_458x397.png?w=2500&q=60&fm=";
   return (
      <div className="business">
         <Header isRider isBusiness />
         <nav className="business-sub-pages d">
            <div className="nav-container h-100 flex gap-4 items-center">
               <Link>Products</Link>
               <Link>Solutions</Link>
               <Link>Customers</Link>
               <Link>Resources</Link>
               <Link>Contact us</Link>
               <Link>Get started</Link>
            </div>
         </nav>

         <main>
            <section className="first-section flex justify-center">
               <div className="section-container flex justify-between">
                  <div className="hero w-100 flex flex-col items-start justify-center gap-4">
                     <h1 className="mb-3">
                        Drive your business with access to reliable rides
                     </h1>
                     <p>
                        {
                           "Take care of transportation for the people who matter to your business. Create a free Trip Business account for your organization and start moving your people today."
                        }
                     </p>

                     <div className="w-75 flex items-center gap-4">
                        <input
                           className=""
                           placeholder="Enter work email address*"
                        />
                        <div className="">
                           <CustomButton isPurpleBtn>
                              Create account
                           </CustomButton>
                        </div>
                     </div>
                     <strong className="mt-4">
                        Already using Trip business? <Link>Sign in here »</Link>
                     </strong>
                  </div>

                  <div className="image-container">
                     <img src={img1} />
                  </div>
               </div>
            </section>

            {/* <section className="second-section flex justify-center">
               <div className="section-container flex flex-col gap-4">
                  <h3>Benefits for you</h3>

                  <div className='flex justify-between'>
                     <div className='benefits flex flex-col gap-4'>
                        <div className='image-circle'>
                           <img src='' />
                        </div>
                        <h2>Earn rewards</h2>
                        <p>Earn hotel and airline rewards by linking your Alaska Mileage Plan™, Delta SkyMiles®, or Hilton Honors account.</p>
                     </div>
                     <div className='benefits flex flex-col gap-4'>
                        <div className='image-circle'>
                           <img src='' />
                        </div>
                        <h2>Manage expenses</h2>
                        <p>Automatically forward receipts to Concur, Expensify and more — no more paperwork or manual uploads.</p>
                     </div>
                     <div className='benefits flex flex-col gap-4'>
                        <div className='image-circle'>
                           <img src='' />
                        </div>
                        <h2>Separate profiles</h2>
                        <p>{"With profiles for business and personal travel, it's easy to track which rides are which."}</p>
                     </div>
                  </div>
               </div>
            </section>

            <section className="third-section flex justify-center">
               <div className="section-container w-100 flex justify-between">
                  

                  <div className='flex flex-col justify-center'>
                     <h2 className='fw-semibold'>
                        How to set up your business profile
                     </h2>
                     <div>
                        <img />
                        <p className='fw-bold'>Open your Lyft app and go to the menu</p>
                     </div>
                     <div>
                        <img />
                        <p className='fw-bold'>Go to profile and select business profiles</p>
                     </div>
                     <div>
                        <img />
                        <p className='fw-bold'>Add your payment info and expense provider so you can forward receipts</p>
                     </div>
                     <div>
                        <img />
                        <p className='fw-bold'>{"You're good to go!"}</p>
                     </div>
                  </div>
               </div>
            </section>

            <section className="fourth-section flex justify-center">
               <div className="section-container w-100 flex flex-col gap-5">
                  <h3>Smoother in business travel from beginning to end</h3>

                  <div className='flex items-center justify-between gap-5'>
                     <div className='w-50'>
                        
                     </div>
                     <div className='w-50'>
                        <h2>Calendar integration</h2>
                        <p>
                           {"Connect your Apple Calendar to the Lyft app to get reminders about booking your airport ride. We'll add your flight info into the app before you book a ride, too."}
                        </p>
                     </div>
                  </div>
                  <div className='flex items-center justify-between gap-5'>
                     <div className='w-50'>
                        <h2>Scheduled rides</h2>
                        <p>
                           {"When you have somewhere important to be, you can schedule a ride up to 30 days ahead. Choose a date and time, and lock in a price."}
                        </p>
                     </div>
                     <div className='w-50'>
                        
                     </div>
                  </div>
                  <div className='flex items-center justify-between gap-5'>
                  <div className='w-50'>
                        
                     </div>
                     <div className='w-50'>
                        <h2>Preorder rides</h2>
                        <p>
                           {"Preorder your ride and let us handle the timing. Pick up your bags, stretch your legs, and move at your own pace. We’ll match you with a driver as you get closer to the pickup spot (Currently available at LAX, MDW, and ORD)."}
                        </p>
                     </div>
                  </div>
               </div>
            </section> */}

            <section className="last-section flex justify-center">
               <div className="section-container self-center flex items-center gap-4">
                  <div className="w-50 flex flex-col items-start justify-center gap-4">
                     <h2 className="">
                        Take care of your people and your transportation needs
                     </h2>
                     <p>
                        {
                           "Set up a Trip Business account for you organization and get started today"
                        }
                     </p>

                     <CustomButton isPurpleBtn>Create account</CustomButton>
                  </div>

                  <div className="w-50">{/* <img src={img6} /> */}</div>
               </div>
            </section>
         </main>

         <Footer />
      </div>
   );
};

export default BusinessPage;
