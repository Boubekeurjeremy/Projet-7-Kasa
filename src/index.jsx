import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import "./index.css";

ReactDOM.render(
    <React.StrictMode className="essai">
        <Router>
            <Header />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
