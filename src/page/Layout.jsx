// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer/footer";
import useWindowWidth from "../components/hooks/useWindowWidth";

const Layout = ({
   children,
   isHome,
   isDriver,
   isEarning,
   isCities,
   isBusiness,
   isRider,
}) => {
   const windowWidth = useWindowWidth();
   const mobileView = windowWidth <= 1024;

   return (
      <div className="">
         <Header
            isHome={isHome}
            isDriver={isDriver}
            isEarning={isEarning}
            isCities={isCities}
            isBusiness={isBusiness}
            isRider={isRider}
            isMobileView={mobileView}
         />

         {children}

         <Footer isMobileView={mobileView} />
      </div>
   );
};

export default Layout;
