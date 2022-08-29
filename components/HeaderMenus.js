export default function HeaderMenus( props ) {

    function makeMenu(){
        const menus = props.menus.reduce(( acc, cur ) => {
            acc.push( <li key={ cur.id }>{ cur.name }</li> )

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