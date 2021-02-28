import React from 'react'

const CustomContact = ({title, iconName, iconType, link, linkLabel}) => {
    return (
        <li>
            <p>Мой {title}</p>
            <div>
                <p>
                    <box-icon color='#27ae60' type={iconType} name={iconName}></box-icon>
                </p>
                <a href={link} rel="noreferrer"  target='_blank'>{linkLabel}</a>
            </div>
    </li>
    )
}

export default CustomContact
