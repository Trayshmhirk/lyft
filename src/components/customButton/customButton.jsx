// import React from 'react'

const CustomButton = ({ children, isWhiteBtn, isPurpleBtn, isNoBorderBtn }) => {
   const buttonClassName = `
      custom-btn min-w-[120px] h-12 font-medium px-6 rounded-[48px] cursor-pointer text-center
      ${isWhiteBtn ? "bg-white text-black border border-cadetBlue hover:bg-lightGray" : ""}
      ${isPurpleBtn ? "purple-btn bg-majorelleBlue text-white hover:bg-veryLightBlue" : ""}
      ${isNoBorderBtn ? "w-[130px] bg-white text-black" : ""}
   `;

   return (
      <button
         className={buttonClassName}
         // onClick={handleClick}
      >
         {children}
      </button>
   );
};

export default CustomButton;
