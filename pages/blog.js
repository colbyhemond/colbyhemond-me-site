import Head from 'next/head'
import Link from 'next/link'
import stylesHome from '../styles/Home.module.css'
import stylesBlog from '../styles/Blog.module.css'
import { attributes } from '../content/home.md'
import NavGroup from '../components/NavGroup'
import Footer from '../components/Footer'
import { getAllPosts } from './api/index'

export default function Blog(props) {
  let { title } = attributes;

  return (
    <div className={stylesHome.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>

      <NavGroup home />
      <h1 className={stylesHome.title}>
          Blog
        </h1>
      <main className={stylesHome.main}>
        
      <div className={stylesHome.content}>
        {props.posts.map(function(post, idx) {
          return (
            <div key={idx} className={stylesBlog.postSummary}>
              <Link href={'/posts/'+post.slug}>
                <a className={stylesBlog.linkTitle}>{post.title}</a>
              </Link>
          <p><small>{post.date}</small></p>
              <p>{post.summary}</p>
            </div>
          )
        })}
 
        </div>
      </main>
      

      <Footer/>
    </div>
  )
}


export async function getStaticProps() {
  const allPosts = await getAllPosts()

  return {
    props: {
      posts: allPosts,
    }
  }
}
