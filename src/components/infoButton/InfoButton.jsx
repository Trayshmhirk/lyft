import CustomButton from "../customButton";

const InfoButton = ({ btnText, paraText, iconClass, isMobileView }) => {
   return (
      <div
         className={`info-button flex ${isMobileView ? "flex-col gap-3" : "gap-4"} items-center `}
      >
         <CustomButton isPurpleBtn>{btnText}</CustomButton>
         <div className="flex items-center gap-3 fs-5 font-medium">
            {paraText}
            <i className={`${iconClass} mt-1`}></i>
         </div>
      </div>
   );
};

export default InfoButton;
