import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import '../css/anh.css';
import Navbar from "./navbar/navigator";
import Home from "./navbar/home";
import Contact from "./navbar/contact";
import Login from "./navbar/login";
import Setting from "./navbar/setting";


export default function Heading() {
    
    return (
        <div id="header">
            <h1><span>DEV</span>&lt;NEWS/&gt;</h1>
            <nav>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Navbar />} >
                            <Route index element={<Home />}/>
                            <Route path="/setting" element={<Setting/>}/>
                            <Route path="/contact" element={<Contact/>}/>
                            <Route path="/login" element={<Login/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
                
            </nav>
        </div>
    )
}