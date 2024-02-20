import { observer } from "mobx-react";
import { Link, Outlet, useParams } from "react-router-dom";
import MeetingStore from "../../store/MeetingStore";
import { useEffect } from "react";
import { setMeetings } from "../../store/meetingServer";
import BasicCard from "./BasicCard";
// import ServiceList from "../Services/ServicesList";

const MeetingList = observer(() => {


  useEffect(() => {
    if (!MeetingStore.meetingList.length) {
      setMeetings()
    }
  }, [])
  return (
    <>
      <h3>:רשימת ההזמנות</h3>
      <div>
        {MeetingStore.meetingList.map((m, i) => <div key={i}>

          <div>
              <BasicCard 
              
              cake={m.serviceName}
              name={m.clientName}
              email={m.clientEmail}
              phone={m.clientPhone}
              dateAndTime={m.dateTime}
              />
            </div>

        </div>
        )}
      </div>
      <br />
    </>
  )
})

export default MeetingList