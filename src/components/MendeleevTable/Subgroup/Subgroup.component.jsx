import React from 'react'
import styles from './Subgroup.module.css'
const Subgroup = ({subgroupName, children}) => {
    return (
        <div className={styles.subgroup}>
            <p className={styles.subgroupTitle}>{subgroupName}</p>
            <div className={styles.subgroupElements}>
                {
                    children
                }
            </div>
        </div>
    )
}

export default Subgroup
