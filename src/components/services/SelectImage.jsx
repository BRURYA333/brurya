import * as React from 'react';
import { useState } from 'react';
import { observer } from 'mobx-react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CardMedia from '@mui/material/CardMedia';

const SelectImage = (observer(({setService,serv}) => {

  const [SelectImage, setSelectImage] = useState('');
  const handleChange = (event) => {

    setSelectImage(event.target.value);
     setService({...serv,image:event.target.value});
  }


  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select image</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={SelectImage}
          label="image"
          onChange={handleChange}
        >
          <MenuItem value={'/images/11.png'}>
          <CardMedia component="img" height="100" width="100" image='/images/11.png'/></MenuItem>
          <MenuItem value={'/images/12.png'}>
          <CardMedia component="img" height="100" width="100" image='/images/12.png'/></MenuItem>
          <MenuItem value={'/images/13.png'}>
          <CardMedia component="img" height="100" width="100" image='/images/13.png'/></MenuItem>
          <MenuItem value={'/images/14.png'}>
          <CardMedia component="img" height="100" width="100" image='/images/14.png'/></MenuItem>
          <MenuItem value={'/images/15.png'}>
          <CardMedia component="img" height="100" width="100" image='/images/15.png'/></MenuItem>
          <MenuItem value={'/images/16.png'}>
          <CardMedia component="img" height="100" width="100" image='/images/16.png'/></MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}))
export default SelectImage