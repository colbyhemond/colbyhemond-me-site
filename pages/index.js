import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { attributes, react as HomeContent } from '../content/home.md';
import NavGroup from '../components/NavGroup'
import Footer from '../components/Footer'
import { getLastestPostSummary } from './api';

export default function Home(props) {
  let { title } = attributes;
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavGroup />

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className={styles.titleFirst}>COLBY</span><span className={styles.titleLast}>HEMOND</span>
        </h1>

        <div className={styles.grid}>
        <Link href="/about">
          <div className={styles.card}>
          <div className={styles.image}>
            <div>
              <img src="/images/headshot.png" alt="Colby Hemond"></img>
            </div>
            <span className={styles.cardTitle}>About</span>
            </div>
          </div>
          </Link>
          <Link href="/resume">
          <div className={styles.card}>
          <span className={styles.cardTitleDark}>Resume</span>
          </div>
          </Link>
          <Link href="/blog">
          <div className={styles.card}>
            <span className={styles.cardTitleDark}>Blog</span>
            <div className={styles.cardTextContainer}>
              <div className={styles.cardText}>{props.summary}</div>
            </div>
          </div>
          </Link>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export async function getStaticProps(context) {
  const summary = await getLastestPostSummary()
  return {
    props: {
      summary: summary,
    }
  }
}