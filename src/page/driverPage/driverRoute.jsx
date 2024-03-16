// eslint-disable-next-line no-unused-vars
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";

const Driver = lazy(() => import("./driver"));
const EarningsPage = lazy(() => import("./earningsPage/earningsPage"));
const CitiesPage = lazy(() => import("../citiesPage/citiesPage"));

const DriverRoute = () => {
   return (
      <Suspense>
         <Routes>
            <Route
               path="/"
               element={
                  <Layout isDriver={true}>
                     <Driver />
                  </Layout>
               }
            />
            <Route
               path="pay"
               element={
                  <Layout isDriver={true} isEarning={true}>
                     <EarningsPage />
                  </Layout>
               }
            />
            <Route
               path="cities"
               element={
                  <Layout isDriver={true} isCities={true}>
                     <CitiesPage />
                  </Layout>
               }
            />
         </Routes>
      </Suspense>
   );
};

export default DriverRoute;
