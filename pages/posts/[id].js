import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

// path가 먼저, props가 그 다음 실행됨
export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id)
    console.log('getStaticProps');
    return {
        props: {
            postData
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    console.log('getStaticPaths');
    console.log(paths);
    return {
        paths,
        /*
        * 만약 fallback이 false라면, getStaticPaths에 의해 리턴되지 않은 모든 경로는 404 페이지로 이동합니다.
        * */
        fallback: false
    }
}

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            {postData.title}
            <br />
            {postData.id}
            <br />
            <Date dateString={postData.date} />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
        </Layout>
    )
}