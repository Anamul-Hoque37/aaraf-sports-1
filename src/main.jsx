import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';
import AddEquipment from './Components/AddEquipment.jsx';
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
import Update from './Components/Update.jsx';

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
        path: "/my/:userEmail",
        loader: ({params}) => fetch(`https://b10-a10-server-side-anamul-hoque37.vercel.app/addd/${params.userEmail}`),
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
        path: "/details/:id",
        loader: ({params}) => fetch(`https://b10-a10-server-side-anamul-hoque37.vercel.app/add/${params.id}`),
        element: <PrivateRouter>
          <ViewDetails></ViewDetails>
        </PrivateRouter>,
      },
      {
        path: "/sports",
        element: <SportEquipment></SportEquipment>,
        loader: () => fetch('https://b10-a10-server-side-anamul-hoque37.vercel.app/add'),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/update/:id",
        loader: ({params}) => fetch(`https://b10-a10-server-side-anamul-hoque37.vercel.app/add/${params.id}`),
        element: <Update></Update>
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
