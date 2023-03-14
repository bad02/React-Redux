import { createStore, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer'  //combined in root reducers and imported to store
import logger from 'redux-logger'


const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(logger, thunk)))

export default store

