import React, { useCallback, useMemo, useState } from 'react'
import Button from './Button';
import Count from './Count';
import Titile from './Titile';
import useCounter from './useCounter';
import useInput from './useInput';

function ParentComponent() {
  const [firstName, bindFirstName ] = useInput('');
  const [lasttName, bindLastName ] = useInput('')
  // const [counter, increament, decreament] = useCounter(10,20,5);
    // const [age, setAge] = useState(1);
    // const [salary, setSalary] = useState(10000);
    // const incrementSalary = useCallback(() => {
    //     setSalary(salary + 1000);
    // },[salary]);
    // const incrementAge = useCallback(() => {
    //     setAge(age + 1);
    // },[age]);
    // const [counter1, setCounter1] = useState(1);
    // const [counter2, setCounter2] = useState(10);
    // const isEven = useMemo(() => {
    //   console.log('this is even function......')
    //   return counter1 %2 === 0;
    // },[counter1] );
  return (
    <div> 
        {firstName} and {lasttName}
        {/* <Titile/>
        <Count text='age' count = {age}/>
        <Button handleClick={incrementAge}>incrementAge</Button>
        <Count text='salary' count = {salary}/>
        <Button handleClick={incrementSalary}>incrementSalary- </Button> */}
        {/* <div>tell me {isEven ? 'even': 'odd'}</div>
        <button onClick={()=>setCounter1(c => c+ 1)} >counter1 -{counter1}</button>
        <button onClick={()=>setCounter2(c => c+ 1)} >counter2 -{counter2}</button> */}
        {/* <button onClick={()=>increament(10)} >counter -{counter}</button>
        <button onClick={decreament} >counter -{counter}</button> */}
        <div>
          <input type='text' {...bindFirstName} />
        </div>
        <div>
          <input type='text' {...bindLastName} />
        </div>
   </div>
  )
}

export default ParentComponent