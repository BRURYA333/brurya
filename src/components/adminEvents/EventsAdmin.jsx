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


export default EventsAdmin