import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as LogoIcon} from '../../assets/logo.svg'
import styles from './Header.module.css'
const Header = () => {
    return (
        <div className={styles.header}>
            <Link to='/'>
                <div className={styles.logoWrapper}>
                    <h2>Green Chemistry</h2>
                    <LogoIcon className={styles.logo}/>
                </div>
            </Link>
            <div className={styles.links}>
                <Link to='/'>На главную</Link>
                {/* <Link to='/contacts'>Контакты</Link> */}
            </div>
        </div>
    )
}

export default Header