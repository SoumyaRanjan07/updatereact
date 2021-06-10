
import './App.css';
// import Lifecycle from "./Lifecycle"
import logo from './logo.svg';
// import Homec from "./Home";
import Profile from "./Profile"
// import State from "./State";
import Event from "./Event"
import Forms from "./Forms"
import React, { Suspense } from 'react';
// import Style from "./Style"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// import Uploadfile from './Uploadfile';
// import Typechecking from './Typechecking';
// import Api from "./Api"
// import Ref from "./Ref"
// import Memo2 from "./Memo2"
// import Uncontrolled from './Uncontrolled';
// import Controlled from './Controlled';
import Customhook from './Customhook'


// const Lazy1 = lazy(() => import("./Lazy1"))
// const Lazy2 = lazy(() => import("./Lazy2"))


function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome To React Js
        </p>
        {/* < Homec/>
           <Profile text="Hello"/>
          <State />
          <Event/> */}

        <Router>
          <Suspense fallback={<div>Please Wait......Loading Router</div>}>
            <table><tbody>
              <td><Link to="">Profile</Link></td>
              <td><Link to="/Event">Event</Link></td>
              <td><Link to="/Forms">Forms</Link></td>
            </tbody></table>
            <Route path="" component={Profile} />
            <Route path="/Event" component={Event} />
            <Route path="/Forms" component={Forms} />
          </Suspense>
        </Router>

        <Customhook />

        {/* <Typechecking age={20} /> */}

        {/* <Style/>
        <Forms /> */}

        {/* <Memo2/>
        <Ref/> */}

        {/* <Api/> */}

        {/* <Controlled/>
        <Uncontrolled/> */}



        {/* <Suspense fallback={<div>Please Wait......Loading Lazy1</div>}>
          <Lazy1 />
          
        </Suspense>
        <Suspense fallback={<div>Please Wait......Loading Lazy2</div>}>
        <Lazy2 />
        </Suspense><br></br>
         */}

        {/* <Uploadfile/> */}

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

