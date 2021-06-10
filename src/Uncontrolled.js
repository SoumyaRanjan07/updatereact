 import React from 'react';
 import { Button } from 'react-bootstrap'
 class Uncontrolled extends React.Component
 {
     constructor()
     {
         super();
        this.name=React.createRef();
        this.password=React.createRef();
     }
     Submit(event)
     {
        event.preventDefault();
        console.warn(this.name.current.value,this.password.current.value);

     }
     render()
     {
         return(
             <div className='App'>
                 <h1>Uncontrolled Component</h1>
                 <form onSubmit={(event)=>{this.Submit(event)}}>
                     <input type='text' placeholder='@Name' ref={this.name}/>
                     <br></br>  <br></br>
                     <input type='password' placeholder='@password' ref={this.password}/>
                     <br></br>  <br></br>
                     <Button type='submit'   >Submit</Button>

                 </form>
             </div>
         )
     }
 }
 export default Uncontrolled;