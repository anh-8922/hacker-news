import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import '../css/anh.css';
import Navbar from "./navbar/navigator";
import Home from "./navbar/home";
import Contact from "./navbar/contact";
import Login from "./navbar/login";
import Category from "./navbar/category";
import './navbar/navbar.css'

export default function Heading() {
    
    return (
        <div id="header">
            <h1><span>DEV</span>&lt;NEWS/&gt;</h1>
            <nav id="navigator">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Navbar />} >
                            <Route index element={<Home />}/>
                            <Route path="/category" element={<Category/>}/>
                            <Route path="/contact" element={<Contact/>}/>
                            <Route path="/login" element={<Login/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
                
            </nav>
        </div>
    )
}