import { buy_pizza,cancel_pizza } from "./pizzaactiontypes"

let buypizz = (value)=>{
    return(
        {
            type:buy_pizza,
            payload:{
                info:value
            }
        }
    )
}
let cancelPizz = ()=>{
    return({
        type: cancel_pizza,
        payload:{
            info: 'removing pizza'
        }
    })
}
export {buypizz,cancelPizz};