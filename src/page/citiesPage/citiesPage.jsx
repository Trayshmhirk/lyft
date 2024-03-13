// import React from 'react'
import './citiesPage.scss'
import Header from '../../components/header/header'
import Footer from "../../components/footer/footer"
// import CustomButton from "../../../components/customButton/customButton"
// import { Link } from "react-router-dom"

const CitiesPage = ({isDriver, isRider}) => {
   return (
      <div className='cities'>
         <Header 
            isDriver={isDriver}
            isRider={isRider}
            isCities
         />

         <main className='d-flex flex-column'>
            <section className="last-section d-flex justify-content-center">
               <div className='section-container align-self-center d-flex align-items-center gap-4'>
                  <div className='section-info w-100 d-flex flex-column align-items-center gap-4'>
                     <div className='w-100'>
                        <label className='input-wrapper w-100 mt-3'>
                           <input
                              className='fw-bold'
                              placeholder='Find Your City'
                           />
                        </label>
                        <span></span>
                     </div>

                  </div>
               </div>
            </section>
         </main>
   
         <Footer />
      </div>
   )
}

export default CitiesPage