import Layout from '../components/Layout'
import Header from '../components/Header'
import { getMenus } from '../lib/menus'

// path가 먼저, props가 그 다음 실행됨
export async function getStaticProps({ params }) {

    let menus = await getMenus();

    return {
        props: {
            menus
        }
    }
}

export default function Home( props ){

    return(
        <Layout>
            <Header menus={ props.menus }>

            </Header>
        </Layout>
    )
}