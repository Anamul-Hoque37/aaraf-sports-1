import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';
import AddEquipment from './Components/addEquipment.jsx';
import Product from './Components/Product.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import SportEquipment from './Components/SportEquipment.jsx';
import Login from './Components/Authentication/Login.jsx';
import Registration from './Components/Authentication/Registration.jsx';
import AuthProvider from './Components/Authentication/AuthProvider.jsx';
import MainSection from './Components/MainSection.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/add",
        element: <AddEquipment></AddEquipment>,
      },
      {
        path: "/",
        element: <MainSection></MainSection>,
      },
      {
        path: "/",
        element: <Product></Product>,
        loader: () => fetch('http://localhost:3000/add')
      },
      {
        path: "/sports",
        element: <SportEquipment></SportEquipment>,
        loader: () => fetch('http://localhost:3000/add')
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
