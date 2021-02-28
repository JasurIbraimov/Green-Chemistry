import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Header.module.css'
// Components
import HeaderLink from './HeaderLink/HeaderLink.component'
import {ReactComponent as LogoIcon} from '../../assets/logo.svg'
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
                <HeaderLink activeOnExact={true} to='/'>На главную</HeaderLink>
                <HeaderLink activeOnExact={true} to='/contacts'>Контакты</HeaderLink>
            </div>
        </div>
    )
}

export default Header