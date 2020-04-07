
import {
    ON_CHANGE
} from '../action/actionType'


export default (state = {}, action) => {
    switch (action.type) {
        case ON_CHANGE:
            return{
                ...state
            }
        default:
            return state
    }
}