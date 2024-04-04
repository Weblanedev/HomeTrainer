import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import LandingPage from './Components/HomePage/LandingPage/LandingPage'
import ContactUs from './Components/ContactUs/ContactUs'
import About from './Components/AboutUsPage/About'
import Blog from './Components/Blog/Blog'
import AllPages from './Components/AllPages/AllPages'
import Checkout from './Components/Checkout/Checkout'


const route = createBrowserRouter([

  {
    path:"/",
    element: <AllPages />,
    children:[
      {
        path:"/",
        element: <LandingPage />,
      },
      {
        path:"/contactUs",
        element: <ContactUs />,
      },
      {
        path:"/aboutUs",
        element: <About />,
      },
      {
        path:"/blog",
        element: <Blog />,
      },
      {
        path:"/checkout",
        element: <Checkout />,
      },
    ]
  },
  
 

])

function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App
