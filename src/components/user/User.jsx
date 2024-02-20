// import {outlet} from "react-router-dom";
// import EventType from "../admin_events/EventType";
import { Observer, observer } from "mobx-react";
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import MyDataPicker from "../MyDataPicker";
// import EventType from "../adminEvents/EventType";
import dataStore from "../../store/serviceStore";
import ServiceList from "../services/ServicesList";
import BusinessDetailsShow from "../admin/BusinessDetailsShow";
import MyBackground from "../MyBackground";

const User = observer(() => {
  // useEffect(() => {
  //   localStorage.removeItem('isLogin');
  //   dataStore.myBusinessDetails();
  //    console.log("log",dataStore.services.length);

  // }
  // , []);

  const { id } = useParams();

  return (
    <>
      <header>
      {/* <MyBackground /> */}
        <BusinessDetailsShow />
      </header>

      <div >
        <ServiceList></ServiceList>
      </div>
    </>
  );
});



// const User = observer(({ dataStore }) => {
//     return(
//         <>
//         <ServiceList dataStore={dataStore} />  //רשימת השירותים

//             <EventType/>
//             <LocalizationProvider dataAdapter={AdapterDayjs}>
//                 <MyDataPicker/>
//             </LocalizationProvider>

//        </>
//     )

// })
export default User

