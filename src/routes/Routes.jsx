// All routes will stay here
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from '../layouts/root'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
]);

export default router;