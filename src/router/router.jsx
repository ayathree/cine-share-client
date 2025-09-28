import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root";
import Error from "../pages/Error";
import Home from "../pages/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {},
    ]
  },
]);

export default router;