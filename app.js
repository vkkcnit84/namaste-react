import React, { Suspense, lazy} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Error from "./components/Error.js";
import Contact from "./components/Contact.js";
import About from "./components/About.js";
import RestroDetail from "./components/RestroDetail.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './index.css'

const AppLayout = ()  => {
 return (
  <>
  <Header />
  <Outlet />
  </>
 ) 
}

const Grocery = lazy(() => {
   return import('./components/Grocery.js');
});

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurant/:id",
                element: <RestroDetail/>
            },
            {
                path: "/grocery",
                element: (
                <Suspense fallback={<h1>Loding...</h1>}><Grocery/></Suspense>
                )
            }
        ]
    },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
