import {CHANGE_POPUP_VISIBILITY, REMOVE_PRODUCT, ADD_PRODUCT} from '../action-types/products.action.types'
export const changePopupVisibility = (popupVisiblity) => ({type: CHANGE_POPUP_VISIBILITY, payload: popupVisiblity})
export const addProduct = (product) => ({type: ADD_PRODUCT, payload: product})
export const removeProduct = (id) => ({type: REMOVE_PRODUCT, payload: id})