import Link from '@mui/material/Link';

function EventsAdmin() {
  const [showEventTypes,setShowEventTypes]=useState(false)

  return (
    <> 
      <br />
        <input type="radio" name="radio" checked={showEventTypes} onClick={()=>setShowEventTypes(true)}/>
        <lable>event types</lable>
        <input type="radio" name="radio" checkted={!showEventTypes} onClick={()=>setShowEventTypes(false)}/>
        <lable>saved events</lable>
        
      {/* <Link to="./services"> services </Link> */}
      {/* <Link to="./meeting"> meeting </Link> */}
{/* 
      <br />
      outlet:
      <br />
      <Outlet /> */}
      {showEventTypes ? "<EventTypes/>" : "<SavedEvents/>"}
    </>
  )
}

const business = {
  name: "Coding Academy",
  address: "Rothschild 60 Tel Aviv",
  phone: "03-1234567",
  owner: "Yariv Katz",
  logo: "https://coding-academy.org/images/ca_logo.png",
  description: "The best coding academy in the world",
};


export default EventsAdmin