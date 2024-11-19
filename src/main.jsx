import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './component/Home.jsx'
import Header from './component/Header.jsx'
import Footer from './component/Footer.jsx'
import About from './component/About.jsx'
import Contact from './component/Contact.jsx'
import Layout from './layout.jsx'
import IntroPage from './component/IntroPage.jsx'
// import LoginPage from './component/Login.jsx'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: "",
          element: <IntroPage />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "Home",
          element: <Home />
        },
        // {
        //   path: " LoginPage ",
        //   element: <LoginPage />
        // }

      ]
    }
  ])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
