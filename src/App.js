
import './App.css';
// import logo from './logo.svg';
// import Homec from "./Home";
// import Profile from "./Profile"
// import State from "./State";
// import Event from "./Event"
import Lifecycle from "./Lifecycle"
import React from 'react'

class App extends React.Component {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         {/* <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a> */

  //         }
  //           < Homec/>
  //            <Profile text="Hello"/>
  //           <State />
  //           <Event/>


  //       </header>
  //     </div>
  //   );
  // }


  //lifecycle
  constructor() {
    super()
    this.state = {toggle:true}
  }

  render() {
    return (
      <div>
        <h1>React:will unmount</h1>
        {
          this.state.toggle?
            <Lifecycle />:null
        }
        <button onClick={()=>(this.setState({toggle:!this.state.toggle }))}>Delete User</button>
      </div>
    );
  }
}
export default App;
