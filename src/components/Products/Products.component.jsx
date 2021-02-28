import React from 'react'
import styles from './Products.module.css'
// Components 
import CustomSection from '../CustomSection/CustomSection.component'
import CustomButton from '../CustomButton/CustomButton.component'
import Popup from '../Popup/Popup.component'
// Redux
import { connect } from 'react-redux'
import {addProduct, removeProduct, changePopupVisibility} from '../../redux/actions/products.actions'
import {resetSelectedElements} from '../../redux/actions/elements.actions'
const Products = ({popup, changePopupVisibility, products, addProduct, resetSelectedElements, removeProduct}) => {
    const closePopup = () => {
        changePopupVisibility(false)
        resetSelectedElements()
    }
    return (
        <div className={styles.products}>
            <CustomSection handleRemoveItem={removeProduct} sectionItems={products} sectionName="Продукты"/>
            <CustomButton onClick={() => changePopupVisibility(true)} btnLabel="Добавить" btnWidth={150} btnHeight={40}/>
            <Popup handleAddItem={addProduct} popup={popup} closePopup={closePopup}/>
        </div>
    )
}
const mapStateToProps = ({products: {popup, products}}) => ({popup, products})
const mapDispatchToProps = (dispatch) => ({
    changePopupVisibility: (popupVisiblity) => dispatch(changePopupVisibility(popupVisiblity)),
    addProduct: (reagent) => dispatch(addProduct(reagent)),
    removeProduct: (id) => dispatch(removeProduct(id)),
    resetSelectedElements: () => dispatch(resetSelectedElements())
})
export default connect(mapStateToProps, mapDispatchToProps)(Products)