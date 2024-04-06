// eslint-disable-next-line no-unused-vars
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import DriverRoute from "./page/driverPage/DriverRoute";
import RiderRoute from "./page/riderPage/RiderRoute";
import BusinessPageRoute from "./page/BusinessPage/BusinessPageRoute";
import Layout from "./page/Layout";

const Home = lazy(() => import("./page/Home"));

const Router = () => {
   return (
      <Suspense>
         <Routes>
            <Route
               path="/"
               element={
                  <Layout isHome={true}>
                     <Home />
                  </Layout>
               }
            />
            <Route path="driver/*" element={<DriverRoute />} />
            <Route path="rider/*" element={<RiderRoute />} />
            <Route path="business/*" element={<BusinessPageRoute />} />
         </Routes>
      </Suspense>
   );
};

export default Router;
