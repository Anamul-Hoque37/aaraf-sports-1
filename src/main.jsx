import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';
import AddEquipment from './Components/addEquipment.jsx';
import Product from './Components/Product.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import SportEquipment from './Components/SportEquipment.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/add",
        element: <AddEquipment></AddEquipment>,
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
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
