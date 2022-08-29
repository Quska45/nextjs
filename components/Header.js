import style from '../styles/header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBars } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import { useState } from 'react'
import HeaderMenus from './HeaderMenus'
import HeaderIcon from './HeaderIcon'

// path가 먼저, props가 그 다음 실행됨
export async function getStaticProps({ params }) {
    console.log('asldkjhgkjsdhg');
    console.log( params );
    // Add the "await" keyword like this:
    // const postData = await getPostData(params.id)
    // console.log('getStaticProps');
    return {
        props: {
            // postData
        }
    }
}

export default function Header( props ){

    const [ headerMenuActive, setHeaderMenuActive ] = useState( false );
    const [ headerIconActive, setHeaderIconActive ] = useState( false );
    const headerMenuToggle = () => {
        setHeaderMenuActive( (prev) => !prev );
    };
    const headerIconToggle = () => {
        setHeaderIconActive( (prev) => !prev );
    };
    const [ menus, setMenus ] = useState( '' );

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
        'header_icon': classNames({
            [ style.header_icon ] : true,
            [ style.header_item ] : true,
            [ style.active ] : headerIconActive
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

            <HeaderMenus css={ complexCss.header_menu } />

            <HeaderIcon css={ complexCss.header_icon }></HeaderIcon>

            <div
                className={ complexCss.header_bars }
                onClick={() => {
                    headerMenuToggle()
                    headerIconToggle()
                }}
            >

            <FontAwesomeIcon icon={ faBars }></FontAwesomeIcon>

            </div>
        </header>
    )
}