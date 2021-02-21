import React from 'react'
import styles from './Element.module.css'
const Element = ({symbol, atom_mass, name, atom_number, subgroup: {en, ru}, position: {x, y}}) => {
    return (
        <li className={`${styles.element} ${styles[en.replace(/\s+/gi, '').toLowerCase()]}`} style={{gridArea: `${y}/${x}`}}>
            <p className={styles.atomNumber}>{atom_number}</p>
            <p className={styles.symbol}>{symbol}</p>
            <p className={styles.name}>{name}</p>
            <p className={styles.atomMass}>{atom_mass}</p>
        </li>
    )
}

export default Element
