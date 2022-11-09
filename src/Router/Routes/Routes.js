import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import ServicesAll from "../../Pages/Home/ServicesAll/ServicesAll";
import ServicesDetails from "../../Pages/Home/ServicesDetails/ServicesDetails";

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
                path: '/services',
                element: <ServicesAll></ServicesAll>
            },
            {
                path: '/services/:id',
                element: <ServicesDetails></ServicesDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/servicesAll/${params.id}`)
            },
        ]
    }
])

export default router;