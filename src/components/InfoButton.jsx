import CustomButton from "./customButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoButton = ({ btnText, paraText, iconClass, isNotCenter }) => {
   return (
      <div
         className={`flex flex-col gap-5 ${isNotCenter ? "items-start" : "items-center lg:items-center"} lg:flex-row`}
      >
         <CustomButton isPurpleBtn>{btnText}</CustomButton>
         <div className="flex items-center gap-3 font-bold">
            {paraText}
            <FontAwesomeIcon icon={iconClass} className="-mt-[2px]" />
         </div>
      </div>
   );
};

export default InfoButton;
