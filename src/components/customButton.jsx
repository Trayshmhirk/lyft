// import React from 'react'

const CustomButton = ({
   children,
   isWhiteBtn,
   isPurpleBtn,
   isNoBorderBtn,
   isFooterBtn,
   isEarning,
   className,
   isHome,
}) => {
   const buttonClassName = `
      rounded-[48px] cursor-pointer
      ${isWhiteBtn ? "bg-white border border-cadetBlue hover:bg-lightGray" : ""}
      ${isPurpleBtn ? "purple-btn bg-majorelleBlue text-white hover:bg-veryLightBlue" : ""}
      ${isNoBorderBtn ? "bg-white" : ""}
      ${isFooterBtn ? "h-10 min-w-[100px] bg-opaqueIndigo px-4 text-center" : "px-6 h-12"}
      ${className}
   `;

   return (
      <button
         className={buttonClassName}
         // onClick={handleClick}
      >
         {isFooterBtn ? (
            <span className="text-base font-bold">{children}</span>
         ) : (
            <span
               className={`
                  font-bold
                  ${isEarning ? "text-base" : "text-xl"}
                  ${isHome ? "text-base lg:text-xl-4" : ""} 
               `}
            >
               {children}
            </span>
         )}
      </button>
   );
};

export default CustomButton;
