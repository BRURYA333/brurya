import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { AddServiceToserver } from '../../store/serviceServer.js';

const AddService = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [owner, setOwner] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');    

    return (
        <>
            <TextField id="name"
                label="serviceName"
                variant="outlined"
                value={name} onChange={(e) => setName(e.target.value)} />
            <TextField id="description"
                label="descriptionName"
                variant="outlined"
                value={description} onChange={(e) => setDescription(e.target.value)} />
            <TextField id="owner"
                label="sownerName"
                variant="outlined"
                value={owner} onChange={(e) => setOwner(e.target.value)} />
            <TextField id="address"
                label="addressName"
                variant="outlined"
                value={address} onChange={(e) => setAddress(e.target.value)} />
            <TextField id="phone"
                label="phoneName"
                variant="outlined"
                value={phone} onChange={(e) => setPhone(e.target.value)} />

            <Button variant="contained" 
            onClick={() => AddServiceToserver({ name })}>Add Service</Button>
        </>
    )
}

export default AddService
