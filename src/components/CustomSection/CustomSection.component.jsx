import React, {useState} from 'react'
import styles from './CustomSection.module.css'
import { NEW_ELEMENTS_DATA } from '../../data/elements.data'
// Components 
import CustomButton from '../CustomButton/CustomButton.component'
import Popup from '../Popup/Popup.component'
import CustomRemoveBtn from '../CustomRemoveBtn/CustomRemoveBtn.component'
// Icons 
import {ReactComponent as RenewableIcon} from '../../assets/renewable-energy.svg'
import {ReactComponent as NoneRenewableIcon} from '../../assets/none-renewable.svg'
const CustomSection = ({sectionName}) => {
    const [sectionItem, setSectionItem] = useState([])
    const [isPopupShown, setPopupShown] = useState(false)
    const [elementsTable, setElementsTable] = useState(NEW_ELEMENTS_DATA)
    const handleRemoveItem = (id) => {
        setSectionItem((prev) => prev.filter((item) => item.id !== id))
    }
    const handleAddItem = (elements, renewable, mass) => {
        const atomMass = +elements.reduce((acc, curr) =>  curr.atom_mass * curr.count + acc, 0).toFixed(2)
        const item = {
            id: +new Date(),
            renewable,
            atomMass,
            elements,
            mass
        }
        setSectionItem((prevState) => [...prevState, item])
        setPopupShown(false)
    }
    const handlePopupShown = () => {
        setPopupShown(true)
        setElementsTable((prev) => prev.map(el => ({...el, count: 0})))
    }
    if (isPopupShown) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflowY = 'scroll'
    }
    return (
        <section className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>{sectionName}</h2>
            <div className={styles.sectionTable}>
                <ul className={styles.sectionTableHeader}>
                    <li>{sectionName}</li>
                    <li>Атомная масса</li>
                    <li>Масса</li>
                    <li>Возобновляемость</li>
                </ul>
                {
                    sectionItem.length !== 0 ? sectionItem.map(({elements, atomMass, mass, renewable, id}) => (
                        <ul className={styles.sectionItem} key={id}>
                            <li className={styles.sectionItemSymbols}>
                                {elements.map((el, i) => (
                                <p>{el.symbol}<sub>{el.count > 1 ? el.count : ''}</sub></p>
                                ))}
                            </li>
                            <li>
                                {atomMass}
                            </li>
                            <li>
                                {mass}
                            </li>
                            <li>
                                {renewable ? <RenewableIcon className={styles.sectionIcon}/>: <NoneRenewableIcon className={styles.sectionIcon}/>}
                            </li>
                           <CustomRemoveBtn handleOnClick={() => handleRemoveItem(id)} customStyles={{width: 20, height: 20}}/>
                        </ul>
                    )) : null 
                }
            </div>
            <div className={styles.sectionAction}>
                <CustomButton onClick={handlePopupShown} btnLabel="Добавить" btnWidth={200} btnHeight={50}/>
            </div>
            <Popup elementsTable={elementsTable} setPopupShown={setPopupShown} isPopupShown={isPopupShown} handleAddItem={handleAddItem} />
    </section>
    )
}

export default CustomSection
