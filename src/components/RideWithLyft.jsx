// import React from 'react'
import { Link } from "react-router-dom";
import { riderInteractingWithPhone } from "../Images/Images";
import CustomButton from "./CustomButton";

const RideWithLyft = () => {
   return (
      <main className="flex flex-col">
         <section className="py-16 md:py-20">
            <div className="max-w-[1280px] w-full mx-auto px-4 flex flex-col gap-6 md:px-6 lg:flex-row lg:justify-between lg:items-center lg:gap-4">
               <div className="w-full h-full flex flex-col items-center gap-10 lg:w-1/2 lg:items-start lg:justify-center">
                  <h1 className="text-[48px] leading-[54px] font-semibold md:text-[60px] md:leading-[70px] lg:text-[80px] lg:leading-[92px]">
                     Let&apos;s start with your number
                  </h1>
                  <p>We&apos;ll text you a link to download the app.</p>
                  <div className="max-w-80">
                     <input
                        className="w-full"
                        type="phone"
                        placeholder="Enter mobile phone number*"
                     />
                  </div>
                  <div className="flex flex-col gap-3">
                     <p>
                        By clicking “Submit,” you agree to Lyft&apos;s{" "}
                        <Link className="link-underline">Terms of Service</Link>{" "}
                        and acknowledge you have read our{" "}
                        <Link className="link-underline"> Privacy Policy</Link>.
                     </p>
                     <p>
                        By providing your phone number and clicking “Submit”,
                        you consent to receive text messages from Lyft. Text
                        messages may be autodialed, and data rates may apply.
                        The frequency of text messages varies.
                     </p>
                  </div>
                  <div className="buttons flex gap-4 flex-col xs:flex-row">
                     <CustomButton isPurpleBtn>Submit</CustomButton>
                  </div>
               </div>

               <div className="w-full lg:pr-4 lg:w-[33.333%]">
                  <img
                     src={riderInteractingWithPhone}
                     className="w-full h-full object-contain object-center"
                     alt="A lyft ride"
                  />
               </div>
            </div>
         </section>
      </main>
   );
};

export default RideWithLyft;
