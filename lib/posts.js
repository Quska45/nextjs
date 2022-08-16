import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map(fileName => {
        // 파일명을 id 값으로 활용하기 위해 파일명에서 '.md' 확장자 제거
        const id = fileName.replace(/\.md$/, '');

        // 마크다운 파일을 문자열로 읽어 들이기
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // gray-matter 이용하여 포스트의 메타데이터 파싱하기
        const matterResult = matter(fileContents)

        return {
            id,
            ...matterResult.data
        }
    })

    return allPostsData.sort(({date: a}, {date: b} )=>{
        if(a>b){
            return 1
        } else if(a>b){
            return -1
        } else {
            return 0
        }
    })
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)

    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // 포스트의 메타데이터 섹션을 파싱하기 위해 gray-matter를 사용
    const matterResult = matter(fileContents)

    // 마크다운을 HTML 문자열로 변환하기 위해 remarK를 사용
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    // id와 contentHtml 합치기
    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}
