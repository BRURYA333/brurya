import { observer } from "mobx-react"
import { Outlet, Link } from "react-router-dom";
import { Button, Fab } from "@mui/material";
import AdminHome from "./AdminHome";
import AdminStore from "../../store/AdminStore";
import Login from "./Login";

const AdminPage = (observer(() => {

  return (
    <>
      {AdminStore.isLogin ?
        <AdminHome></AdminHome> :
        <Login />
      }
    </>
  );
}));


export default AdminPage