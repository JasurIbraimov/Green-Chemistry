import React from 'react'
import styles from './CustomSection.module.css'
// Components
import CustomRemoveBtn from '../CustomRemoveBtn/CustomRemoveBtn.component'
// Icons
import { ReactComponent as RenewableIcon } from '../../assets/renewable-energy.svg'
import { ReactComponent as NoneRenewableIcon } from '../../assets/none-renewable.svg'
const CustomSection = ({ sectionName, sectionItems, handleRemoveItem }) => {
	return (
		<section className={styles.sectionContainer}>
			<h2 className={styles.sectionTitle}>{sectionName}</h2>
			<div className={styles.sectionTable}>
				<ul className={styles.sectionTableHeader}>
					<li>Вещество</li>
					<li>M(r)</li>
					<li>m</li>
					<li>R</li>
				</ul>
				{sectionItems.length
					? sectionItems.map(
							({ elements, atomMass, mass, renewable, id }) => (
								<ul className={styles.sectionItem} key={id}>
									<li className={styles.sectionItemSymbols}>
										{elements.map((el, i) => (
											<p key={i}>
												{el.symbol}
												<sub>
													{el.count > 1
														? el.count
														: ''}
												</sub>
											</p>
										))}
									</li>
									<li>{atomMass}</li>
									<li>{mass}</li>
									<li>
										{renewable ? (
											<RenewableIcon
												className={styles.sectionIcon}
											/>
										) : (
											<NoneRenewableIcon
												className={styles.sectionIcon}
											/>
										)}
									</li>
									<CustomRemoveBtn
										onClick={() => handleRemoveItem(id)}
										customStyles={{ width: 20, height: 20 }}
									/>
								</ul>
							)
					  )
					: null}
			</div>
		</section>
	)
}

export default CustomSection
