//import logo from './logo.svg';
//import './App.css';
import './css/anh.css';
import Heading from './components/heading.js';
import FetchNews from './components/fetch.js';

function App() {
  return (
      <div className='main'>
      <div>
        <Heading />
        <FetchNews />
        
      </div>
      </div>
  );
}

export default App;
