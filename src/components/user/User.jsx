// import {outlet} from "react-router-dom";
// import EventType from "../admin_events/EventType";
import { Observer, observer } from "mobx-react";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import MyDataPicker from "../MyDataPicker";
import MyBackground from "../MyBackground";
import EventType from "../adminEvents/EventType";

const User=(observer(() =>{
    return(
        <>
        <MyBackground></MyBackground>
            <EventType></EventType>
            <LocalizationProvider dataAdapter={AdapterDayjs}>
                <MyDataPicker/>
            </LocalizationProvider>

       </>
    )

}))
export default User

