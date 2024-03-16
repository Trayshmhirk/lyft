import CustomButton from "../customButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoButton = ({ btnText, paraText, iconClass }) => {
   return (
      <div className="flex flex-col gap-5 items-center lg:flex-row lg:items-center">
         <CustomButton isPurpleBtn>{btnText}</CustomButton>
         <div className="flex items-center gap-3 font-bold">
            {paraText}
            <FontAwesomeIcon icon={iconClass} className="-mt-[2px]" />
         </div>
      </div>
   );
};

export default InfoButton;
