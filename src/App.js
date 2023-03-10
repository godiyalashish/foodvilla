import React, { lazy, Suspense } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import { RestaurantList, Restaurants } from "../config";
import {imgLink} from "../config";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
import Login from "./components/Login";

const Mart = lazy(() => import('./components/Mart'))

const App = () => (
    <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
    </Provider>
)

const  appRouter = createBrowserRouter([
    {
        path : "/",
        element: <App />,
        errorElement:<Error />,
        children : [
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/About",
                element:<About/>,
                children : [
                    {
                        path : "profile",
                        element: < Profile/>
                    }
                ]
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantMenu />
            },
            {
                path:"/mart",
                element:
                    <Suspense fallback={<h1>Loding.....</h1>}>
                        <Mart />
                    </Suspense>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/login",
                element:<Login/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
