import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
// import response from "./mockData.js";
import './index.css'

const AppLayout = ()  => {
 return (
  <>
  <Header />
  <Body />
  </>
 ) 
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
