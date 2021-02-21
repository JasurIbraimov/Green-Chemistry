import React, { Component } from 'react'
import styles from './MendeleevTable.module.css'
// Data
import { ELEMENTS_DATA } from '../../data/elements.data'
// Components
import Element from './Element/Element.component'
class MendeleevTable extends Component {
	constructor(props) {
		super(props)
		this.state = {
			elements: ELEMENTS_DATA,
			lang: 'ru'
		}
	}
	render() {
        const {elements, lang} = this.state
		return (
			<div>
				<ul className={styles.table}>
				{
					elements.map(({name: {en, ru}, ...otherProps}, index) => (
						<Element 
							name={lang === 'ru' ? ru : en}
							key={index} 
							{...otherProps}
						/>
					))
				}
			</ul>
			</div>
		)
	}
}

export default MendeleevTable
