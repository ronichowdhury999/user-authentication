
import { createBrowserRouter } from "react-router-dom"
import Home from "./Home"
import Root from "./Root"
import Login from "./Login"
import Register from "./Register"
import Orders from "./Orders"
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import Profile from "./Profile"
import Dashboard from "./Dashboard"


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/orders',
                element: <PrivateRoute>
                    <Orders />
                </PrivateRoute>
            },
            {
                path: '/profile',
                element: <PrivateRoute>
                    <Profile />
                </PrivateRoute>
            },
            {
                path: '/dashboard',
                element: <PrivateRoute>
                    <Dashboard />
                </PrivateRoute>
            }
        ]
    }
])

export default router