import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import styles from './App.module.css'
// Components
import Header from './components/Header/Header.component'
// Pages 
import FormulasPage from './pages/formulas-page/formulas.page'
import WelcomePage from './pages/welcome-page/welcome.page'
import ContactsPage from './pages/contacts-page/contacts.page'
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className={styles.app}>
                <Header/>
                <Switch>
                    <Route path='/' exact>
                        <WelcomePage/>
                    </Route>
                    <Route path='/formulas' exact>
                        <FormulasPage/>
                    </Route>
                    <Route path='/contacts' exact>
                        <ContactsPage/>
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default App