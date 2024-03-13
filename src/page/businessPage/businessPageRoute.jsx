// import React from 'react'
import { Route, Routes } from "react-router-dom"
import BusinessPage from "./businessPage"

const BusinessPageRoute = () => {
   return (
      <Routes>
         <Route path="/" element={<BusinessPage />} />
         {/* <Route path="cities" element={<CitiesPage isRider />} />
         <Route path="business" element={<RiderBusinessPage isRider />} /> */}
      </Routes>
   )
}

export default BusinessPageRoute