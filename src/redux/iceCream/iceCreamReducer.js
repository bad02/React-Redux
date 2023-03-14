import { BUY_ICECREAM } from "./iceCreamTypes"

const initialState = {      //define initial state in reducer
    numOfIceCreams: 20
}


//  define reducer
const iceCreamReducer = (state = initialState, action) =>  {   // reducer accepting prev state and action and returing new state
    switch(action.type) {
      case BUY_ICECREAM: return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1
      }
      default: return state   // will return initail state
    }
}

export default iceCreamReducer;
