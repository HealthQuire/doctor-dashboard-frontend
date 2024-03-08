import {createBrowserRouter} from "react-router-dom"
import RouterWrapper from "./components/router-wrapper/router-wrapper"
import LoginPage from './pages/login-page/login-page.tsx';
import HomePage from './pages/home-page/home-page.tsx';

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage/>
    },
    {
        path: "/",
        element: <RouterWrapper />,
        children: [
            {
                path: "",
                element: <HomePage />
            },
            {
                path: "documentation",
                element: "Sorry... Not implemented yet"
            }
        ]
    }
])

export default router
