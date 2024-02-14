import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom"
import Header from "./component/Header"
import Body from "./component/Body"
import ContactUs from "./component/ContactUs";
import Error from "./component/Error";
import Restaurant from "./component/Restaurant";
import UserContext from "./utils/UserContext";
import { useEffect, useState } from "react";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Grocery = lazy(() => import("./component/Grocery"));
const About = lazy(() => import("./component/About"));


const AppLayout = () => {
        const [userName, setUserName] = useState(null);
        useEffect(() => {
                setUserName("Maheesh Salunkhe");
        }, []);

        return (
                <div className="app">
                        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                                <Header />
                                <Outlet />
                        </UserContext.Provider>
                </div >


        )
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