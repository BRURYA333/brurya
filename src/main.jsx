import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import User from './components/user/user.jsx';
import ServiceList from './components/services/ServicesList.jsx';
import MeetingList from './components/meeting/MeetingList.jsx';
import AdminHome from './components/admin/AdminHome.jsx';
import Login from './components/admin/Login.jsx';
import AdminPage from './components/admin/AdminPage.jsx';
import BusinessDetailsComponent from './components/admin/BusinessDetailsComponent.jsx';
import AddService from './components/services/AddService.jsx';



const router = createBrowserRouter([

  {
    path: '/',
    element: <User />,
    // errorElement:<div>error services list !</div>,

  },

  {
    path: '/admin',
    element: <AdminPage />,
    // errorElement: <div>error login</div>,
    children: [

      {
        path: 'services',
        element: <ServiceList />,
        // errorElement: <div>error ServicesList not found</div>
      },

      {
        path: 'meeting',
        element: <MeetingList />,
        // errorElement: <div>error MeetingList not found</div>
      },
      {
        path: 'edit',
        element: <BusinessDetailsComponent />
        // errorElement: <div>error business details not found</div>}
      },


      {
        path: 'addService',
        element: <AddService />,
        // errorElement: <div>error business details not found</div>
      }
    ]
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />
  // <React.StrictMode>
  // </React.StrictMode>,
)


