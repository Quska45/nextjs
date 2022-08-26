import style from '../styles/header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

export default function Header(){
    return(
        <header className={ style.header }>
            <div className={ style.header_logo }>
                <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
            </div>

            <ul className={ style.header_menu }>
                <li>메뉴1</li>
                <li>메뉴2</li>
                <li>메뉴3</li>
            </ul>

            <ul className={ style.header_icons }>
                <li><FontAwesomeIcon icon={faTwitter} /></li>
                <li><FontAwesomeIcon icon={faFacebook}/></li>
            </ul>
        </header>
    )
}