import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Login } from './pages/Login.jsx'
import { Dashboard } from './pages/Dashboard.jsx'
import { ProtectedRoute } from './protected_route/ProtectedRoute.jsx'
import { Shopwisestockreport } from './reports/stockReport/shopWiseStockReport/Shopwisestockreport.jsx'
import { ShopDetails } from './reports/shopdetails/ShopDetails.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },

  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "stock/shop-wise",
        element: <Shopwisestockreport />
      },
      {
        path: "other/shoplist",
        element: <ShopDetails/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

