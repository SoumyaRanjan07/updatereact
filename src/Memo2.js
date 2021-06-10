import React, { useState } from "react"
import Memo1 from "./Memo1"
const App = () => {
    const [count, setCount] = useState(0)
    const [data, setData] = useState(100)
    return (
        <div>Memo with React{count}
            <Memo1 />

            <button onClick={()=>setCount(count+1)}> Count</button>
            
            <button onClick={()=>setData(data+1)}> Data</button>)
        </div>
    )
}
  

export default Memo2;
