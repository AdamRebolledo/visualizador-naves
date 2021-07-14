/* eslint-disable jsx-a11y/alt-text */
import Layout from "../components/layout.componen";
import { QueryClientProvider, QueryClient } from "react-query";

import background from "../../../assets/img/imageDesktop.png";

const Home = () => {
 const queryClient = new QueryClient();

 return (
  <>
   <QueryClientProvider client={queryClient}>
    <img className='img-desktop md:block hidden absolute' src={background} />
    <Layout />
   </QueryClientProvider>
  </>
 );
};

export default Home;
