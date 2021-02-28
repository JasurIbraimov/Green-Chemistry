import React, { useEffect, useState } from 'react'
import styles from './welcome.module.css'
import { Element, Link } from 'react-scroll'
// Components
import CustomButton from '../../components/CustomButton/CustomButton.component'
import CountProperties from '../../components/CountProperties/CountProperties.component'
import Solvents from '../../components/Solvents/Solvents.component'
import Reagents from '../../components/Reagents/Reagents.component'
import Products from '../../components/Products/Products.component'
// Redux
import { connect } from 'react-redux'
import {setProperties} from '../../redux/actions/properties.actions'
// Properties functions 
import * as propertyFunc from '../../functions/properties.functions'
const WelcomePage = ({ reagents, products, solvents, setProperties }) => {
	const [isCountShown, setCountShown] = useState(false)
	const [error, serError] = useState(false)
	useEffect(() => {
		if (!reagents.length || !solvents.length || !products.length) {
			serError(true)
		} else {
			serError(false)
		}
	}, [reagents, solvents, products])
    const handleOnCalculate = () => {
        setProperties([
            {
                name: 'Atom Economy',
                value: propertyFunc.getAtomEconomy(products, reagents).toFixed(2),
                optimumValue: 100,
                unit: '%'
            },
            {
                name: 'Carbon Efficiency',
                value: propertyFunc.getCarbonEfficiency(products, reagents).toFixed(2),
                optimumValue: 100,
                unit: '%'
            },
            {
                name: 'Chemical Yield',
                value: propertyFunc.getChemicalYield(products, reagents).toFixed(2),
                optimumValue: 100,
                unit: '%'
            },
            {
                name: 'Solvent Intensity',
                value: propertyFunc.getSolventIntensity(products, solvents).toFixed(2),
                optimumValue: 0,
                unit: 'kg/kg'
            },
            {
                name: 'Water Intensity',
                value: propertyFunc.getSolventIntensity(products, solvents).toFixed(2),
                optimumValue: 0,
                unit: 'kg/kg'
            },
            {
                name: 'Renewables Intensity',
                value: propertyFunc.getRenewablesIntensity(products, solvents, reagents).toFixed(2),
                optimumValue: 1,
                unit: 'kg/kg'
            },
            {
                name: 'Renewables Percentage',
                value: propertyFunc.getRenewablePercentage(products, solvents, reagents).toFixed(2),
                optimumValue: 100,
                unit: '%'
            },
            {
                name: 'E-factor',
                value: propertyFunc.getEfactor(products, reagents).toFixed(2),
                optimumValue: 0,
                unit: 'kg/kg'
            },
            {
                name: 'Effective Mass Yield',
                value: propertyFunc.getEffectiveMassYield(products, reagents).toFixed(2),
                optimumValue: 100,
                unit: '%'
            },
            {
                name: 'Mass Intensity',
                value: propertyFunc.getMassIntensity(products, solvents, reagents).toFixed(2),
                optimumValue: 1,
                unit: 'kg/kg'
            },
            {
                name: 'Reaction Mass Efficiency',
                value: propertyFunc.getReactionMassEfficiency(products, reagents).toFixed(2),
                optimumValue: 100,
                unit: '%'
            },
            {
                name: 'Mass Productivity',
                value: propertyFunc.getMassProductivity(products, solvents, reagents).toFixed(2),
                optimumValue: 100,
                unit: '%'
            },
            {
                name: 'Process Mass Intensity',
                value: propertyFunc.getProcessMassIntensity(products, solvents, reagents).toFixed(2),
                optimumValue: 1,
                unit: 'kg/kg'
            },
            {
                name: 'Process Mass Efficiency',
                value: propertyFunc.getProcessMassEfficiency(products, solvents, reagents).toFixed(2),
                optimumValue: 100,
                unit: '%'
            },
            {
                name: 'Reaction Mass Intencity',
                value: propertyFunc.getReactionMassIntencity(products, reagents).toFixed(2),
                optimumValue: 1,
                unit: 'kg/kg'
            },
            {
                name: 'Optimum Efficiency',
                value: propertyFunc.getOptimumEfficiency(products, reagents).toFixed(2),
                optimumValue: 100,
                unit: '%'
            },
            {
                name: 'Simple E-Factor',
                value: propertyFunc.getSimpleEFactor(products, reagents).toFixed(2),
                optimumValue: 0,
                unit: 'kg/kg'
            },
            {
                name: 'Complete E-Factor',
                value: propertyFunc.getCompleteEFactor(products, solvents, reagents).toFixed(2),
                optimumValue: 0,
                unit: 'kg/kg'
            },

        ])
        setCountShown(true)
    }
	return (
		<div className={styles.welcomePage}>
			<Solvents />
			<Reagents />
			<Products />
			<div className={styles.countLink}>
				<Link to='count' smooth='true' duration={500}>
					<CustomButton
						disabled={error}
						onClick={handleOnCalculate}
						btnLabel='Вычислить'
						btnWidth={250}
						btnHeight={60}
					/>
				</Link>
			</div>
			<Element name='count'>
				{isCountShown && <CountProperties />}
			</Element>
		</div>
	)
}
const mapStateToProps = ({
	reagents: { reagents },
	solvents: { solvents },
	products: { products },
}) => ({
	reagents,
	solvents,
	products,
})
const mapDispatchToProps = (dispatch) => ({setProperties: (properties) => dispatch(setProperties(properties))})
export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage)
