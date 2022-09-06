import Link from 'next/link'

export default function HeaderMenus( props ) {

    function makeMenu(){
        const menus = props.menus.reduce(( acc, cur ) => {
            acc.push(
                <Link key={ cur.id } href={"/" + cur.id}>
                    <a>{ cur.name }</a>
                </Link>
            )

            return acc;
        }, [])

        return menus;
    }

    return (
        <ul className={ props.css }>
            { makeMenu() }
        </ul>
    )
}