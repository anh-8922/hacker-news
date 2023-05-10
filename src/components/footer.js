import React from "react";
import '../css/anh.css';

export default function Footer() {
    return <>
        <div className="foot-links">
            <a href='#'>About project</a> 
            <a href='https://github.com/HackerNews/API'>API</a> 
            <a href='https://www.ycombinator.com/legal/'>Legal</a> 
            <a href='https://www.ycombinator.com/apply/'>Apply to YC</a> 
            <a href='mailto:hn@ycombinator.com'>Contact</a>
        </div>
    </>
}