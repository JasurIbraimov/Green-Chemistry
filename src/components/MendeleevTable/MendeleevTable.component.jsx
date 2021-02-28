import React from 'react'
import styles from './MendeleevTable.module.css'
// Components
import Element from './Element/Element.component'
import Subgroup from './Subgroup/Subgroup.component'
import { connect } from 'react-redux'
const MendeleevTable = ({ elementsData, selectedElements }) => {
	const getSubgroup = (data, subgroup) => {
		return data.filter((el) => el.subgroup.en === subgroup)
	}
	const createElements = (data) => {
		return data.map((element, index) => {
			if (
				selectedElements.findIndex(
					(el) => el.atom_number === element.atom_number
				) === -1
			) {
				return <Element key={index} {...element} />
			} else {
				const selectedElement = selectedElements.find(
					(el) => el.atom_number === element.atom_number
				)
				return <Element key={index} {...selectedElement} />
			}
		})
	}
	const nonmetals = getSubgroup(elementsData, 'Nonmetals'),
		noblegases = getSubgroup(elementsData, 'Noble gases'),
		alkalimetals = getSubgroup(elementsData, 'Alkali metals'),
		halogens = getSubgroup(elementsData, 'Halogens'),
		metalloids = getSubgroup(elementsData, 'Metalloids'),
		postTransitionMetals = getSubgroup(
			elementsData,
			'Post transition metals'
		),
		transitionMetals = getSubgroup(elementsData, 'Transition metals'),
		alkaliEarthMetals = getSubgroup(elementsData, 'Alkaline earth metals'),
		lanthanides = getSubgroup(elementsData, 'Lanthanides'),
		actinides = getSubgroup(elementsData, 'Actinides')
	return (
		<div>
			<ul className={styles.table}>
				<Subgroup subgroupName='Неметаллы'>
					{createElements(nonmetals)}
				</Subgroup>
				<Subgroup subgroupName='Благородные газы'>
					{createElements(noblegases)}
				</Subgroup>
				<Subgroup subgroupName='Щелочные металлы'>
					{createElements(alkalimetals)}
				</Subgroup>
				<Subgroup subgroupName='Галогены'>
					{createElements(halogens)}
				</Subgroup>
				<Subgroup subgroupName='Металлоиды'>
					{createElements(metalloids)}
				</Subgroup>

				<Subgroup subgroupName='Пост переходные металлы'>
					{createElements(postTransitionMetals)}
				</Subgroup>
				<Subgroup subgroupName='Переходные металлы'>
					{createElements(transitionMetals)}
				</Subgroup>
				<Subgroup subgroupName='Щелочно-земельные металлы'>
					{createElements(alkaliEarthMetals)}
				</Subgroup>
				<Subgroup subgroupName='Лантаноиды'>
					{createElements(lanthanides)}
				</Subgroup>
				<Subgroup subgroupName='Актиноиды'>
					{createElements(actinides)}
				</Subgroup>
			</ul>
		</div>
	)
}
const mapStateToProps = ({ elements: { elementsData, selectedElements } }) => ({
	elementsData,
	selectedElements,
})
export default connect(mapStateToProps)(MendeleevTable)
