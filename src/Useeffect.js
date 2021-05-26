import React, { useEffect, useState } from react;
const useEffect = () => {
    const [count, setCount] = useState(1)
    useEffect(() => {
        console.warn(count)


    }, [count == 5])
    return (
        <div><h1>use count ....{count}</h1>
            <button onClick={() => setCount(count + 1)}>update State</button>
        </div>
    );
};

export default useEffect;