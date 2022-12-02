import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Error from "./pages/Error";
import Housing from "./pages/Housing";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/housing/:id" element={<Housing />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
        <Footer />
    </React.StrictMode>
);
