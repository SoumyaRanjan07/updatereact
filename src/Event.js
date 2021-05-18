import React from 'react'
export default function Event()
{
    function test()
    {
    alert('testfun')
    }

    return(
        <div>
            <h1>Event</h1>
            <button onClick={test}>Click Me </button>
        </div>
    )
}
