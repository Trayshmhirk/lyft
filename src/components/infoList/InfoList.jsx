import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoList = ({ iconClass, h4text, para }) => {
   return (
      <li className="flex flex-col gap-1 text-start">
         <div className="flex gap-3 items-center">
            <FontAwesomeIcon icon={iconClass} className="w-4 h-4" />
            <span className="font-bold">{h4text}</span>
         </div>
         <div className="flex gap-5">
            <span className="w-[10px]"></span>
            <span className="">{para}</span>
         </div>
      </li>
   );
};

export default InfoList;
