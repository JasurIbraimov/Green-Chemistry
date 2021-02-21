import React from 'react'
import {Route, Switch} from 'react-router-dom'
import styles from './App.module.css'
// Components
import Header from './components/Header/Header.component'
import MendeleevTable from './components/MendeleevTable/MendeleevTable.component'
// Pages 
const App = () => {
    return (
        <div className={styles.app}>
            <Header/>
            <Switch>
                <Route path='/' exact>
                    <MendeleevTable/>
                </Route>
            </Switch>
        </div>
    )
}

export default App