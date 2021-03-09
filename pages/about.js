import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { attributes, react as HomeContent } from '../content/home.md';

export default function About() {
  let { title } = attributes;
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          About
        </h1>

        {/* <div className={styles.grid}>
          <div className={styles.card}>
          <div className={styles.image}>
            <img src="/images/headshot.png" alt="Colby Hemond"></img>
            <span className={styles.cardTitle}>About</span>
            </div>
          </div>
          <div className={styles.card}>
          <span className={styles.cardTitleDark}>Resume</span>
          </div>
        </div> */}
        <div className={styles.content}>
        <p>Colby Hemond is a developer currently working on contract as an ABAP Programmer with Pennsylvania State University. Colby also creates websites during his free time through his side business, Colby Hemond LLC. </p>
        <p>Colby loves the challenge that programming brings, because there's always a problem to be solved.</p>
        <p>Colby currently lives in New Hampshire with his beautiful wife, Emily, and their dog, Chance. He has also lived in other various parts of the United States: Connecticut, California, and Michigan. When he is not coding, Colby can be found snowboarding, mountain biking, hiking, or checking out a new brewery.</p>
        </div>
    
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
