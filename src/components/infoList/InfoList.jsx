const InfoList = ({iconClass, h4text, para}) => {
   return(
      <li className="info-list d-flex gap-3 fs-6">
         <div>
            <i className={iconClass}></i> 
         </div>
         <div>
            <span className='fw-semibold'>{h4text}</span>
            <span>{para}</span>
         </div>
      </li>
   )
}

export default InfoList;