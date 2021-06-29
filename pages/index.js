import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'

export default function Home({}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My name is James Krehbiel. I grew up in Laurel Maryland, and went to the University of Maryland where I got my Bachelors in Electrical Engineering. 
		I like to build things and lift heavy objects. Contact me to learn more.</p>
		<p>- Email: jkrehbiel@gmail.com</p>
		<a href="https://www.linkedin.com/in/james-krehbiel-43b783118/">- LinkedIn Profile</a>
      </section>
	  <section className={`${utilStyles.bodyMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>My Blogs</h2>
        <ul className={utilStyles.list}>
			<a href = "/techBlogIndex">- My Tech Blog<br /></a>
			<a href = "/fitBlogIndex">- My Fitness Blog</a>
        </ul>
		 <p>
          (This website was built with the aid of the Next.js tutorial{' '}
          <a href="https://nextjs.org/learn">Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}
