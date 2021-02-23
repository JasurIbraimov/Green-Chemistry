import React from 'react'
import styles from './Element.module.css'
const Element = ({symbol, atom_mass, name, atom_number, count, handleSelectElement, handleRemoveElement, subgroup: {en, ru}, position: {x, y}}) => {
    return (
        <li onContextMenu={(e) => handleRemoveElement(e, atom_number)} onClick={() => handleSelectElement(atom_number)} className={`${styles.element} ${styles[en.replace(/\s+/gi, '').toLowerCase()]}`} style={{gridArea: `${y}/${x}`}}>
            <p className={styles.atomNumber}>{atom_number}</p>
            <p className={styles.symbol}>{symbol}</p>
            <p className={styles.name}>{name}</p>
            <p className={styles.atomMass}>{atom_mass}</p>
            {
                count !== 0 ?  <p className={styles.count}>{count}</p> : null
            }
        </li>
    )
}

export default Element
