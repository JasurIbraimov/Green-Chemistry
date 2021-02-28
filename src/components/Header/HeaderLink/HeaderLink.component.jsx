import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import styles from './HeaderLink.module.css'
const HeaderLink = ({to, children, activeOnExact}) => {
    let match = useRouteMatch({
        path: to,
        exact: activeOnExact
      });
    return (
        <Link className={match ? styles.active : ''} to={to}>{children}</Link>
    )
}

export default HeaderLink
