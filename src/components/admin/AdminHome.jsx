import React, { useState } from "react";
import { observer } from "mobx-react";
// import Button from '@mui/material/Button';
// import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { TextField, Button, Fab } from "@mui/material";
import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AdminStore from "../../store/AdminStore";
import DataStore from "../../store/serviceStore";
import BusinessDetailsComponent from "./BusinessDetailsComponent";
import './AdminHome.css';
import { Link, Outlet } from "react-router-dom";
import BusinessDetailsShow from "./BusinessDetailsShow";
import MyBackground from "../MyBackground";

const AdminHome = observer(() => {
  return (
    <Container>

      <MyBackground></MyBackground>
      <BusinessDetailsShow />

      <div className='button-container'>
        <Button className='buttonn' variant="outlined" ><Link to="services">העוגות שלנו</Link></Button>
        <Button className='buttonn' variant="outlined" ><Link to="addservice">הוספת עוגה למאגר</Link></Button>
        <Button className='buttonn' variant="outlined" ><Link to="meeting">הזמנות</Link></Button>
        <Button className='buttonn' variant="outlined" ><Link to="edit">עריכת פרטים</Link></Button>
      </div>

      <Outlet />
    </Container>
  );
});

export default AdminHome;
