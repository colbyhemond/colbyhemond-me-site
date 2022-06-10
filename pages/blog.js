import Head from 'next/head'
import Link from 'next/link'
import NavGroup from '../components/NavGroup'
import { getAllPosts } from './api/index'

export default function Blog({allPosts}) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>

      <NavGroup home />

      <h1 className='text-5xl mt-28 mb-10'>
        Blog
      </h1>
        
      <div className='w-full'>
        {allPosts.map(function(post, idx) {
          return (
            <div key={idx} className='flex flex-col items-center my-10'>
              <Link href={'/posts/'+post.slug}>
                <a className='text-3xl uppercase font-bold text-gray-600 text-center 
                              hover:text-orange-300 max-w-[600px]'>
                  {post.title}
                </a>
              </Link>
              <p><small>{new Date(post.date).toDateString()}</small></p>
              <p className='text-center max-w-[600px]'>{post.summary.slice(0,100)}...</p>
            </div>
          )
        })}
 
        </div>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'content',
    'summary'
  ])

  return {
    props: { allPosts },
  }
}
