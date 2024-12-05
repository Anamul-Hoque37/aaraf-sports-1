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
import MyEquipment from './Components/MyEquipment.jsx';
import PrivateRoute from './Components/PrivateRouter.jsx';
import PrivateRouter from './Components/PrivateRouter.jsx';
import ViewDetails from './Components/ViewDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/add",
        element: <PrivateRouter>
          <AddEquipment></AddEquipment>
        </PrivateRouter>,
      },
      {
        path: "/my",
        element: <PrivateRouter>
          <MyEquipment></MyEquipment>
        </PrivateRouter>,
      },
      {
        path: "/",
        element: <MainSection></MainSection>,
      },
      {
        path: "/product",
        element: <Product></Product>,
      },
      {
        path: "/product/:Id",
        element: <PrivateRouter>
          <ViewDetails></ViewDetails>
        </PrivateRouter>,
        loader: () => fetch('http://localhost:3000/add/')
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
