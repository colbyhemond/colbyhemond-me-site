import Head from 'next/head'
import Link from 'next/link'
import NavGroup from '../components/NavGroup'

export default function Success() {
  return (
    <>
    <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>

      <NavGroup home />
    
      <div className='w-full h-[90vh] flex flex-col justify-center items-center'>
        <div className='text-center'>
           Thanks for your message! I&apos;ll be in contact soon! <br/>
           
        </div>
        <div className='underline'>
            <Link href='/'>Return to Home Page</Link>
        </div>
      </div>

    </>
  )
}
