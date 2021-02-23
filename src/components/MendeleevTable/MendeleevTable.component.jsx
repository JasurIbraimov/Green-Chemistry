import React from 'react'
import styles from './MendeleevTable.module.css'
// Data
// Components
import Element from './Element/Element.component'
const MendeleevTable = ({elementsTable, setSelectedElement, selectedElement}) => {
	const handleSelectElement = (atomNumber) => {
		const element = elementsTable.filter(elem => elem.atom_number === atomNumber)
		element[0].count += 1
		setSelectedElement((prevState) => {
			if(prevState.findIndex(el => el.atom_number === atomNumber) === -1) {
				return [...prevState, ...element]
			} else {
				return [...prevState]
			}
		})
	}
	const handleRemoveElement = (e, atomNumber) => {
		e.preventDefault()
		const element = elementsTable.filter(elem => elem.atom_number === atomNumber)
		if (element[0].count > 1) {
			element[0].count -= 1
			setSelectedElement(prevState => {
				return [...prevState]
			})
		} else {
			element[0].count = 0
			setSelectedElement(prevState => {
				return [...prevState.filter(el => el.atom_number !== element[0].atom_number)]
			})
		}

	}
	return (
		<div>
			<ul className={styles.table}>
			{
				elementsTable.map(({name: {en, ru}, ...otherProps}, index) => (
					<Element 
						handleRemoveElement={handleRemoveElement}
						handleSelectElement={handleSelectElement}
						name={ru}
						key={index} 
						{...otherProps}
					/>
				))
			}
			</ul>
		</div>
	)
}

export default MendeleevTable
