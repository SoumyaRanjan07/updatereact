import React from 'react'
import  "./StyleCus.css"
export default function Style() {
    const h1 = {
        color: "green", fontSize: "50px"
    }
    const h2 = {
         color: 'red', fontSize: "60px"
 }


return (
    <div>
        <h1 style={h1}>React Global Style</h1>
        <h2 style={h2}>React Inline Style</h2>
    </div>)
 }
