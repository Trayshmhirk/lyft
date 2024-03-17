import { useState, useEffect } from 'react';

const useWindowWidth = () => {
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

   // handles the realtime change in the screen width and sets the state to the width
   useEffect(() => {
      const handleResize = () => {
         setWindowWidth(window.innerWidth);
      }

      window.onresize = handleResize;
      
      return () => {
         window.onresize = null;
      }
   }, [])
   
   return windowWidth;
}

export default useWindowWidth;