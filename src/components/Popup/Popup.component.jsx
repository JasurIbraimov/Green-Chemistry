import React, {useEffect, useState} from 'react'
import styles from './Popup.module.css'

// Components
import MendeleevTable from '../MendeleevTable/MendeleevTable.component'
import CustomButton from '../CustomButton/CustomButton.component'
import CustomRemoveBtn from '../CustomRemoveBtn/CustomRemoveBtn.component'
// Redux 
import { connect } from 'react-redux'
const Popup = ({popup, closePopup, selectedElements, handleAddItem}) => {
    const [renewable, setRenewable] = useState(false)
    const [mass, setMass] = useState('')
    const [error, setError] = useState({message: ''})
    const handleOnSubmit = (e) => {
        e.preventDefault()
        const atomMass = selectedElements.reduce((acc, curr) =>  curr.atom_mass * curr.count + acc, 0).toFixed(2)
        const item = {
            id: +new Date(),
            renewable,
            atomMass,
            elements: selectedElements,
            mass
        }
        handleAddItem(item)
        setRenewable(false)
        setMass('')
        setError({message: ''})
        closePopup()
        
    }
    useEffect(() => {
        if (selectedElements.length === 0) {
            setError({message: 'Необходимо выбрать элементы!'})
        } else if (mass.length === 0) {
            setError({message: 'Необходимо указать массу!'})
        } else {
            setError({message: ''})
        }
    }, [mass, selectedElements])
    const handleClosePopup = () => {
        setRenewable(false)
        setMass('')
        closePopup()
        setError({message: ''})
    }
    return (
        <div className={`${styles.popupContainer} ${popup ? styles.visible : ''}`}>
            <div className={styles.popupInner}>
                <CustomRemoveBtn style={{width: 40, height: 40, fontSize: '2rem', top: 10, right: 20 }} onClick={handleClosePopup}/>
                <h2 className={styles.popupTitle}>Выберите состав:</h2>
                <div className={styles.popupMain}>
                    <div className={`${selectedElements.length ? styles.formula : ''}`}>
                        {
                            selectedElements.length !== 0 ? selectedElements.map((element, index) => (
                                <p key={index}>
                                    {element.symbol}
                                    <sub>{element.count > 1 ? element.count : ''}</sub>
                                </p>
                            )) : null
                        }
                    </div>
                    <form className={styles.properties} onSubmit={(e) => handleOnSubmit(e)}>
                        <div className={styles.property}>
                            <label>Возобновляемый? (R):</label>
                            <div>
                                <input value={renewable} checked={renewable} onChange={(e) => setRenewable(e.target.checked)} type='checkbox'/>
                                <p>{renewable? 'Да' : 'Нет'}</p>
                            </div>
                        </div>
                        <div className={styles.property}>
                            <label>Масса (m):</label>
                            <input min='0' value={mass} onChange={(e) => setMass(e.target.value)} type='number' step=''/>
                        </div>
                        <div className={styles.addBtn}>
                            <CustomButton disabled={error.message.length} type='submit' btnLabel='Добавить' btnWidth={'70%'} btnHeight={50}/>
                        </div>
                        <p className={error.message.length ? styles.errorMessage : ''}>{ error.message}</p> 
                    </form>
                </div>
                
                <MendeleevTable/>
            </div>
        </div>
    )
}

const mapStateToProps = ({elements: {selectedElements}}) => ({selectedElements})

export default connect(mapStateToProps)(Popup)