
import {
    ON_CHANGE, ON_SUBMIT
} from './actionType'

import history from '../history'

export const OnChange = (name, value) => {
    return async (dispatch, getState) => {
        let data = {}
        data.name = name;
        data.value = value;
        dispatch({ type: ON_CHANGE, payload: data })
    }
}

export const onSubmit = (name) => {
    return (dispatch)=>{
        console.log(name)
        // this.history.push('/')
        history.push('/userList')
        dispatch({ type: ON_SUBMIT })
    }
}
