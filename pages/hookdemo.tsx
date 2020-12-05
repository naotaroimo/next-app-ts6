import { useState } from 'react';

const HookDemo = () => {

    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount(count + 1);
    }

    function handleDecrement() {
        setCount(count - 1);
    }

    return (
        <div>
            <p>Count :{count}</p>
            <button onClick={handleIncrement}> increment </button>
            <button onClick={handleDecrement}> decrement </button>
        </div>
    );
}

export default HookDemo
