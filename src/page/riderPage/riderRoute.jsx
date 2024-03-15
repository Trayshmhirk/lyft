// eslint-disable-next-line no-unused-vars
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Rider = lazy(() => import("./rider"));
const CitiesPage = lazy(() => import("../citiesPage/citiesPage"));
const RiderBusinessPage = lazy(
   () => import("./riderBusinessPage/riderBusinessPage")
);

const RiderRoute = () => {
   return (
      <Routes>
         <Route path="/" element={<Rider />} />
         <Route path="cities" element={<CitiesPage isRider />} />
         <Route path="business" element={<RiderBusinessPage isRider />} />
      </Routes>
   );
};

export default RiderRoute;
