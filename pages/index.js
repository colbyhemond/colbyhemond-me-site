import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { attributes, react as HomeContent } from '../content/home.md';
import Footer from '../components/Footer'

export default function Home() {
  let { title } = attributes;
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Colby Hemond
        </h1>

        <div className={styles.grid}>
        <Link href="/about">
          <div className={styles.card}>
          <div className={styles.image}>
            <img src="/images/headshot.png" alt="Colby Hemond"></img>
            <span className={styles.cardTitle}>About</span>
            </div>
          </div>
          </Link>
          <Link href="/resume">
          <div className={styles.card}>
          <span className={styles.cardTitleDark}>Resume</span>
          </div>
          </Link>
        </div>
      </main>

     
      <Footer/>
    </div>
  )
}
