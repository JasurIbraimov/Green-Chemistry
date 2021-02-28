import React from 'react'
import styles from './Reagents.module.css'
// Components
import CustomSection from '../CustomSection/CustomSection.component'
import CustomButton from '../CustomButton/CustomButton.component'
import Popup from '../Popup/Popup.component'
// Redux
import { connect } from 'react-redux'
import {addReagent, removeReagent, changePopupVisibility} from '../../redux/actions/reagents.actions'
import {resetSelectedElements} from '../../redux/actions/elements.actions'
const Reagents = ({popup, changePopupVisibility, reagents, addReagent, resetSelectedElements, removeReagent}) => {
    const closePopup = () => {
        changePopupVisibility(false)
        resetSelectedElements()
    }
    return (
        <div className={styles.reagents}>
            <CustomSection handleRemoveItem={removeReagent} sectionItems={reagents} sectionName="Реагенты"/>
            <CustomButton onClick={() => changePopupVisibility(true)} btnLabel="Добавить" btnWidth={150} btnHeight={40}/>
            <Popup handleAddItem={addReagent} popup={popup} closePopup={closePopup}/>
        </div>
    )
}
const mapStateToProps = ({reagents: {popup, reagents}}) => ({popup, reagents})
const mapDispatchToProps = (dispatch) => ({
    changePopupVisibility: (popupVisiblity) => dispatch(changePopupVisibility(popupVisiblity)),
    addReagent: (reagent) => dispatch(addReagent(reagent)),
    removeReagent: (id) => dispatch(removeReagent(id)),
    resetSelectedElements: () => dispatch(resetSelectedElements())
})
export default connect(mapStateToProps, mapDispatchToProps)(Reagents)
