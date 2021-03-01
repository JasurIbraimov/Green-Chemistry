import React from 'react'
import styles from './contacts.module.css'
import familyPhoto from '../../assets/family-photo.jpeg'
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
					<div className={styles.aboutMe}>
						<div className={styles.photo}>
							<img src={familyPhoto} alt="Jasur&Aru"/>
						</div>
						<div className={styles.descr}>
							<h3>Меня зовут Жасур!</h3>
							<p>И я представляю вам мой новый проект - <span>Green Chemistry Calculator</span>!</p>
							<p>Данный проект был создан для упрощения расчетов по параметрам, отвечающим за "зеленость" реакции.</p>
							<p>В нем встроена функция подсчета молярной массы веществ, а также расчет 18 различных параметров зеленой химий!</p>
							<span>Спасибо моей любимой Ару за поддержку!</span>
						</div>
					</div>
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
