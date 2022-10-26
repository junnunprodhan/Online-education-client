import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog";
import Courses from "../../components/Courses";
import Faq from "../../components/Faq";
import Home from "../../components/Home";
import Main from "../../layouts/Main";
import Login from '../sharePage/Login'
import Register from '../sharePage/Register'


export const routes=createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
                element: <Courses></Courses>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
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