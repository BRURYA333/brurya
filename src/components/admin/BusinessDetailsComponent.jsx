import { observer } from 'mobx-react';
import { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import dataStore from "../../store/serviceStore";
import User from '../user/user';
import ServicesList from "../services/ServicesList";
import AdminStore from '../../store/AdminStore';
import './BusinessDetailsComponent.css';
import { UpdateBusinessDetails } from '../../store/businessDetailsServer';
import MyBackground from '../MyBackground';


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
      <header>
        <MyBackground />
      </header>
      <div className='fieldBussiness'>
        <TextField
          label="Title"
          name="title"
          value={data.title}
          onChange={handleChange}
          className="TextField"
        />
        <br />
        <br />

        <TextField
          label="Description"
          value={data.description}
          name='description'
          onChange={handleChange}
          className="TextField"
        />
        <br />
        <br />

        <TextField
          label="Owner"
          name='owner'
          value={data.owner}
          onChange={handleChange}
          className="TextField"
        />
        <br />
        <br />

        <TextField
          label="Address"
          value={data.address}
          name='address'
          onChange={handleChange}
          className="TextField"
        />
        <br />
        <br />

        <TextField
          label="Phone"
          value={data.phone}
          name='phone'
          onChange={handleChange}
          className="TextField"
        />
      </div>

      <div>
        <Button class="MuiButtonBase-root special-button" variant="contained" onClick={handleSave} className="Button">
          שמירה
        </Button>
      </div>
    </>
  );
});

export default BusinessDetailsComponent;
