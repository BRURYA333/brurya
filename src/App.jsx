import AdminPage from "./components/admin/AdminPage";
import EventsAdmin from "./components/adminEvents/EventsAdmin";
import MyBackground from "./components/MyBackground";
import ServiceList from "./components/services/ServicesList";

function App() {
 
  return (
    <>
      <MyBackground/>
      <AdminPage/>
      <EventsAdmin></EventsAdmin>
    </>
  )
}

export default App
