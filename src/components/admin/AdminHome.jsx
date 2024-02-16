import React, { useState } from "react";
import { observer } from "mobx-react";
import { TextField, Button, Fab } from "@mui/material";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
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

const AdminHome = observer(() => {
  return (
    <Container>

      {/* <Fab
        color="blue"
        aria-label="add"
        onClick={handleEditModeToggle} // Toggle the isEditMode variable on button click
        style={{
          position: 'fixed !imporotant',
          top: '30px !imporotant',
          right: '30px !imporotant',
        }}
      >
        <EditIcon />
      </Fab> */}
     
      <div className='button-container'>
        <Button variant="outlined" ><Link to="services">services</Link></Button>
        <Button variant="outlined" ><Link to="meeting">meeting</Link></Button>
        <Button variant="outlined" ><Link to="edit">edit</Link></Button>
      </div>
      {/* <BusinessDetailsComponent></BusinessDetailsComponent> */}
      <Outlet />
    </Container>
  );
});

export default AdminHome;
