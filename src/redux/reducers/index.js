import {combineReducers} from 'redux'
import elementsReducer from './elements.reducer'
import solventsReducer from './solvents.reducer'
import reagentsReducer from './reagents.reducer'
import productsReducer from './products.reducer'

const rootReducer = combineReducers({
    elements: elementsReducer,
    solvents: solventsReducer,
    reagents: reagentsReducer,
    products: productsReducer
})
export default rootReducer