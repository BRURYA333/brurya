import { Outlet, useParams } from "react-router-dom";
// import ServiceList from "../Services/ServicesList";

function MeetingList() {
  // const {date}=useParams();
  const meetingList =[];

  return (
    <>
      <h1>Meeting List</h1>
      {/* <div className="background">
        {meetingList.map((m, i) => <div key={i}>
          <Link to={i}>{m.service}</Link>
        </div>
        )}
      </div>
      <br />
      <outlet context={[ServiceList[date]]} /> */}
    </>
  )
}

export default MeetingList