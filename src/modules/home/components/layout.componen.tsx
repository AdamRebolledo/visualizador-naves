import { useEffect, useState } from "react";
import SelectComponent from "../../../shared/UI/components/select/select.component";
import store from "../../../redux/store";
import { updateStartship } from "../../../redux/actions/startships_actions";
import { useQuery } from "react-query";
import DetailCard from "../../../shared/UI/components/detail-card/detail-card.component";
import { formatNum } from "../../../services/helpers/format";

const Layout = () => {
 const url_api: string = process.env.REACT_APP_API_URL!;
 const [selectOption, setSelectOption] = useState<any>(null);
 const [pilots, setPilots] = useState<any>(null);
 const [open, setOpen] = useState<boolean>(false);

 const { isLoading, error, data }: any = useQuery("Startship", () => fetch(url_api).then((res) => res.json()));

 const selectedOption = (option: any) => {
  store.dispatch(updateStartship(option));
  setSelectOption(store.getState().startship.startship);
  setOpen(false);
 };

 const getPilotsApi = async () => {
  let i = 0;
  let pilotsList: any = [];
  for (i; i < selectOption.pilots.length; i++) {
   pilotsList.push(selectOption.pilots[i]);
  }

  const res = await Promise.all(
   pilotsList.map(async (url: string) => {
    const resp = await fetch(url);
    return resp.json();
   })
  );
  setPilots(res);
 };

 useEffect(() => {
  setPilots(null);
  if (selectOption !== null) {
   getPilotsApi();
  }
 }, [selectOption]);

 if (isLoading) return <div className='loader'>Loading...</div>;

 if (error) return <div>Error...</div>;

 return (
  <>
   <div className='container grid grid-colums-12 md:mx-auto md:pt-5 px-6 pt-6'>
    <div className='col-span-12 pb-5'>
     <SelectComponent option={selectOption} openAction={() => setOpen(!open)} openSelect={open}>
      {data.results.map((option: any, index: number) => {
       return (
        <div onClick={() => selectedOption(option)} className='p18 element select-item' key={index}>
         {option?.name}
        </div>
       );
      })}
     </SelectComponent>
    </div>

    {selectOption !== null && (
     <div className='col-span-12'>
      <DetailCard className='text-center pb-4'>
       <div className='border-bottom-black'>
        <h1>{selectOption?.name}</h1>
        <p className='p18 pb-2'>{selectOption?.model}</p>
       </div>
       <div className='pt-4'>
        <h2>Fabricante</h2>
        <p className='p18 pb-2'>{selectOption?.manufacturer}</p>
       </div>
       <div>
        <h2>Largo</h2>
        <p className='p18 pb-2'>{formatNum(selectOption?.length)} fts.</p>
       </div>
       <div>
        <h2>Valor</h2>
        <p className='p18 pb-2'>{formatNum(selectOption?.cost_in_credits)} créditos</p>
       </div>
       <div>
        <h2>Cantidad pasajeros</h2>
        <p className='p18 pb-2'>{formatNum(selectOption?.passengers)}</p>
       </div>
      </DetailCard>
     </div>
    )}
    {pilots !== null && (
     <div className='col-span-12 mt-2 mb-12'>
      <DetailCard className='text-center pb-4'>
       <div className='border-bottom-black'>
        <h1 className='pb-2'>Pasajeros</h1>
       </div>
       <div className='pt-4'>
        {pilots.map((pilot: any, index: number) => {
         return (
          <div key={index}>
           <p className='p18 pb-2'>{pilot?.name}</p>
          </div>
         );
        })}
       </div>
      </DetailCard>
     </div>
    )}
   </div>
  </>
 );
};

export default Layout;
