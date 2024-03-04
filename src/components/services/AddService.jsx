import { Button, TextField } from '@mui/material';
import { useState } from 'react';

import { AddServiceToserver } from '../../store/serviceServer.js';
import SelectImage from './SelectImage.jsx';
import serviceStore from '../../store/serviceStore.js';
import './addService.css'

const AddService = (service1 = {}) => {
    const [cake, setCake] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    // const [service, setService] = useState(service1);

    return (

        <div className='addService'>
            <TextField id="cake"
                label="type_of_cake"
                variant="outlined"
                value={cake} onChange={(e) => setCake(e.target.value)} />
            <br />
            <TextField id="description"
                label="description"
                variant="outlined"
                value={description} onChange={(e) => setDescription(e.target.value)} />
            <br />

            <br />
            <SelectImage className='addService'
                setImage={setImage}></SelectImage>

            <Button variant="contained"
                onClick={() => AddServiceToserver({ name: cake, description, image })}>הוספת עוגה </Button>
        </div>
    )
}

export default AddService
