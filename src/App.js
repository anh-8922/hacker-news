//import logo from './logo.svg';
//import './App.css';
import './css/anh.css';
//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/navbar/home";
import Top from "./components/navbar/top.js";
import Latest from './components/navbar/latest';
import Best from './components/navbar/best';
import Error from './components/navbar/error';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="top" element={<Top />} />
          <Route path="latest" element={<Latest />} />
          <Route path="best" element={<Best />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

//<div className='main'>
      
 //     <FetchNews />
  //    <Footer/>
  //  </div>
