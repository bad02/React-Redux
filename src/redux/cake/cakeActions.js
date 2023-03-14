import { BUY_CAKE } from "./cakeTypes"


export const buyCake = (number = 1) => {    //action creator: a function that returs an object 
    return{
        type: 'BUY_CAKE',  // property type
        payload: number  //payload property (sends additional info to reducer)
    }
}

