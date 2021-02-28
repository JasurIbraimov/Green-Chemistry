import React from 'react'
import { connect } from 'react-redux'
import CustomSection from '../CustomSection/CustomSection.component'
import CustomButton from '../CustomButton/CustomButton.component'
import Popup from '../Popup/Popup.component'
// Redux
import {addReagent, removeReagent, changePopupVisibility} from '../../redux/actions/reagents.actions'
import {resetSelectedElements} from '../../redux/actions/elements.actions'
const Reagents = ({popup, changePopupVisibility, reagents, addReagent, resetSelectedElements, removeReagent}) => {
    const closePopup = () => {
        changePopupVisibility(false)
        resetSelectedElements()
    }
    return (
        <div>
            <CustomSection handleRemoveItem={removeReagent} sectionItems={reagents} sectionName="Реагенты"/>
            <CustomButton onClick={() => changePopupVisibility(true)} btnLabel="Добавить" btnWidth={200} btnHeight={50}/>
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
