
// for combining both reducers
import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer

})  //combining reducers


export default rootReducer    // combining both reducers in root reducer