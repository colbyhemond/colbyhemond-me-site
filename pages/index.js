import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { attributes, react as HomeContent } from '../content/home.md';

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
        {/* <div className={styles.row}> */}
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
        {/* </div> */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
