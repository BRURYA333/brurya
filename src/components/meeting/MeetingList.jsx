import { observer } from "mobx-react";
import { Link, Outlet, useParams } from "react-router-dom";
import MeetingStore from "../../store/MeetingStore";
import { useEffect } from "react";
import { setMeetings } from "../../store/meetingServer";
// import ServiceList from "../Services/ServicesList";

const MeetingList = observer(() => {


  useEffect(() => {
    if (!MeetingStore.meetingList.length) {
      setMeetings()
    }
  }, [])
  return (
    <>
      <h1>Meeting List</h1>
      <div>
        {MeetingStore.meetingList.map((m, i) => <div key={i}>
          <Link to={i}>{m.clientEmail}</Link>
        </div>
        )}
      </div>
      <br />
    </>
  )
})

export default MeetingList