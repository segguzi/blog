import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'

export async function getStaticProps({ params }) {
  const postData = await getPostData('tech',params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds('tech')
  return {
    paths,
    fallback: false
  }
}

export default function techPost({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
		<Link href="/techBlogIndex">
            <a>← Back to tech blog</a>
        </Link>
      </article>
    </Layout>
  )
}