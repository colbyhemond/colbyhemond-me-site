import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { attributes, react as HomeContent } from '../content/home.md';
import NavGroup from '../components/NavGroup'
import Footer from '../components/Footer'

export default function Blog() {
  let { title } = attributes;
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>

      <NavGroup home />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Blog
        </h1>

        
        <div className={styles.content}>
            <p className={styles.textCenter}>Working on it! 👨🏻‍💻</p>
            <p className={styles.textCenter}><a href="https://colbyhemond.netlify.app/blog">Visit the old blog here</a> ➡️</p>
        </div>
    
      </main>

      <Footer/>
    </div>
  )
}
