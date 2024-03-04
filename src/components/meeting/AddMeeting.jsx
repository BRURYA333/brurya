import { useState } from "react";
import { useEffect } from "react";
import { observer } from 'mobx-react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AddMeetingToserver } from "../../store/meetingServer";
import './AddMeeting.css'

const AddMeeting = observer(({ service }) => {
  console.log(service)
  const [formData, setFormData] = useState({
    serviceName: service.name,
    serviceDescription: service.description,
    clientName: '',
    clientPhone: '',
    clientEmail: '',
    meetingDateTime: null,
  });

  const [isOpen, setIsOpen] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  
  const handleDateTimeChange = (dateTime) => {
    const formattedDateTime = dateTime.format('YYYY-MM-DDTHH:mm:ss');
    setFormData((prevData) => ({
      ...prevData,
      dateTime: formattedDateTime,
    }));
    handleInputChange({ target: { name: 'dateTime', value: formattedDateTime } });
  };

  const handleSubmit = (event) => {
    // event.preventDefault();

    if (formData.clientEmail !== "" && formData.dateTime !== "" && formData.clientName !== "" && formData.clientName !== "") {
      AddMeetingToserver({data:formData, setIsValid})
    }

    setIsOpen(false);
    console.log("form", formData.clientEmail, formData.dateTime)
    // איפוס המשתנים
    setFormData({
      serviceName: service.name,
      serviceDescription: service.description,
      clientName: '',
      clientPhone: '',
      clientEmail: '',
      meetingDateTime: null,
    });
  };

  return (
    <>
      <div className="center" >
        <Button variant="contained" onClick={() => setIsOpen(true)}>!בטח להזמין</Button>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
          <DialogTitle>מלא פרטים, ונהיה בקשר...</DialogTitle>
          <DialogContent className="dialog">
            <form onSubmit={handleSubmit} className="form">
              <div className="form-item">

                <TextField
                  fullWidth
                  label="Cake"
                  name="clientName"
                  value={formData.serviceName}
                  onChange={handleInputChange}
                  placeholder="type of cake"
                  className="textField"
                  required
                />
              </div>

              <div className="form-item">
                {/* <label>Name</label> */}
                <TextField
                  fullWidth
                  label="Name"
                  name="clientName"
                  value={formData.clientName}
                  onChange={handleInputChange}
                  placeholder="clientName"
                  className="textField"
                  required
                />
              </div>

              <div className="form-item">
                {/* <label>Email</label> */}
                <TextField
                  label="Email"
                  fullWidth
                  name="clientEmail"
                  value={formData.clientEmail}
                  onChange={handleInputChange}
                  placeholder="clientEmail"
                  className="textField"
                  required
                />
              </div>

              <div className="form-item">
                {/* <label>Phone</label> */}
                <TextField
                  fullWidth
                  label="Phone"
                  name="clientPhone"
                  value={formData.clientPhone}
                  onChange={handleInputChange}
                  placeholder="clientPhone"
                  className="textField"
                  required
                />
              </div>

              {/* <label>DateTime</label>
                <TextField
                  className="textField"
                  label="DateTime"
                  fullWidth
                  type="datetime-local"
                  name="dateTime"
                  value={formData.dateTime}
                  onChange={handleInputChange}
                  InputLabelProps={{
                    shrink: true,

                  }}
                /> */}

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  renderInput={(props) => (
                    <TextField
                      {...props}
                      color={ isValid === true ? 'success' : 'error'}
                      variant="outlined"
                      className="inputs"
                      name="dateTime"
                      label="Meeting Date and Time"
                    />
                  )}
                  value={formData.dateTime}
                  onChange={handleDateTimeChange}
                  disablePast
                  required
                />
              </LocalizationProvider>

            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setIsOpen(false)}>ביטול</Button>
            <Button type="submit" onClick={handleSubmit}>הזמנה</Button>
          </DialogActions>
        </Dialog>
      </div>
      {/* {MeetingStore.currentList.map((x) => (<div>{x.clientName}"date: "{x.date}" phone: {x.clientPhone}"</div>))} */}
    </>
  )
})
export default AddMeeting




