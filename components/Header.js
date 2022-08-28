import style from '../styles/header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBars } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import classNames from 'classnames'
import { useState } from 'react'

export default function Header(){

    const [ headerMenuActive, setHeaderMenuActive ] = useState( false );
    const [ headerIconsActive, setHeaderIconsActive ] = useState( false );
    const headerMenuToggle = () => {
        setHeaderMenuActive( (prev) => !prev );
    };
    const headerIconsToggle = () => {
        setHeaderIconsActive( (prev) => !prev );
    };

    let complexCss = {
        'header_logo': classNames({
            [ style.header_logo ] : true,
            [ style.header_item ] : true
        }),
        'header_menu': classNames({
            [ style.header_menu ] : true,
            [ style.header_item ] : true,
            [ style.active ] : headerMenuActive
        }),
        'header_icons': classNames({
            [ style.header_icons ] : true,
            [ style.header_item ] : true,
            [ style.active ] : headerIconsActive
        }),
        'header_bars': classNames({
            [ style.header_bars ] : true,
            [ style.header_item ] : true
        }),
    };

    return(
        <header className={ style.header }>
            <div className={ complexCss.header_logo }>
                <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
                Coding 블로그
            </div>

            <ul className={ complexCss.header_menu }>
                <li>메뉴1</li>
                <li>메뉴2</li>
                <li>메뉴3</li>
            </ul>

            <ul className={ complexCss.header_icons }>
                <li><FontAwesomeIcon icon={ faTwitter } /></li>
                <li><FontAwesomeIcon icon={ faFacebook }/></li>
            </ul>

            <div
                className={ complexCss.header_bars }
                onClick={() => {
                    headerMenuToggle()
                    headerIconsToggle()
                }}
            >
                <FontAwesomeIcon icon={ faBars }></FontAwesomeIcon>
            </div>
        </header>
    )
}