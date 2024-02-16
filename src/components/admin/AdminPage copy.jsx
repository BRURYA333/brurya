import {useState} from "react"
import {observer} from "mobx-react"
import { Outlet, Link } from "react-router-dom";
import Login from "./Login"
// import EventsAdmin from '../adminEvent/EventsAdmin'
import { observable } from "mobx"

const AdminPage =(observer(() =>{
   const [isLogin,setIsLogin]=useState(false);

    const [isEditMode, setIsEditMode] = useState(false);
    const handleEditModeToggle = () => {
      setIsEditMode(!isEditMode);
    };
    useEffect(() => {
  
 
      if (localStorage.getItem("isLogin") === "true") {
        dataStore.setIsLogin(true);
      }
      dataStore.myBusinessServices();
      dataStore.myBusinessDetails();
     
    }, []);

    return (
    <>
      <div className="alll">
        {/* {dataStore.isLogin ? */}
          <>
          <Fab
          color="blue"
          aria-label="add"
          onClick={handleEditModeToggle} // Toggle the isEditMode variable on button click
          style={{
            position: 'fixed !imporotant',
            top: '30px !imporotant',
            right: '30px !imporotant',
          }}
        >
          {/* //קומפוננטה להצגת שתי הכפתורים */}
          <EditIcon />
        </Fab>
        {/* {isEditMode?(<FormUpdateBusinessData func={setIsEditMode} ></FormUpdateBusinessData>):<BusinessDetailsComponent></BusinessDetailsComponent>} */}
            <div className='button-container'>
              <Button variant="outlined" ><Link to="./services">services</Link></Button>
              <Button variant="outlined" ><Link to="./meeting">meeting</Link></Button>
            </div>
            <Outlet/>
          </>
          {/* :
          <Login />
        } */}
        </div>
          </>
    );
  }));

  
  export default AdminPage