import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header.js";
import Body from "./src/components/Body.js";
import Error from "./src/components/Error.js";
import Contact from "./src/components/Contact.js";
import About from "./src/components/About.js";
import RestroDetail from "./src/components/RestroDetail.js";
import Cart from "./src/components/cart.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
import UserDetails from "./utils/userContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";

const AppLayout = () => {
  const [userName, setUserName] = useState("Advik");
  useEffect(() => {
    // setTimeout(() => {
    //     setUserName('Update Singh');
    // }, 3000)
    setUserName("Update Singh");
  }, []);
  return (
    <>
      <div className="flex-col">
        <Provider store={appStore}>
          <UserDetails.Provider value={{ loggedInUser: userName, setUserName }}>
            <div className="">
              <Header />
            </div>
            <div>
              <Outlet />
            </div>
          </UserDetails.Provider>
        </Provider>
      </div>
    </>
  );
};

const Grocery = lazy(() => {
  return import("./src/components/Grocery.js");
});

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:id",
        element: <RestroDetail />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loding...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
