import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import User from './components/user/user.jsx';
import ServiceList from './components/services/ServicesList.jsx';
import MeetingList from './components/meeting/MeetingList.jsx';
import AdminHome from './components/admin/AdminHome.jsx';
import Login from './components/admin/Login.jsx';


const router = createBrowserRouter([

  {
    path: '/',
    element: <User/>,
    errorElement:<div>error DesignWorksConstruction</div>,

  },
 
  {
    path: '/admin',
    element: <Login/>,
    errorElement: <div>error login</div>,
    children: [
   
      {
        path: 'services',
        element: <ServiceList/>,
        errorElement: <div>error ServicesList not found</div>
      },

      {
        path: 'meeting',
        element:<MeetingList/>,
        errorElement: <div>error MeetingList not found</div>
      }
    ]
  }
  
])
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <RouterProvider router={router}/>
   
  </React.StrictMode>,
)

