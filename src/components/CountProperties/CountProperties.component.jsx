import React, {useState} from 'react'
import styles from './CountProperties.module.css'
const CountProperties = () => {
    const [results, setResults] = useState([
        {
            propertyName: 'Атомная экономия',
            propertyValue: '10'
        }
    ])
    return (
        <div className={styles.countProperties}>
            <h2>Результаты подсчетов:</h2>
            <ul className={styles.results}>
                {
                    results.length ? results.map(({propertyValue, propertyName}, index) => (
                        <li key={index} className={styles.result}>
                            <p>{propertyName}</p>
                            <p>{propertyValue}</p>
                        </li>
                    )) : null
                }
            </ul>
        </div>
    )
}

export default CountProperties
