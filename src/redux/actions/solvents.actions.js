import {CHANGE_POPUP_VISIBILITY, ADD_SOLVENT, REMOVE_SOLVENT} from '../action-types/solvents.action.types'

export const changePopupVisibility = (popupVisiblity) => ({type: CHANGE_POPUP_VISIBILITY, payload: popupVisiblity})
export const addSolvent = (solvent) => ({type: ADD_SOLVENT, payload: solvent})
export const removeSolvent = (id) => ({type: REMOVE_SOLVENT, payload: id})