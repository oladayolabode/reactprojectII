import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";

const router = createBrowserRouter([
  { path: "/", element: <Home />, index: true },
  { path: "/about", element: <About /> },
]);

export default router;
