import React, {   useState } from 'react';
import useTitle from './useTitle'
const Customhook = () => {
    const [count, setCount] = useState(0)
    useTitle(count)
    return (<div>
        <h1>Custom Hook</h1>
        <button onClick={() => setCount(count + 1)}>Click</button></div>
    )


}
export default Customhook;