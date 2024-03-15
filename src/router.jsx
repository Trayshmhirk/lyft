// eslint-disable-next-line no-unused-vars
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import DriverRoute from "./page/driverPage/driverRoute";
import RiderRoute from "./page/riderPage/riderRoute";
import BusinessPageRoute from "./page/businessPage/businessPageRoute";
import Layout from "./page/Layout";

const Home = lazy(() => import("./page/home"));

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
