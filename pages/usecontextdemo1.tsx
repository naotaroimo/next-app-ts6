import { useContext } from 'react';
// import { MyNumberContext, MyUserContext } from "../UserContext";

const UseContextDemo1 = () => {

    const msg = useContext(MyUserContext);
    const yournum = useContext(MyNumberContext);

    return (
        <div>
            {msg} your lucky number is  {yournum}
        </div>
    );
}

export default UseContextDemo1