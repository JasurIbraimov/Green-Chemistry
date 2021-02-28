import {SET_PROPERTIES} from '../action-types/properties.action.types'
const INITIAL_STATE = {
    properties: []
}
const propertiesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_PROPERTIES: 
            return {
                ...state, 
                properties: action.payload
            }
        default: 
            return state
    }
}

export default propertiesReducer