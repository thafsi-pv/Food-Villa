import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/header";
import Body from "./Components/body";
import Footer from "./Components/footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import Error from "./Components/Error";
import Help from "./Components/Help";
import RestaurentMenu from "./Components/RestaurentMenu";
import Profile from "./Components/Profile"
import Offers from "./Components/Offers";
import UserContext from "./Utils/UserContext";
import store from "./Utils/Store";
import { Provider } from "react-redux";
import CartList from "./Components/CartList";
import LogIn from "./Components/LogIn";

function AppLayout() {
  const [user,setUser]=useState({name:"Thafsi",email:"pvthafsi@gmail.com"})
  return (
    <Provider store={store}>
    <UserContext.Provider value={{user:user,setuser:setUser}}>
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
    </Provider>
  );
}

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
        element: <AboutUs />,
        children:[
          {
            path:"profile",
            element:<Profile/>
          }
        ]
      },
      { path: "/help", element: <Help /> },
      { path: "/restaurent/:resId", element: <RestaurentMenu /> },
      {path:"/offers",element:<Offers/>},
      {path:"/cart",element:<CartList/>},
      {path:"/login",element:<LogIn/>}
    ],
  },
]);

var reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<RouterProvider router={appRouter} />);
