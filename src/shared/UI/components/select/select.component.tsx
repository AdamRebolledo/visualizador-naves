import { ReactNode } from "react";
import "./select.css";

type props = {
 className?: string;
 onChange?: any;
 children: ReactNode;
 option?: any;
 openAction: any;
 openSelect: boolean;
};

function SelectComponent({ className, onChange, children, option, openAction, openSelect }: props) {
 return (
  <>
   <div onClick={openAction} className={openSelect ? `${"rotate select-box"}` : `${"select-box"}`}>
    <div className={`custom-select ${className}`}>
     <div className='text-secondary'>
      <p className='p18'>{option?.name === undefined ? "Seleccione una nave..." : `${option?.name}`}</p>
     </div>
    </div>
   </div>
   <div className={openSelect ? `${"text-secondary box-options block"}` : `${"hidden"}`} onChange={onChange}>
    {children}
   </div>
  </>
 );
}

export default SelectComponent;
