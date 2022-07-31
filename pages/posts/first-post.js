import Link from "next/link";
import Head from 'next/head';
import Layout from "../components/layout";

export default function FirstPost() {
    return (
        <>
            <Layout>
                <Head>
                    <title>첫 본째 포스트</title>
                </Head>
                <h1>첫 포스트!</h1>
                <h2>
                    <Link href="/">
                        <a>홈으로 돌아가기</a>
                    </Link>
                </h2>
            </Layout>
        </>
    )
}