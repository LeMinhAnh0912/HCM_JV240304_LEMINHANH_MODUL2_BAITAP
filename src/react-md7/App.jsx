import React from "react";
import Button from "react-bootstrap/Button";

import "./App.css";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
// import Button from "@mui/material/Button";
export default function App() {
  return (
    <div>
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}
