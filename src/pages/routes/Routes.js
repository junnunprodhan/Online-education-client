import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog";
import CourseDetails from "../../components/CourseDetails";
import Courses from "../../components/Courses";
import ErrorPage from "../../components/ErrorPage";
import Faq from "../../components/Faq";
import Home from "../../components/Home";
import Pricing from "../../components/Pricing";
import Main from "../../layouts/Main";
import Login from '../sharePage/Login'
import Register from '../sharePage/Register'
import PrivateRoute from "./PrivateRoute";


export const routes=createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                
            },
           
            {
                path: '/login',
                element: <Login></Login>
            },
           
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://onlilne-education-server.vercel.app/allCourses')
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({params}) => fetch(`https://onlilne-education-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/pricing',
                element:<PrivateRoute><Pricing></Pricing></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
           
        ]
    }
])