import React from "react";
import './login.css';
import Heading from "../heading";

export default function Login() {
    return (
        
        <>
        <div className='main'>
      <div>
        <Heading />
        </div>
        </div>


        <div className="login-page">
            <h1>Login</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <button type="submit">Log In</button>
      </form>


        </div>
        </>
    )
}