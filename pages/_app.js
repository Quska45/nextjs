import '../styles/globals.css'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { getMenus } from '../lib/menus'
import {useState} from "react";

function MyApp({ Component, pageProps }) {

  const [ menus, setMenus ] = useState( pageProps.menus );
  console.log(menus);

  //https://velog.io/@candyroom136/react-%ED%95%A8%EC%88%98%ED%98%95%ED%95%98%EC%9C%84%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%97%90%EC%84%9C-%ED%95%A8%EC%88%98%ED%98%95%EC%83%81%EC%9C%84%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-state%EB%B3%80%EA%B2%BD%ED%95%98%EA%B8%B0
  const headerMenuToggle = () => {

  };

  return (
    <Layout>
      <Header menus={ menus } />
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