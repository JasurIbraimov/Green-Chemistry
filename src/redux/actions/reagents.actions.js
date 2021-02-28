import {CHANGE_POPUP_VISIBILITY, ADD_REAGENT, REMOVE_REAGENT} from '../action-types/reagents.action.types'
export const changePopupVisibility = (popupVisiblity) => ({type: CHANGE_POPUP_VISIBILITY, payload: popupVisiblity})
export const addReagent = (reagent) => ({type: ADD_REAGENT, payload: reagent})
export const removeReagent = (id) => ({type: REMOVE_REAGENT, payload: id})