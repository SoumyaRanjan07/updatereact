
import './App.css';
// import Lifecycle from "./Lifecycle"
import logo from './logo.svg';
// import Homec from "./Home";
// import Profile from "./Profile"
// import State from "./State";
// import Event from "./Event"
import Forms from "./Forms"
import React, { } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome To React Js
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
        {/* < Homec/>
           <Profile text="Hello"/>
          <State />
          <Event/> */}
        <Forms />
      </header>
    </div>
  );
}

export default App;
  //lifecycle
//   constructor() {
//     super()
//     this.state = { toggle: true }
//   }
//   render() {
//     return (
//       <div>
//         <h1>React:will unmount</h1>
//         {
//           this.state.toggle ?
//             <Lifecycle /> : null
//         }
//         <button onClick={() => (this.setState({ toggle: !this.state.toggle }))}>Delete User</button>
//       </div>
//     );
//   }
// }

//hooks
// function App()
// {
//   const[count,setCount]=useState(100)
//   return(
//     <div><h1>Hooks count :{count}</h1>

//     <button onClick={()=>{setCount(count+1)}}>Increment</button>
//   </div>)
// }

