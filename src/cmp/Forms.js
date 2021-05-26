 import React from 'react'
 export default class Forms extends React.Component
 {
     constructor()
     {
         super()
         this.state={
             
         }
     }
     render()
     {
         return(
             <div><h1>
                 Hello  this is my 1st form</h1>
                 <input type='text' name='user' onChange={}/>
                 <br></br>
                 <input type='pwd' name='pwd' onChange={}/>
                 <br></br>
                 <button></button>
                 </div>
         )
     }
 } 