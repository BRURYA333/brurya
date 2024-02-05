import React, { useState } from "react";
import { observer } from "mobx-react";
import { TextField, Button } from "@mui/material";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import MeetingStore from "../../store/MeetingStore";
import DataStore from "../../store/dataStore";
// import MeetingList2 from "../Meeting/MeetingList2";
// import EditButton from "./EditButton"
// import "./AdminHome.css";


const AdminHome = observer(() => {
  const [title, setTitle] = useState(MeetingStore.title);
  const [address, setAddress] = useState(MeetingStore.address);
  const [phone, setPhone] = useState(MeetingStore.phone);
  const [owner, setOwner] = useState(MeetingStore.owner);
  const [description, setDescription] = useState(MeetingStore.description);
  // const [logo, setLogo] = useState(MeetingStor.logo);

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    MeetingStore.updateTitleAndPhone(title, phone);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setTitle(MeetingStore.title);
    setAddress(MeetingStore.address);
    setPhone(MeetingStore.phone);
    setOwner(MeetingStore.owner);
    setDescription(MeetingStore.description);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleOwnerChange = (e) => {
    setOwner(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  return (
    <Container>
      <Typography variant="h4">Admin Home</Typography>
      {isEditing ? (
        <>
          <TextField
            label="Title"
            value={title}
            onChange={handleTitleChange}
          />
          <TextField
            label="Address"
            value={address}
            onChange={handleAddressChange}
          />
          <TextField
            label="Owner"
            value={owner}
            onChange={handleOwnerChange}
          />
          <TextField
          label="Description"
          value={description}
          onChange={handleDescriptionChange}
        />
        <TextField
          label="Phone"
          value={phone}
          onChange={handlePhoneChange}
        />
        <Button variant="contained" onClick={handleSave}>
          Save
        </Button>
        <Button variant="contained" onClick={handleCancel}>
          Cancel
        </Button>
      </>
    ) : (
      <>
        <Typography variant="h6">Title: {MeetingStore.title}</Typography>
        <Typography variant="h6">Address: {MeetingStore.address}</Typography>
        <Typography variant="h6">Owner: {MeetingStore.owner}</Typography>
        <Typography variant="h6">
          Description: {MeetingStore.description}
        </Typography>
        <Typography variant="h6">Phone: {MeetingStore.phone}</Typography>
        <Button variant="contained" onClick={handleEdit}>
          Edit
        </Button>
      </>
    )}
  </Container>
);
});

export default AdminHome;
