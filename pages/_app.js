import '../styles/globals.css'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { getMenus } from '../lib/menus'

function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <Header menus={ pageProps.menus } />
      <Component {...pageProps} />
    </Layout>
  )
}

MyApp.getInitialProps = async ctx => {
    let menus = await getMenus();

    return {
        pageProps: {
            menus
        }
    }
}

export default MyApp