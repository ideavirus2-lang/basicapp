import logo from './logo.svg';
import './App.css';
import { AiFillAccountBook } from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='bg-slate-500'>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AiFillAccountBook/>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
