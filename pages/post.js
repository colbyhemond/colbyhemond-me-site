import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import stylesHome from '../styles/Home.module.css'
import stylesBlog from '../styles/Blog.module.css'
import { attributes } from '../content/home.md'
import NavGroup from '../components/NavGroup'
import Footer from '../components/Footer'

export default function PostLayout(props) {
    let { title } = attributes;
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>

      <NavGroup home back />
      <main className={stylesHome.main}>
        <div className={stylesHome.content}>
          <article className={stylesBlog.article}>
            <h1>{props.title}</h1>
            <span className={stylesBlog.date}>{props.date}</span>
            <div className={stylesHome.divider}></div>
            <ReactMarkdown plugins={[gfm]} children={props.content}/>
          </article>
        </div>
      </main>

      <Footer/>
    </>
  )
}