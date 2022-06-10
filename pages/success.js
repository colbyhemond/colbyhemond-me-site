import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import NavGroup from '../components/NavGroup'
import Footer from '../components/Footer'

export default function Success() {
  let { title } = attributes;
  return (
    <>
    <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>

      <NavGroup home />
      
    <div className={styles.container}>
      

      <main className={styles.main}>

        <div className={styles.textcenter}>
           Thanks for your message! I&apos;ll be in contact soon! <br/>
           
        </div>
        <div>
            <Link href='/'>Return to Home Page</Link>
        </div>
    
      </main>

      <Footer/>
    </div>
    </>
  )
}
