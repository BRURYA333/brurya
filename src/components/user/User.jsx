// import {outlet} from "react-router-dom";
// import EventType from "../admin_events/EventType";
import { Observer, observer } from "mobx-react";
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import MyDataPicker from "../MyDataPicker";
import dataStore from "../../store/serviceStore";
import ServiceList from "../services/ServicesList";
import BusinessDetailsShow from "../admin/BusinessDetailsShow";
import MyBackground from "../MyBackground";
import { GetBussinessDetails } from "../../store/businessDetailsServer";


const User = observer(() => {
  useEffect(() => {
   GetBussinessDetails();
  } , []);

  const { id } = useParams();

  return (
    <>
      <header>
        <MyBackground />
      </header>

      <div>
        <BusinessDetailsShow/>
        <ServiceList></ServiceList>
      </div>
    </>
  );
});


export default User

