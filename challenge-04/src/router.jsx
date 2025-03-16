import { createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import NotFound from "./Components/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index : true, element: <Home /> },
      { path: "/about", element: <About /> },
    ],
  },
  { path: "*", element: <NotFound /> }, 
]);

export default router;
