// import React from 'react'

const CustomButton = ({
   children,
   isWhiteBtn,
   isPurpleBtn,
   isNoBorderBtn,
   className,
}) => {
   const buttonClassName = `
      h-12 px-6 rounded-[48px] cursor-pointer
      ${className}
      ${isWhiteBtn ? "bg-white border border-cadetBlue hover:bg-lightGray" : ""}
      ${isPurpleBtn ? "purple-btn bg-majorelleBlue text-white hover:bg-veryLightBlue" : ""}
      ${isNoBorderBtn ? "bg-white" : ""}
   `;

   return (
      <button
         className={buttonClassName}
         // onClick={handleClick}
      >
         <span className="text-xl font-bold">{children}</span>
      </button>
   );
};

export default CustomButton;
