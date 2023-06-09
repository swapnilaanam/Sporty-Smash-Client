import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/'
            },
            {
                path: '/login'
            },
            {
                path: 'register'
            }
        ]
    }
])