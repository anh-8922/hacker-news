//import logo from './logo.svg';
//import './App.css';
import './css/anh.css';
//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/navbar/home";
import Top from "./components/navbar/top.js";
import Latest from './components/navbar/latest';
import Login from './components/navbar/login';
import Error from './components/navbar/error';
import Footer from "./components/footer";
import FetchNews from './components/fetch';


function App() {
  return (
    <>
      <Header/>
      <FetchNews/>
      <Footer/>
    </>
    
    
  );
}

export default App;

//<div className='main'>
      
 //     <FetchNews />
  //    <Footer/>
  //  </div>

