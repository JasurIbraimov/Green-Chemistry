import React from 'react'
import { connect } from 'react-redux'
import styles from './CountProperties.module.css'
const CountProperties = ({properties}) => {
    
    return (
        <div className={styles.countProperties}>
            <h2>Результаты подсчетов:</h2>
            <ul className={styles.results}>
                <ul className={styles.resultsHeader}>
                    <li>Название</li>
                    <li>Полученное<br/> значение</li>
                    <li>Оптимальное<br/> значение</li>
                </ul>
                {
                    properties.map(({name, value, optimumValue, unit}, index) => (
                        <li key={index} className={`${styles.result} ${+value !== optimumValue ? styles.failResult : ''} ${value === 'Нет углерода' ? styles.blocked : ''} `}>
                            <p>{name}</p>
                            <p>
                                <span>{value}</span>
                                <span>{unit}</span>
                            </p>
                            <p>
                                <span>{optimumValue}</span>
                                <span>{unit}</span>
                            </p>
                        </li>
                    )) 
                }
            </ul>
        </div>
    )
}
const mapStateToProps = ({properties: {properties}}) => ({properties})
export default connect(mapStateToProps)(CountProperties)
