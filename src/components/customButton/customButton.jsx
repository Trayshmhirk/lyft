// import React from 'react'
import "./customButton.scss";

const CustomButton = ({ children, isWhiteBtn, isPurpleBtn, isNoBorderBtn }) => {
   const buttonClassName = `
      custom-btn fs-6 font-medium
      ${isWhiteBtn ? "white-btn" : ""}
      ${isPurpleBtn ? "purple-btn" : ""}
      ${isNoBorderBtn ? "no-border-btn" : ""}
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
