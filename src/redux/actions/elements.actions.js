import {ADD_ELEMENT, REMOVE_ELEMENT, RESET_SELECTED_ELEMENTS} from '../action-types/elements.action.types'
export const addElement = (element) => ({type: ADD_ELEMENT, payload: element})
export const removeElement = (atomNumber) => ({type: REMOVE_ELEMENT, payload: atomNumber})
export const resetSelectedElements = () => ({type: RESET_SELECTED_ELEMENTS})