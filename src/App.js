import logo from './logo.svg';
import './App.css';
import Homec from "./Home";
import Profile from "./Profile"
import State from "./State";
import Event from "./Event"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */
      
        }
          < Homec/>
           <Profile text="Hello"/>
          <State />
          <Event/>


      </header>
    </div>
  );
}

export default App;
