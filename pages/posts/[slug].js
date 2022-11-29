import { getPostBySlug, getAllPosts } from "../api/index"
import Head from 'next/head'
import NavGroup from '../../components/NavGroup'
import PostHeader from '../../components/PostHeader'
import PostBody from '../../components/PostBody'
import markdownToHtml from '../../lib/markdownToHtml'


export default function Post({post}) {

  return (
    <>
      <Head>
        <title>
          {post.title}
        </title>
        <meta name="description" content={post.title} />
        <meta name="author" content={post.author}/>
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