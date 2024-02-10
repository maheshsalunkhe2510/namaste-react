import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom"
import Header from "./component/Header"
import Body from "./component/Body"
import ContactUs from "./component/ContactUs";
import Error from "./component/Error";
import Restaurant from "./component/Restaurant";



import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Grocery = lazy(() => import("./component/Grocery"));
const About = lazy(() => import("./component/About"))
const AppLayout = () => {
        return <div className="app">
                <Header />
                <Outlet />
        </div>
}

let router = createBrowserRouter(
        [{
                path: "/",
                element: <AppLayout />,
                children: [
                        {
                                path: "/",
                                element: <Body />,
                                errorElement: <Error />
                        },
                        {
                                path: "/about",
                                element: <Suspense fallback={<h1>Loading.....</h1>}><About /></Suspense>,
                                errorElement: <Error />
                        },
                        {
                                path: "/contactus",
                                element: <ContactUs />,
                                errorElement: <Error />
                        },
                        {
                                path: "/restaurant/:resId",
                                element: <Restaurant />,
                                errorElement: <Error />
                        },
                        {
                                path: "/grocery/",
                                element: <Suspense fallback={<h1>Loading.....</h1>}><Grocery /></Suspense>,
                                errorElement: <Error />
                        },
                ],
                errorElement: <Error />
        }

        ]
);
const rootElement = ReactDOM.createRoot(document.getElementById("root"));
console.log(router);
rootElement.render(<RouterProvider router={router} />);
//rootElement.render(<AppLayout />);