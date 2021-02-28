import {CHANGE_POPUP_VISIBILITY, REMOVE_REAGENT, ADD_REAGENT} from '../action-types/reagents.action.types'
const INITIAL_STATE = {
    popup: false,
    reagents: []
}
const reagentsReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_POPUP_VISIBILITY: 
            return {
                ...state, 
                popup: action.payload
            }
        case ADD_REAGENT: 
            return {
                ...state, 
                reagents: [...state.reagents, action.payload]
            }
        case REMOVE_REAGENT: 
            return {
                ...state, 
                reagents: [...state.reagents.filter(reagent => reagent.id !== action.payload)]
            }
        default:
            return state
    }
}

export default reagentsReducer