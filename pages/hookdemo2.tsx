import { useReducer } from 'react';

//stateの初期値
const initalState: number = 0;

//受け付けるactionの型
type CountAction = {
    type: string;
    payload: number;
};

const reducer = (state: number, action: CountAction) => {
    switch (action.type) {
        case 'count/increment':
            return (state + 1 + action.payload);
        case 'count/decrement':
            return (state - 1 + action.payload);
        default:
            return state;
    }
}

const HookDemo2 = () => {
    //const [count, setCount] = useState(0);

    //reducer相当の内容を埋め込んで記述
    const [count, dispatch] = useReducer(
        // (state: number, action: CountAction) => {
        //     switch (action.type) {
        //         case 'count/increment':
        //             return (state + 1 + action.payload);
        //         case 'count/decrement':
        //             return (state - 1 + action.payload);
        //         default:
        //             return state;
        //     }
        // },
        reducer,
        initalState
    );

    function handleIncrement() {
        //setCount(count+1);
        dispatch(
            {
                type: 'count/increment',
                payload: 0
            }
        );
    }

    function handleDecrement() {
        //setCount(count-1);
        dispatch(
            {
                type: 'count/decrement',
                payload: 0
            }
        );
    }

    return (
        <div>
            <p>Count :{count}</p>
            <button onClick={handleIncrement}> increment </button>
            <button onClick={handleDecrement}> decrement </button>
        </div>
    );
}

export default HookDemo2