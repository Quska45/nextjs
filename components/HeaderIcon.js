import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

export default function HeaderMenus( props ) {

    return (
        <ul className={ props.css }>
            <li><FontAwesomeIcon icon={ faTwitter } /></li>
            <li><FontAwesomeIcon icon={ faFacebook }/></li>
        </ul>
    )
}