import React from 'react'
import styles from './CustomRemoveBtn.module.css'
const CustomRemoveBtn = ({...otherProps}) => {
    return (
        <div {...otherProps} className={styles.removeBtn}>
            &times;
        </div>
    )
}

export default CustomRemoveBtn
