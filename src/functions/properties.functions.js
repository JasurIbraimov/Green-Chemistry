const getMass = (data, mass) => {
	if (data.length) {
		return data.map((product) => +product[mass]).reduce((acc, cur) => acc + cur)
	} else {
		return 0
	}
}
const getWaterMass = (data) => {
	const water = data
		.map((item) => {
			const h = item.elements.find(
				(el) => el.symbol === 'H' && el.count === 2
			)
			const o = item.elements.find(
				(el) => el.symbol === 'O' && el.count === 1
			)
			if (
				h &&
				o &&
				!item.elements.filter((el) => el !== o && el !== h).length
			) {
				return +item.mass
			} else {
				return false
			}
		})
		.filter((el) => el)
	if (water.length) {
		return water.reduce((acc, cur) => acc + cur)
	} else {
		return 0
	}
}
export const getAtomEconomy = (products, reagents) => {
	const molarWeightOfProducts = getMass(products, 'atomMass')
	const molarWeightOfReagents = getMass(reagents, 'atomMass')
	return (molarWeightOfProducts / molarWeightOfReagents) * 100
}
export const getCarbonEfficiency = (products, reagents) => {
	const getCarbonCount = (data) => {
		let carbon = []
		for (let i = 0; i < data.length; i++) {
			carbon.push(data[i].elements.filter((el) => el.symbol === 'C'))
		}
		if (carbon.some(item => item.length > 0)) {
			return carbon.filter(c => c.length).map((el) => el.map(carbon => carbon.count * carbon.atom_mass).reduce((acc, cur) => acc + cur)).reduce((acc, cur) => acc + cur)
		} else {
			return 0
		}
	}
	const carbonInProduct = getCarbonCount(products)
	const carbonInReagents = getCarbonCount(reagents)
	const carbonEfficiency = (carbonInProduct / carbonInReagents) * 100
	if (carbonInProduct === 0 && carbonInReagents === 0) {
		return 'Нет углерода'
	} else if (carbonEfficiency) {
		return carbonEfficiency
	} else {
		return 0
	}
}
export const getReactionMassEfficiency = (products, reagents) => {
	const massOfProducts = getMass(products, 'mass')
	const massOfReagents = getMass(reagents, 'mass')
	return (massOfProducts / massOfReagents) * 100
}
export const getReactionMassIntencity = (products, reagents) => {
	return 1 / getEffectiveMassYield(products, reagents)
}
export const getSimpleEFactor = (products, reagents) => {
	return getReactionMassIntencity(products, reagents) - 1
}
export const getMassIntensity = (products, solvents, reagents) => {
	const massOfProducts = getMass(products, 'mass')
	const massOfReagents = getMass(reagents, 'mass')
	const massOfSolvents = getMass(solvents, 'mass')
	return ((massOfReagents + massOfSolvents) / massOfProducts) * 100
}
export const getMassProductivity = (products, solvents, reagents) => {
	return (1 / getMassIntensity(products, reagents, solvents)) * 100
}
export const getWaterIntensity = (products, solvents, reagents) => {
	const massOfProducts = getMass(products, 'mass')
	const waterMassInSolvents = getWaterMass(solvents)
	const waterMassInReagents = getWaterMass(reagents)
	const waterMassInProduct = getWaterMass(products)
	return ((waterMassInSolvents + waterMassInReagents + waterMassInProduct) / massOfProducts)
}
export const getSolventIntensity = (products, solvents) => {
	const massOfProducts = getMass(products, 'mass')
	const waterMass = getWaterMass(solvents)
	const solventsMass = getMass(solvents, 'mass')
	return (solventsMass - waterMass) / massOfProducts
}
export const getRenewablesIntensity = (products,solvents,reagents) => {
	const renewableReagents = reagents.filter((reagent) => reagent.renewable)
	const renewableSolvents = solvents.filter((reagent) => reagent.renewable)
	const massOfRenewableReagents = getMass(renewableReagents, 'mass')
	const massOfRenewableSolvents = getMass(renewableSolvents, 'mass')
	const massOfProducts = getMass(products, 'mass')
	return (massOfRenewableReagents + massOfRenewableSolvents) / massOfProducts
}
export const getProcessMassIntensity = (products, solvents, reagents) => {
	const massOfProducts = getMass(products, 'mass')
	const massOfSolvents = getMass(solvents, 'mass')
	const massOfReagents = getMass(reagents, 'mass')
	return (massOfReagents + massOfSolvents) / massOfProducts
}
export const getProcessMassEfficiency = (products, solvents, reagents) => {
	return 100 / getProcessMassIntensity(products, solvents, reagents)
}
export const getCompleteEFactor = (products, solvents, reagents) => {
	return getProcessMassIntensity(products, solvents, reagents) - 1
}
export const getRenewablePercentage = (products, solvents, reagents) => {
	return (getRenewablesIntensity(reagents, solvents, products) * 100) / getProcessMassIntensity(products, solvents, reagents)
}
export const getChemicalYield = (products, reagents) => {
	const massOfProducts = getMass(products, 'mass')
	const molarWeightOfProducts = getMass(products, 'atomMass')
	const massOfReagents = getMass(reagents, 'mass')
	const molarWeightOfReagents = getMass(reagents, 'atomMass')
	return (massOfProducts * molarWeightOfReagents * 100) /(molarWeightOfProducts * massOfReagents)
}
export const getEfactor = (products, reagents) => {
	const massOfProducts = getMass(products, 'mass')
	const massOfReagents = getMass(reagents, 'mass')
	const waterMassInReagents = getWaterMass(reagents)
	return ((massOfReagents - waterMassInReagents - massOfProducts) / massOfProducts)
}
export const getEffectiveMassYield = (products, reagents) => {
	const massOfProducts = getMass(products, 'mass')
	const massOfReagents = getMass(reagents, 'mass')
	return (massOfProducts * 100) / massOfReagents
}
export const getOptimumEfficiency = (products, reagents) => {
	return (getReactionMassEfficiency(products, reagents) * 100) / getAtomEconomy(products, reagents)
}

