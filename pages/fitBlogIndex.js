import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

const postsDir = 'fitblogposts'

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
				I have been playing sports, working out, and generally being active since I was a young child. 
				Being physically fit and healthy is extremely important to me. 
				I have taught gymnastics, sports, and fitness for over 5 years - and I love sharing my knowledge! Check out some of my blog posts below!
			</section>
			<h2 className={utilStyles.headingLg}>My Fitness Blog Posts</h2>
			<ul className={utilStyles.list}>
			{allPostsData.map(({ id, date, title }) => (
				<li className={utilStyles.listItem} key={id}>
					<Link href={`/posts/${id}`}>
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