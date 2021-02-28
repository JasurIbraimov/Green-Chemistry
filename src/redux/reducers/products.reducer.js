import {CHANGE_POPUP_VISIBILITY, REMOVE_PRODUCT, ADD_PRODUCT} from '../action-types/products.action.types'
const INITIAL_STATE = {
    popup: false,
    products: []
}
const productsReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_POPUP_VISIBILITY: 
            return {
                ...state, 
                popup: action.payload
            }
        case ADD_PRODUCT: 
            return {
                ...state, 
                products: [...state.products, action.payload]
            }
        case REMOVE_PRODUCT: 
            return {
                ...state, 
                products: [...state.products.filter(product => product.id !== action.payload)]
            }
        default:
            return state
    }
}

export default productsReducer