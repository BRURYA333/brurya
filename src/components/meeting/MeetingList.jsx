import { observer } from "mobx-react";
import { Container, Grid } from "@mui/material";
import { useEffect } from "react";
import { setMeetings } from "../../store/meetingServer";
import BasicCard from "./BasicCard";
import './MeetingList.css';
import MeetingStore from "../../store/MeetingStore";
import MyBackground from "../MyBackground";

const MeetingList = observer(() => {
  useEffect(() => {
    if (!MeetingStore.meetingList.length) {
      setMeetings();
    }
  }, []);

  // Define today's date and date one week from now
  const today = new Date();
  const oneWeekFromNow = new Date();
  oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);

  // Sort meetings by date
  const sortedMeetings = MeetingStore.meetingList.slice().sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));

  const getTime = (dateTime) => {
    const date = new Date(dateTime);
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(date);
    return formattedDate;
  }

  return (
    <Container>

    <MyBackground/>
   <h3 style={{textAlign: 'right'}}>:רשימת ההזמנות</h3>

      <div className="meet-container">
        {sortedMeetings.map((meeting) => {
          const meetingDate = new Date(meeting.dateTime);
          let color = "";

          if (meetingDate.toDateString() === today.toDateString()) {
            color = "red"; // Meeting is today
          } else if (
            meetingDate > today &&
            meetingDate <= oneWeekFromNow
          ) {
            color = "orange"; // Meeting is this week
          } else {
            color = "green"; // Meeting is further away
          }

          return (
            <Grid item key={meeting.name} className={`meet ${color}`}>
              <BasicCard
                cake={meeting.serviceName}
                name={meeting.clientName}
                email={meeting.clientEmail}
                phone={meeting.clientPhone}
                dateAndTime={getTime(meeting.dateTime)}
              />
            </Grid>
          );
        })}
      </div>
      <br />
    </Container>
  );
});

export default MeetingList;
