import React, {useState} from 'react'
import styles from './Popup.module.css'

// Components
import MendeleevTable from '../MendeleevTable/MendeleevTable.component'
import CustomButton from '../CustomButton/CustomButton.component'
import CustomRemoveBtn from '../CustomRemoveBtn/CustomRemoveBtn.component'
const Popup = ({isPopupShown, handleAddItem, setPopupShown, elementsTable}) => {
    const [selectedElement, setSelectedElement] = useState([])
    const [renewable, setRenewable] = useState(false)
    const [mass, setMass] = useState('')
    const handleOnSubmit = (e) => {
        e.preventDefault()
        if (selectedElement.length !== 0 && mass.length !== 0) {
            handleAddItem(selectedElement, renewable, mass)
            setSelectedElement([])
            setRenewable(false)
            setMass('')
        }
    }
    return (
        <div className={`${styles.popupContainer} ${isPopupShown ? styles.visible : ''}`}>
            <div className={styles.popupInner}>
                <CustomRemoveBtn customStyles={{width: 40, height: 40, fontSize: '2rem'}} handleOnClick={() => setPopupShown(false)}/>
                <h2 className={styles.popupTitle}>Выберите состав:</h2>
                <div className={styles.formula}>
                    {
                        selectedElement.length !== 0 ? selectedElement.map((element, index) => (
                            <p key={index}>
                                {element.symbol}
                                <sub>{element.count > 1 ? element.count : ''}</sub>
                            </p>
                        )) : null
                    }
                </div>
                <form className={styles.properties} onSubmit={(e) => handleOnSubmit(e)}>
                    <div className={styles.property}>
                        <label>Возобновляемость :</label>
                        <input value={renewable} checked={renewable} onChange={(e) => setRenewable(e.target.value)} type='checkbox'/>
                    </div>
                    <div className={styles.property}>
                        <label>Масса:</label>
                        <input min='0' value={mass} onChange={(e) => setMass(e.target.value)} type='number' step=''/>
                    </div>
                    <div className={styles.addBtn}>
                        <CustomButton type='submit' btnLabel='Добавить' btnWidth={120} btnHeight={50}/>
                    </div>
                </form>
                <MendeleevTable selectedElement={selectedElement} elementsTable={elementsTable} setSelectedElement={setSelectedElement}/>
            </div>
        </div>
    )
}


export default Popup