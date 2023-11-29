import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Dashboard from "../../Layout/Dashboard";
import Users from "../../Pages/Dashboard/Users/Users";
import UserProfile from "../../Pages/UserProfile/UserProfile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UserDetails from "../../Pages/Dashboard/Users/UserDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/user-profile',
                element: <UserProfile></UserProfile>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute>
            <Dashboard></Dashboard>
        </PrivateRoute>,
        children: [
            {
                path: 'manage-users',
                element: <Users></Users>,
            },

            {
                path: 'user-details/:id',
                element: <UserDetails></UserDetails>,
            }
        ]
    }

])

export default router;