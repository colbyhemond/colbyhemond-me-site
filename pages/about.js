import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { attributes, react as HomeContent } from '../content/home.md';
import HomeButton from '../components/HomeButton'
import Footer from '../components/Footer'

export default function About() {
  let { title } = attributes;
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>

      <HomeButton/>

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
        <p>Hey! I'm Colby</p>
        <p>I'm a developer currently working on contract as an ABAP Programmer with Pennsylvania State University. I also like to create websites during his free time through my side business, Colby Hemond LLC. </p>
        <p>I love the challenge that programming brings, because there's always a problem to be solved.</p>
        <p>I currently live in New Hampshire with my beautiful wife, Emily, and our dog, Chance. I hav also lived in other various parts of the United States: Connecticut, California, and Michigan. When I am not coding, I can be found snowboarding, mountain biking, hiking, or checking out a new brewery.</p>
        <p>I don't want to settle for good enough. I want to keep pushing to be better, make better things.</p>
        </div>
    
      </main>

      <Footer/>
    </div>
  )
}
