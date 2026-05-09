import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import { Login } from './pages/Login.jsx'
import { Dashboard } from './pages/Dashboard.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Login></Login>
  },
  {
    path:"/dashboard",
    element:<Dashboard/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
