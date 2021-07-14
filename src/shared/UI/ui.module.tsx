import { useState } from "react";
import SelectComponent from "./components/select/select.component";
import store from "../../redux/store";
import { updateStartship } from "../../redux/actions/startships_actions";
import DetailCard from "./components/detail-card/detail-card.component";

const Ui = () => {
 const [selectOption, setSelectOption] = useState("Seleccione una nave...");
 const [open, setOpen] = useState(false);
 const options: any = [{ title: "test1" }, { title: "test2" }, { title: "test3" }];

 const selectedOption = (option: any) => {
  store.dispatch(updateStartship(option));
  setSelectOption(option.title);
  setOpen(false);
 };

 return (
  <>
   <SelectComponent option={selectOption} openAction={() => setOpen(!open)} openSelect={open}>
    {options.map((option: any, index: number) => {
     return (
      <div onClick={() => selectedOption(option)} className='p18 element select-item' key={index}>
       {option?.title}
      </div>
     );
    })}
   </SelectComponent>
   <DetailCard>
    <div></div>
   </DetailCard>
  </>
 );
};

export default Ui;
