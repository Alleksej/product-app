import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./components/ProductContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <
    Router >
    <
    ProductProvider >
    <
    App / >
    <
    /ProductProvider> <
    /Router>
);