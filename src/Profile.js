import React from 'react';

//class component(1)

// export default class Profile extends React.Component
// {
//     constructor()
//     {
//         super()
//     }
//     componentDidMount()
//     {
//         console.warn('Sucessfully Called')
//     }
//     render()
//     {
//         return(
//             <div><h1> Profile Component</h1></div>
//         )
//     }
// }
//function component &props

export default function Profile(Props) {
    const red = () => {
        alert('red function called ')
    }
    return (
        <div>
            <h1 onClick={red}>{Props.text}</h1>
        </div>
    )
}