import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Components/Root/Root.jsx'
import Home from './Components/Home/Home.jsx'
import Apps from './Components/Apps/Apps.jsx'
import AppsDetails from './Components/AppsDetails/AppsDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        path: '/',
        Component: Home
      },
      {
        path: '/apps',
        loader: () => fetch('datas.json'),
        Component: Apps,
      },
      {
        path: '/apps/:appsId',
        loader: () => fetch('../public/datas.json'),
        Component: AppsDetails,
      },
      {
        path: '/installation'
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
      <App/>
  </RouterProvider>
)
