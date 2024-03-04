import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, TextField } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import Swal from 'sweetalert'
import dataStore from '../../store/serviceStore';
import BusinessDetailsComponent from './BusinessDetailsComponent';
import AdminStore from "../../store/AdminStore";
import MyBackground from '../MyBackground';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const handleLogIn = async () => {

   try {
      AdminStore.setIsLogin(false);
      const response = await axios.post("http://localhost:8787/login", { name, password });
      if (response.status === 200) {
        AdminStore.setIsLogin(true);
      }
    }
    catch (e) {
       if(e.response.status === 401){
        alert('User name or password not correct');
      }
      else{
        alert('server failed');
      }
    }
  }

  return (
    <>
    <MyBackground></MyBackground>
      <Box
        //מלבן סביב השדות
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          opacity: '90%',
          marginRight: '-100vh', // הוספת הגדרה זו כדי לדחוף ימינה
          marginTop: '-100px', // להעלות מעט למעלה
        }}
      >
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.3rem',
            padding: '4rem',
            boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.7) ',
            borderRadius: '8px',
            backgroundColor: 'white',
            opacity: '80%'
          }}
        >
          <TextField
            fullWidth
            label="User Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'blue', // צבע הקו החיצוני של השדה
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#FF69B4', // צבע הקו החיצוני של השדה כאשר הוא במצב ממוקד
                },
              },
            }}
            InputProps={{

              startAdornment: <PersonIcon />,
            }}
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              startAdornment: <LockIcon />,
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleLogIn}
          >log In</Button>
        </Box>
      </Box>
    </>
  );
};

export default Login;

