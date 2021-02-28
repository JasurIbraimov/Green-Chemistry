import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styles from './App.module.css'
// Components
import Header from './components/Header/Header.component'
// Pages
import WelcomePage from './pages/welcome-page/welcome.page'
import ContactsPage from './pages/contacts-page/contacts.page'
const App = () => (
	<div className={styles.app}>
		<Header />
		<Switch>
			<Route path='/' exact>
				<WelcomePage />
			</Route>
			<Route path='/contacts' exact>
				<ContactsPage />
			</Route>
		</Switch>
	</div>
)

export default App
