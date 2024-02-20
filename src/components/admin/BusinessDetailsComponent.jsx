import { observer } from 'mobx-react';
import { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import dataStore from "../../store/serviceStore";
import User from '../user/user';
import ServicesList from "../services/ServicesList";
import AdminStore from '../../store/AdminStore';
import './BusinessDetailsComponent.css';
import { UpdateBusinessDetails } from '../../store/businessDetailsServer';


const BusinessDetailsComponent = observer(({ }) => {
  const [data, setData] = useState(AdminStore.data);

  //send to server
  const handleSave = (event) => {
    if (data.title !== "" && data.description !== "" && data.owner !== "" && data.address !== "" && data.phone !== "") {
      UpdateBusinessDetails(data);
    }
  };

  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };
  return (
    <>
      <div className='fieldBussiness left'>
        <TextField
          label="Title"
          name="title"
          value={data.title}
          onChange={handleChange}
        />
        <br />
        <TextField
          label="Description"
          value={data.description}
          name='description'
          onChange={handleChange}
        />
        <br />
        <TextField
          label="Owner"
          name='owner'
          value={data.owner}
          onChange={handleChange}
        />
        <br />
        <TextField
          label="Address"
          value={data.address}
          name='address'
          onChange={handleChange}
        />
        <br />
        <TextField
          label="Phone"
          value={data.phone}
          name='phone'
          onChange={handleChange}
        />
      </div>

      <div className='left'>
        <Button variant="contained" onClick={handleSave}>
          Save
        </Button>


      </div>
    </>
  );
});

export default BusinessDetailsComponent;