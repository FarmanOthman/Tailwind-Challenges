import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import './App.css'

const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/about', element: <About />},
  {path: '/contact', element: <Contact />},
])

function App() {
  return <RouterProvider router={router} />
      
  
}

export default App
