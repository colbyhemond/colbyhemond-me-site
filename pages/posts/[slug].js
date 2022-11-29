import { getPostBySlug, getAllPosts } from "../api/index"
import Head from 'next/head'
import NavGroup from '../../components/NavGroup'
import PostHeader from '../../components/PostHeader'
import PostBody from '../../components/PostBody'
import markdownToHtml from '../../lib/markdownToHtml'
import OpenGraphImage from "../../components/OpenGraphImage"


export default function Post({post}) {

  const convertToUrl = (text) => {
    let urlText
    urlText = text.replace(/ /g, '%20')
    urlText = urlText.replace(/,/g, '%2C')
    urlText = urlText.replace(/!/g, '%21')
    return urlText
}

let text = convertToUrl(post.title).toUpperCase()
let ogUrl = `https://res.cloudinary.com/dhhijcjym/image/upload/c_fill,w_2400,h_1200,g_center/w_2000,c_fit,l_text:Montserrat_100_bold:${text},/fl_layer_apply,fl_no_overflow/f_auto/q_auto/v1/images/white`

  return (
    <>
      <Head>
        <title>
          {post.title}
        </title>
        <meta name="description" content={post.title} />
        <meta name="author" content={post.author}/>

        {/*<!-- Facebook Meta Tags -->*/}
        <meta property="og:url" content={`https://colbyhemond.me/posts/${post.slug}`}/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content={post.title}/>
        <meta property="og:description" content={post.summary}/>
        <meta property="og:image" content={ogUrl}/>

        {/*<!-- Twitter Meta Tags -->*/}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="colbyhemond.me"/>
        <meta property="twitter:url" content={`https://colbyhemond.me/posts/${post.slug}`}/>
        <meta name="twitter:title" content={post.title}/>
        <meta name="twitter:description" content={post.summary}/>
        <meta name="twitter:image" content={ogUrl}/>
        <meta property="twitter:site" content="@colbyhemond" />
        
      </Head>
      <NavGroup home back />
        
      <PostHeader
        title={post.title}
        coverImage={post.coverImage}
        date={post.date}
        author={post.author}
      />
      <PostBody content={post.content} />

    </>
  )
}

export async function getStaticProps({ params }) {
  let post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])

  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])
  
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}