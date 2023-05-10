import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import '../css/anh.css';
import Navbar from "./navbar/navigator";
import Home from "./navbar/home";
import Latest from "./navbar/latest";
import Best from "./navbar/best";
import Top from "./navbar/top";
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
                            <Route path="/top" element={<Top/>}/>
                            <Route path="/latest" element={<Latest/>}/>
                            <Route path="/best" element={<Best/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
                
            </nav>
        </div>
    )
}