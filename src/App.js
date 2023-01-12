import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/header";
import Body from "./Components/body"

function AppLayout() {
  return(
  <>
    <Header />
    <Body/>
  </>)
}

var reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<AppLayout />);
