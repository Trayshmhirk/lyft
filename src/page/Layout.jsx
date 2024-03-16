// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const Layout = ({
   children,
   isHome,
   isDriver,
   isEarning,
   isCities,
   isBusiness,
   isRider,
}) => {
   return (
      <div className="">
         <Header
            isHome={isHome}
            isDriver={isDriver}
            isEarning={isEarning}
            isCities={isCities}
            isBusiness={isBusiness}
            isRider={isRider}
         />

         {children}

         <Footer />
      </div>
   );
};

export default Layout;
