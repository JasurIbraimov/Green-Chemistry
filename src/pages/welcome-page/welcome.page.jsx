import React, {useState} from 'react'
import styles from './welcome.module.css'
import {Element, Link} from 'react-scroll'
// Components 
import CustomSection from '../../components/CustomSection/CustomSection.component'
import CustomButton from '../../components/CustomButton/CustomButton.component'
import CountProperties from '../../components/CountProperties/CountProperties.component'
const WelcomePage = () => {
    const [isCountShown, setCountShown] = useState(false)
    return (
        <div className={styles.welcomePage}>
            <CustomSection sectionName="Реагенты"/>
            <CustomSection  sectionName="Растворители"/>
            <CustomSection  sectionName="Продукт"/>
            <div className={styles.countLink}>
                <Link to='count' smooth='true' duration={500}>
                    <CustomButton onClick={() => setCountShown(true)}   btnLabel='Вычислить' btnWidth={250} btnHeight={60}/>
                </Link> 
            </div>
            <Element name='count'>
                {
                    isCountShown && <CountProperties />
                }
            </Element>
        </div>
    )
}

export default WelcomePage
