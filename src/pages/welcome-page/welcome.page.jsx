import React, { useEffect, useState } from 'react'
import styles from './welcome.module.css'
import { Element, Link } from 'react-scroll'
// Components
import CustomButton from '../../components/CustomButton/CustomButton.component'
import CountProperties from '../../components/CountProperties/CountProperties.component'
import Solvents from '../../components/Solvents/Solvents.component'
import Reagents from '../../components/Reagents/Reagents.component'
import Products from '../../components/Products/Products.component'
import { connect } from 'react-redux'
const WelcomePage = ({ reagents, products, solvents }) => {
	const [isCountShown, setCountShown] = useState(false)
	const [error, serError] = useState(false)
	useEffect(() => {
		if (!reagents.length || !solvents.length || !products.length) {
			serError(true)
		} else {
			serError(false)
		}
	}, [reagents, solvents, products])
	const getMass = (data, mass) => {
		return data
			.map((product) => +product[mass])
			.reduce((acc, cur) => acc + cur)
	}
    const getWaterMass = (data) => {
        const water = data.map((item) => {
            const h = item.elements.find(
                (el) => el.symbol === 'H' && el.count === 2
            ) 
            const o = item.elements.find(
                (el) => el.symbol === 'O' && el.count === 1
            )
            if (
                h
                &&
                o 
                && !item.elements.filter((el) => el !== o && el !== h).length
            ) {
                return +item.mass
            } else {
                return false
            }
        }).filter(el => el)
        if (water.length) {
            return water.reduce((acc, cur) => acc + cur)
        } else {
            return 0
        }
    }
	const getAtomEconomy = () => {
		if (reagents.length && products.length) {
			const molarWeightOfProducts = getMass(products, 'atomMass')
			const molarWeightOfReagents = getMass(reagents, 'atomMass')
			return (molarWeightOfProducts / molarWeightOfReagents) * 100
		}
	}
	const getCarbonEfficiency = () => {
		const getCarbonCount = (data) => {
			return data
				.map((item) =>
					item.elements
						.filter((el) => el.symbol === 'C')
						.map((el) => el.atom_mass * el.count)
				)
				.filter((el) => el.length > 0)
				.map((el) => el.reduce((acc, cur) => acc + cur))
				.reduce((acc, cur) => acc + cur)
		}
		if (reagents.length && products.length) {
			const carbonInProduct = getCarbonCount(products)
			const carbonInReagents = getCarbonCount(reagents)
			return (carbonInProduct / carbonInReagents) * 100
		}
	}
	const getReactionMassEfficiency = () => {
		if (reagents.length && products.length) {
			const massOfProducts = getMass(products, 'mass')
			const massOfReagents = getMass(reagents, 'mass')
			return (massOfProducts / massOfReagents) * 100
		}
	}
	const getMassIntensity = () => {
		if (reagents.length && products.length && solvents.length) {
			const massOfProducts = getMass(products, 'mass')
			const massOfReagents = getMass(reagents, 'mass')
			const massOfSolvents = getMass(solvents, 'mass')
			return ((massOfReagents + massOfSolvents) / massOfProducts) * 100
		}
	}
	const getMassProductivity = () => {
		return (1 / getMassIntensity()) * 100
	}
	const getWaterIntensity = () => {
		if (reagents.length && products.length && solvents.length) {
			const massOfProducts = getMass(products, 'mass')
			const waterMassInSolvents = getWaterMass(solvents)
            const waterMassInReagents = getWaterMass(reagents)
            const waterMassInProduct = getWaterMass(products)
			return (waterMassInSolvents + waterMassInReagents + waterMassInProduct) / massOfProducts
		}
	}
    const getSolventIntensity = () => {
        if (reagents.length && products.length && solvents.length) {
			const massOfProducts = getMass(products, 'mass')
			const waterMass = getWaterMass(solvents)
            const solventsMass = getMass(solvents, 'mass')
			return (solventsMass - waterMass) / massOfProducts
		}
    }
    const getRenewablesIntensity = () => {
        if (reagents.length && products.length && solvents.length) { 
            const renewableReagents = reagents.filter(reagent => reagent.renewable)
            const renewableSolvents = solvents.filter(reagent => reagent.renewable)
            const massOfRenewableReagents = getMass(renewableReagents, 'mass')
            const massOfRenewableSolvents = getMass(renewableSolvents, 'mass')
            const massOfProducts = getMass(products, 'mass')
            return (massOfRenewableReagents + massOfRenewableSolvents) / massOfProducts
        }
    }
    const getProcessMassIntensity = () => {
        if (reagents.length && products.length && solvents.length) {
			const massOfProducts = getMass(products, 'mass')
            const massOfSolvents = getMass(solvents, 'mass')
            const massOfReagents = getMass(reagents, 'mass')
            return (massOfReagents + massOfSolvents) / massOfProducts
		}
    }
    const getRenewablePercentage = () => {
        return getRenewablesIntensity() * 100 / getProcessMassIntensity()
    }
    console.log(getRenewablePercentage())
	return (
		<div className={styles.welcomePage}>
			<Solvents />
			<Reagents />
			<Products />
			<div className={styles.countLink}>
				<Link to='count' smooth='true' duration={500}>
					<CustomButton
						disabled={error}
						onClick={() => setCountShown(true)}
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
export default connect(mapStateToProps)(WelcomePage)
