import { createBrowserRouter } from "react-router-dom";
import { About, AdminDashboard, Home } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { element: <Home />, index: true },
      { path: "about", element: <About /> },
      {
        path: "admin",
        children: [{ path: "dashbaord", element: <AdminDashboard /> }],
      },
    ],
  },
]);

export default router;
