/* eslint-disable default-case */

import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"



const initialState = {      //define initial state in reducer
    loading: false,
    users: [],
    error: ''
}


//  define reducer
const reducer = (state = initialState, action) => {   // reducer accepting prev state and action and returing new state
    switch (action.type) {
        case FETCH_USERS_REQUEST: return {
            ...state,
            loading: true
        }

        case FETCH_USERS_SUCCESS: return {
            ...state,
            loading: false,
            users: action.payload,
            error: ''
        }

        case FETCH_USERS_FAILURE: return {
            ...state,
            loading: false,
            users: action.payload,
            error: ''
        }

    }
}

export default reducer;


