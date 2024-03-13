// import React from 'react'
import { Route, Routes } from "react-router-dom"
import Driver from "./driver"
import EarningsPage from "./earningsPage/earningsPage"
import CitiesPage from "../citiesPage/citiesPage"


const DriverRoute = () => {

   return (
      <Routes>
         <Route path="/" element={<Driver />} />
         <Route path="pay" element={<EarningsPage />} />
         <Route path="cities" element={<CitiesPage isDriver />} />
      </Routes>
   )
}

export default DriverRoute