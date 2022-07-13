import { buy_chicken, remove_chiken } from "./chikenactiontype"

let buyChiken = ()=>{
    return {
        type: buy_chicken,
        payload:{
            info:'purchase chicken'
        }
    }
}
let removeChiken = ()=>{
    return {
        type: remove_chiken,
        payload:{
            info:'remove chiken'
        }
    }
}
export {buyChiken,removeChiken};