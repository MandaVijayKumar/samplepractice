import React, {useState,useCallback} from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

function Optimize() {
    let [age, setAge] = useState(10);
    let [salary, setSalary] = useState(1000);
    let incrementage = () => {
        setAge(age + 1);
    }
    let incrementsalary = useCallback(() => {
       
            setSalary(salary + 100);
        
    },[salary]);
  return (
    <div>
        <Title/>
        <Count text='age' value={age}/>
        <Button handlerclick = {incrementage}>inc age</Button>
        <Count text ='salry' value={salary}/>
        <Button handlerclick = {incrementsalary}>inc salary</Button>
    </div>
  )
}

export default Optimize