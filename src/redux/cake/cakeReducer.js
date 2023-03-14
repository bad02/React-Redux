import { BUY_CAKE } from "./cakeTypes"

const initialState = {      //define initial state in reducer
    numOfCakes: 10
}


//  define reducer
const cakeReducer = (state = initialState,action) =>  {   // reducer accepting prev state and action and returing new state
    switch(action.type) {
      case BUY_CAKE: return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload  // payload is properties of action
      }
      default: return state   // will return initail state
    }
}

export default cakeReducer;


