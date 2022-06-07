import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { attributes, react as HomeContent } from '../content/home.md';
import HomeButton from '../components/HomeButton'
import GitButton from '../components/GitButton'
import NavGroup from '../components/NavGroup'
import Footer from '../components/Footer'

export default function Contact() {
  let { title } = attributes;
  return (
    <>
    <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>

    {/* <div className={styles.navRow}>
      <HomeButton/>
      <GitButton/>
      </div> */}
      <NavGroup home />
      
    <div className={styles.container}>
      

      <main className={styles.main}>
        <h1 className={styles.title}>
          Contact
        </h1>

        <div className={styles.content}>
            <form name='contact' method='POST' data-netlify="true" action="/success">
                <div className="hidden" hidden>
                    <label>
                    Don’t fill this out if you’re human: <input name="bot-field" />
                    </label>
                </div>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input name='name' id='name' type='text'></input>
                </div>
                <div>
                    <label htmlFor='email'>Emaiil</label>
                    <input name='email' id='email' type='email'></input>
                </div>
                <div>
                    <label htmlFor='message'>Message</label>
                    <textarea rows='5' name='message' id='message' type='text'></textarea>
                </div>
                <div className={styles.centerButton}>
                    <button className={styles.button} type='submit'>Send It!</button>
                </div>
            </form>
        </div>
    
      </main>

      <Footer/>
    </div>
    </>
  )
}
