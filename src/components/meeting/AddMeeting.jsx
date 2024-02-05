import React, { useState } from "react";

const AddMeetingForm = () => {
  const [meetingType, setMeetingType] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
}

const handleAddMeeting = () => {
  // Logic to add the meeting goes here
  console.log("Meeting added:", {
    meetingType,
    name,
    phone,
    email,
    date,
    time
  });

  // Clear form fields
  setMeetingType("");
  setName("");
  setPhone("");
  setEmail("");
  setDate("");
  setTime("");
};

return (
  <form>
    <div>
      <label htmlFor="meetingType">Type of Meeting:</label>
      <input
        type="text"
        id="meetingType"
        value={meetingType}
        onChange={(e) => setMeetingType(e.target.value)}
      />
    </div>

    <div>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>

    <div>
      <label htmlFor="phone">Phone:</label>
      <input
        type="tel"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
    </div>

    <div>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>

    <div>
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>

    <div>
      <label htmlFor="time">Time:</label>
      <input
        type="time"
        id="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
    </div>
    </form>);
