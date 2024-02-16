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

  const [formData, setFormData] = useState({
    serviceName: service.name,
    serviceDescription: service.describtion,
    clientName: '',
    clientPhone: '',
    clientEmail: '',
    meetingDateTime: null,
  });
  const [image, setImages] = useState([]);
  const [isOpen, setIsOpen] = useState(false)
  // const images = [
  //   "src/assets/images/11.png",
  //   "src/assets/images/12.png",
  //   "src/assets/images/13.png",
  //   "src/assets/images/14.png",
  //   "src/assets/images/15.png",

  // ];
  

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
      AddMeetingToserver(formData)
    }


    setIsOpen(false);
    console.log("form", formData.clientEmail, formData.dateTime)
    // איפוס המשתנים
    setFormData({
      serviceName: service.name,
      serviceDescription: service.describtion,
      clientName: '',
      clientPhone: '',
      clientEmail: '',
      meetingDateTime: null,
    });
  };

  return (
    <>
      <div className="center" >
        <Button variant="contained" onClick={() => setIsOpen(true)}>I want it!</Button>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
          <DialogTitle>I want to invite a cake!</DialogTitle>
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
            <Button onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button type="submit" onClick={handleSubmit}>Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
      {/* {MeetingStore.currentList.map((x) => (<div>{x.clientName}"date: "{x.date}" phone: {x.clientPhone}"</div>))} */}
    </>
  )
})
export default AddMeeting




