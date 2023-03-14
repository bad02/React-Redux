import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"
import axios from "axios"


export const fetchUsersRequest = () => {    //action creator: a function that returs an object 
    return {
        type: FETCH_USERS_REQUEST,  // property type

    }
}


export const fetchUsersSuccess = users => {    //action creator: a function that returs an object 
    return {
        type: FETCH_USERS_SUCCESS,  // property type
        payload: users   //payload property (sends additional info to reducer)

    }
}

export const fetchUsersFailure = error => {    //action creator: a function that returs an object 
    return {
        type: FETCH_USERS_FAILURE,  // property type
        payload: error   //payload property (sends additional info to reducer)

    }
}



export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')   // api call
            .then(response => {
                const users = response.data  // if success then we get data
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                // eslint-disable-next-line no-unused-vars
                const errorMsg = error.message  // error catching
                dispatch(fetchUsersFailure(error))
            })
    }
}
