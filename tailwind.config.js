/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

   theme: {
      screens: {
         sm: "576px",
         md: "768px",
         lg: "976px",
         xl: "1240px",
         "2xl": "1440px",
      },
      extend: {
         colors: {
            cetaceanBlue: "#OC0B31",
            gainsboro: "#D8D8DE",
            lightGray: "#D3D3D3",
            cadetBlue: "#ACACC0",
            majorelleBlue: "#523BE4",
            veryLightBlue: "#654EFA",
         },
      },
   },
   plugins: [],
};
