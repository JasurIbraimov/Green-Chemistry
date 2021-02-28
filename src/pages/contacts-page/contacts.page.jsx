import React from 'react'
import styles from './contacts.module.css'
// Box-Icons
import 'boxicons'
// Components
import CustomContact from '../../components/CustomContact/CustomContact.component'
const ContactsPage = () => {
	return (
		<div className={styles.contactsPage}>
			<h2>Как со мной можно связаться?</h2>
			<div className={styles.contacts}>
				<ul>
					<CustomContact
						iconType='logo'
						link='https://github.com/JasurIbraimov'
						title='github!'
						iconName='github'
						linkLabel='JasurIbraimov'
					/>
					<CustomContact
						iconType=''
						link='https://gmail.com'
						title='Gmail! (Основная почта)'
						iconName='mail-send'
						linkLabel='ibraimov0409@gmail.com'
					/>
					<CustomContact
						iconType=''
						link='https://mail.ru'
						title='Email!'
						iconName='mail-send'
						linkLabel='ibraimov0409@mail.ru'
					/>
					<CustomContact
						iconType='logo'
						link='https://twitter.com/Jasur98030352'
						title='Twitter!'
						iconName='twitter'
						linkLabel='@Jasur98030352'
					/>
					<CustomContact
						iconType='logo'
						link='https://t.me/Jasur0409'
						title='Telegram!'
						iconName='telegram'
						linkLabel='@Jasur0409'
					/>
				</ul>
			</div>
		</div>
	)
}

export default ContactsPage
