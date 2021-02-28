
import {CHANGE_POPUP_VISIBILITY, REMOVE_SOLVENT, ADD_SOLVENT} from '../action-types/solvents.action.types'
const INITIAL_STATE = {
    popup: false,
    solvents: []
}
const solventsReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_POPUP_VISIBILITY: 
            return {
                ...state, 
                popup: action.payload
            }
        case ADD_SOLVENT: 
            return {
                ...state, 
                solvents: [...state.solvents, action.payload]
            }
        case REMOVE_SOLVENT: 
            return {
                ...state, 
                solvents: [...state.solvents.filter(solvent => solvent.id !== action.payload)]
            }
        default:
            return state
    }
}

export default solventsReducer