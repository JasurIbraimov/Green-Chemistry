import React from 'react'
import CustomButton from '../CustomButton/CustomButton.component'
import CustomSection from '../CustomSection/CustomSection.component'
import PopupComponent from '../Popup/Popup.component'
import { connect } from 'react-redux'
import { addSolvent, changePopupVisibility, removeSolvent} from '../../redux/actions/solvents.actions'
import { resetSelectedElements } from '../../redux/actions/elements.actions'
const Solvents = ({popup, changePopupVisibility, solvents, addSolvent, resetSelectedElements, removeSolvent}) => {
    const closePopup = () => {
        changePopupVisibility(false)
        resetSelectedElements()
    }
    return (
        <div>
            <CustomSection handleRemoveItem={removeSolvent} sectionItems={solvents} sectionName="Растворители"/>
            <CustomButton onClick={() => changePopupVisibility(true)} btnLabel="Добавить" btnWidth={200} btnHeight={50}/>
            <PopupComponent handleAddItem={addSolvent} popup={popup} closePopup={closePopup}/>
        </div>
    )
}
const mapStateToProps = ({solvents: {popup, solvents}}) => ({popup, solvents})
const mapDispatchToProps = (dispatch) => ({
    changePopupVisibility: (popupVisiblity) => dispatch(changePopupVisibility(popupVisiblity)),
    addSolvent: (solvent) => dispatch(addSolvent(solvent)),
    removeSolvent: (id) => dispatch(removeSolvent(id)),
    resetSelectedElements: () => dispatch(resetSelectedElements())
})
export default connect(mapStateToProps, mapDispatchToProps)(Solvents)
