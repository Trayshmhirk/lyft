// import React from 'react'
import "./citiesPage.scss";
// import CustomButton from "../../../components/customButton/customButton"
// import { Link } from "react-router-dom"

const CitiesPage = () => {
   return (
      <div className="cities">
         <main className="flex flex-col">
            <section className="last-section flex justify-center">
               <div className="section-container self-center flex items-center gap-4">
                  <div className="section-info w-100 flex flex-col items-center gap-4">
                     <div className="w-100">
                        <label className="input-wrapper w-100 mt-3">
                           <input
                              className="fw-bold"
                              placeholder="Find Your City"
                           />
                        </label>
                        <span></span>
                     </div>
                  </div>
               </div>
            </section>
         </main>
      </div>
   );
};

export default CitiesPage;
