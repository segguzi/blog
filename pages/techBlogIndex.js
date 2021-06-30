import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

const postsDir = 'tech'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData(postsDir)
  return {
    props: {
      allPostsData
    }
  }
}

export default function fitHome({ allPostsData }) {
  return (
		<Layout Home>
			<section className={utilStyles.bodyMd}>
				Working as an Electrical Engineer for Northrop Grumman has taught me to never stop learning. I am blogging about my journey into Software Engineering and Web Design! Check out some of my blog posts below.
			</section>
			<h2 className={utilStyles.headingLg}>My Tech Blog Posts</h2>
			<ul className={utilStyles.list}>
			{allPostsData.map(({ id, date, title }) => (
				<li className={utilStyles.listItem} key={id}>
					<Link href={`/tech/${id}`}>
						<a>{title}</a>
					</Link>
					<br />
					<small className={utilStyles.lightText}>
						<Date dateString={date} />
					</small>
				</li>
			))}
			</ul>
		</Layout>
	)
}