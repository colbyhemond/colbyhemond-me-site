import Head from 'next/head'
import Link from 'next/link'
import NavGroup from '../components/NavGroup'
import Image from 'next/image'
import {getLatestPostSummary} from './api'
import Card from '../components/Card'

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <NavGroup />
      <div className='uppercase mt-40 mb-20'>
        <h1 className='text-4xl md:text-7xl flex justify-center'>
          <span className='font-light'>Colby</span><span className='font-bold'>Hemond</span>
        </h1>
       
      </div>

      <div className='mb-10 flex flex-col items-center underline'>
        <Link href='https://www.linkedin.com/in/colbyhemond/' target='_blank' rel='noopener noreferrer'>
          Go to my LinkedIn ➜
        </Link>
        <Link href='/contact'>
          Send me a message ➜
        </Link>
      </div>

      <div className='flex flex-wrap items-center justify-center w-full max-w-[1000px]'>

      <Card href='/about'>
          <div className='flex'>
            <div className='flex place-content-center'>
              <Image src="/images/headshot.png" alt="Colby Hemond" width='250' height='250' className='rounded-lg'></Image>
            </div>
            <span className='absolute bg-black text-white z-50 mt-32 ml-3 font-bold text-4xl uppercase'>About</span>
          </div>
        </Card>

        <Card href='resume'>
          <span className='absolute bg-white z-50 mt-32 ml-3 font-bold text-4xl uppercase'>Résumé</span>
        </Card>

        <Card href="/blog">
          <span className='absolute bg-white z-50 mt-32 ml-3 font-bold text-4xl uppercase'>Blog</span>
          <div className='overflow-hidden max-h-full'>
            <div className='relative'>{props.summary}</div>
          </div>
        </Card>

      </div>

    </>
  )
}

export async function getStaticProps(context) {
  const summary = await getLatestPostSummary()
  return {
    props: {
      summary: summary,
    }
  }
}