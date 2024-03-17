/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

   theme: {
      screens: {
         xs: "424px",
         sm: "576px",
         md: "768px",
         lg: "1024px",
         xl: "1200px",
      },
      fontFamily: {
         sans: ["Roboto", "sans-serif"],
      },
      extend: {
         colors: {
            cetaceanBlue: "#0C0B31",
            gainsboro: "#D8D8DE",
            lightGray: "#D3D3D3",
            cadetBlue: "#ACACC0",
            majorelleBlue: "#523BE4",
            veryLightBlue: "#654EFA",
            gray: "#BDBDBD",
            shockingPink: "#FF00BF",
            platinum: "#E6E6EA",
            opaqueIndigo: "#2B1B810D",
            culturedGray: "#F4F4FA",
            darkElectricBlue: "#63637B",
         },
      },
   },
   plugins: [],
};
