// eslint-disable-next-line no-unused-vars
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Driver = lazy(() => import("./driver"));
const EarningsPage = lazy(() => import("./earningsPage/earningsPage"));
const CitiesPage = lazy(() => import("../citiesPage/citiesPage"));

const DriverRoute = () => {
   return (
      <Suspense>
         <Routes>
            <Route path="/" element={<Driver />} />
            <Route path="pay" element={<EarningsPage />} />
            <Route path="cities" element={<CitiesPage isDriver />} />
         </Routes>
      </Suspense>
   );
};

export default DriverRoute;
