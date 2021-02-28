import React from 'react'
import styles from './CustomRemoveBtn.module.css'
const CustomRemoveBtn = ({customStyles, ...otherProps}) => {
    return (
        <div style={{...customStyles}} {...otherProps} className={styles.removeBtn}>
            &times;
        </div>
    )
}

export default CustomRemoveBtn
