import { DEC_COUNT, INC_COUNT } from "./PshycoActionType"

let increaseCount = (idNumber,questionTitle,questionAnswer,countValue)=>{
    return({
        type:INC_COUNT,
        payload:{
            info:countValue,
            id:idNumber,
            title:questionTitle,
            answer:questionAnswer
        }
    })
}
let decreaseCount = (idNumber,questionTitle,questionAnswer,countValue)=>{
    return({
        type:DEC_COUNT,
        payload:{
            info:countValue
        }
    })
}
let setDefault = ()=>{
    return {type:'set_home'}
}
let setPrevious =(idNumber,counter,previousCount) =>{
    return {
        type:'set_previous',
        payload:{
            id:idNumber,
            counter:counter,
            previousCount:previousCount
        }
    }
}
let setUser = (username,email,gender)=>{
    return {
        type:'set_user',
        payload:{
            username:username,
            email:email,
            gender:gender,
            time: new Date()
        }
    }
}
export {decreaseCount,increaseCount,setDefault,setPrevious , setUser};