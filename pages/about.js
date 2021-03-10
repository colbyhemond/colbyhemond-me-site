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
        
        <div className={styles.content}>
        <p>Hey! I'm Colby.</p>
        <p>I'm currently working on contract as an SAP ABAP Developer with Pennsylvania State University. However, I'm making a transition to full time web development. I enjoy both frontend and backend development; frontend fulfills my creative/design itch, whereas backend allows my brain to use its logical, structured aspects.</p>
        <p>I love the challenge that programming brings, because there's always a problem to be solved and you get to use your creativity to solve that problem they way that you like.</p>
        <p>I live in New Hampshire with my beautiful wife, Emily, and our dog, Chance. I have also lived in other various parts of the United States: Connecticut, California, and Michigan. When I am not coding, I can be found snowboarding, mountain biking, hiking, or checking out a new brewery.</p>
        <p>I don't like to be complacent. I like to constantly be learning and growing. I always want to keep pushing to be better, and do better.</p>
        </div>
    
      </main>

      <Footer/>
    </div>
  )
}
