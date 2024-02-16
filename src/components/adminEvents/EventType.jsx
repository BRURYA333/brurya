import { useState } from "react";
import dataStore from "../../store/serviceStore";
import { observer } from "mobx-react";


const EventType = (observer(() => {
const [isEditMode, setIsEditMode] = useState(false)

  return (
    <>
      {isEditMode ? <div>edit event type</div> : <div>event type to view</div>}
      
      {/* {dataStore.isLogin && <button onClick={() => setIsEditMode(!isEditMode)}>edit toggle</button>} */}
    </>
  )
}
))

export default EventType