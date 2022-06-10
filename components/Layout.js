import Footer from './Footer'
import Head from 'next/head'

const Layout = ({children}) => {
    return (<>
        <Head>
            <link rel="icon" href="/favicon.ico" key='favicon'/>
        </Head>
        <div className='flex flex-col'>
            <main className='flex flex-col items-center min-h-[100vh] px-5'>
                {children}
            </main>
            <Footer/>
        </div>
    </>)
}

export default Layout