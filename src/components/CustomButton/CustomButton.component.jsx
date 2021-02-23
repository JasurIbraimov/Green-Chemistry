import React from 'react'
import styles from './CustomButton.module.css'
const CustomButton = ({btnLabel, btnWidth, btnHeight, ...otherProps}) => <button {...otherProps} style={{width: btnWidth, height: btnHeight}} className={styles.customButton}>{btnLabel}</button>

export default CustomButton
