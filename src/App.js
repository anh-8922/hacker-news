//import logo from './logo.svg';
//import './App.css';
import './css/anh.css';
import Heading from './components/heading.js';
import FetchNews from './components/fetch.js';
import Footer from './components/footer.js';

function App() {
  return (
    <div className='main'>
      <Heading />
      <FetchNews />
      <Footer/>
    </div>
  );
}

export default App;
