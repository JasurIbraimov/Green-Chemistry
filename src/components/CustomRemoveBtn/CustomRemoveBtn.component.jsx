import React from 'react'
import styles from './CustomRemoveBtn.module.css'
const CustomRemoveBtn = ({handleOnClick, customStyles}) => {
    return (
        <div style={{...customStyles}} onClick={handleOnClick} className={styles.removeBtn}>
            &times;
        </div>
    )
}

export default CustomRemoveBtn
