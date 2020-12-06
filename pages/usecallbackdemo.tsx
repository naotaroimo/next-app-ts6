import { useCallback, useState } from 'react';
import MyList from '../components/MyList';

const UseCallBackDemo = () => {
    const [number, setNumber] = useState<number>(1);
    const [dark, setDark] = useState<boolean>(false);

    //<number[]>を返す関数
    const getItems = useCallback(
        (value: number) => {
            return [number + value, number + 1 + value, number + 2 + value];
        }
        , [number]
    );

    const theme = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    };

    return (
        <div style={theme}>
            <input
                type="number"
                value={number}
                onChange={e => setNumber(parseInt(e.target.value))}
            />

            <button onClick={() => setDark(prevDark => !prevDark)}> toggle theme </button>
            <MyList getItems={getItems} />
        </div>
    );
}

export default UseCallBackDemo