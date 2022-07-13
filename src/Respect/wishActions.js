import { say_wish } from "./wishActionTypes"

let sayWish = (message)=> {
    return {
        type:say_wish,
        payload:{info:message}
    }
}
export {sayWish}