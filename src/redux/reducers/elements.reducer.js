import {ELEMENTS_DATA} from '../../data/elements.data'
import { ADD_ELEMENT, REMOVE_ELEMENT, RESET_SELECTED_ELEMENTS } from '../action-types/elements.action.types'
const INITIAL_STATE = {
    elementsData: ELEMENTS_DATA,
    selectedElements: []
}
const checkSelected = (element, selectedElements) => {
    const elementIndex = selectedElements.findIndex((elem) => elem.atom_number === element.atom_number)
    if (elementIndex === -1) {
        return [...selectedElements, element]
    } else {
        selectedElements[elementIndex].count += 1
        return [...selectedElements]
    }

}
const checkRemoved = (atomNumber, selectedElements) => {
    const element = selectedElements.find((elem) => elem.atom_number === atomNumber)
    if (element.count > 1) {
        element.count -= 1
        return [...selectedElements]
    } else {
        return [...selectedElements.filter(el => el.atom_number !== element.atom_number)]
    }
}
const elementsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_ELEMENT: 
            return {
                ...state, 
                selectedElements: checkSelected(action.payload, state.selectedElements)
            }
        case REMOVE_ELEMENT: 
            return {
                ...state,
                selectedElements: checkRemoved(action.payload, state.selectedElements)
            }
        case RESET_SELECTED_ELEMENTS: 
            return {
                ...state, 
                selectedElements: []
            }
        default: 
            return state
    }
}

export default elementsReducer