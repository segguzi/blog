import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My name is James Krehbiel. I grew up in Laurel Maryland, and went to the University of Maryland where I got my Bachelors in Electrical Engineering. I like to build things and lift heavy objects. Contact me to learn more.</p>
		<p>Email: jkrehbiel@gmail.com</p>
		<Link href={`https://www.linkedin.com/in/james-krehbiel-43b783118/`}>
					<a>Linked In profile</a>
		</Link>
      </section>
	  <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
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
		 <p>
          (This website was built with the aid of the Next.js tutorial{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
	  
    </Layout>
  )
}
