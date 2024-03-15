// eslint-disable-next-line no-unused-vars
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const BusinessPage = lazy(() => import("./businessPage"));

const BusinessPageRoute = () => {
   return (
      <Suspense>
         <Routes>
            <Route path="/" element={<BusinessPage />} />
            {/* <Route path="cities" element={<CitiesPage isRider />} />
         <Route path="business" element={<RiderBusinessPage isRider />} /> */}
         </Routes>
      </Suspense>
   );
};

export default BusinessPageRoute;
