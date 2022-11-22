import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Header from "./components/Header";
import Footer from "./components/Footer"

ReactDOM.render(
    <React.StrictMode >
        <Router>
            <Header />
            <Routes >
              <Route  path='/' element={<Home/>}/>
            </Routes>
        </Router>
        <Footer/>
    </React.StrictMode>,
    document.getElementById("root")
);
