import {useState} from 'react';
const useCounter = (initialValue,a,b) => {
    const [ counter, setCounter ] = useState(initialValue);
    const increament = (amout) => {
        setCounter(c => c + amout);


    }
    const decreament = () => {
        setCounter(c => c - b);
        

    }
    return [counter, increament,decreament]
}
export default useCounter