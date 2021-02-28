import React from 'react'
import styles from './Element.module.css'
// Redux 
import {addElement, removeElement} from '../../../redux/actions/elements.actions'
import { connect } from 'react-redux'
const Element = ({
	symbol,
	atom_mass,
	name,
	atom_number,
	count,
	subgroup,
	addElement,
	removeElement,
}) => {
	const handleRemoveElement = (e, atomNumber) => {
		e.preventDefault()
		if(count) {
			removeElement(atomNumber)
		}
	}
	return (
		<li
			onContextMenu={(e) => handleRemoveElement(e, atom_number)}
			onClick={() => addElement({
				symbol, atom_mass, atom_number, count: 1, subgroup, name
			})}
			className={`${styles.element} ${
				styles[subgroup.en.replace(/\s+/gi, '').toLowerCase()]
			}`}
		>
			<p className={styles.atomNumber}>{atom_number}</p>
			<p className={styles.symbol}>{symbol}</p>
			<p className={styles.name}>{name.ru}</p>
			<p className={styles.atomMass}>{atom_mass}</p>
			{count ? <p className={styles.count}>{count}</p> : null}
		</li>
	)
}
const mapDispatchToProps = (dispatch) => ({
	addElement: (elem) => dispatch(addElement(elem)),
	removeElement: (atomNumber) => dispatch(removeElement(atomNumber))
})
export default connect(null, mapDispatchToProps)(Element)
