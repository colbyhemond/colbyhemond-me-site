import Head from 'next/head'
import NavGroup from '../components/NavGroup'

export default function Contact() {
  return (
    <>
    <Head>
        <title>Contact</title>
      </Head>

      <NavGroup home />

      <h1 className='text-5xl mt-28 mb-10'>
          Contact
        </h1>
      
            <form name='contact' method='POST' data-netlify="true" action='/success' data-netlify-honeypot="bot-field" className='w-11/12 md:w-1/2 lg:1/4'>
            <input type="hidden" name="form-name" value="contact" />
                <p className="hidden" hidden>
                    <label>
                    Don’t fill this out if you’re human: <input name="bot-field" />
                    </label>
                </p>
                <p className='flex flex-col w-full'>
                    <label htmlFor='name'>Name</label>
                    <input className='border' name='name' id='name' type='text' required></input>
                </p>
                <p className='flex flex-col w-full'>
                    <label htmlFor='email'>Email</label>
                    <input className='border' name='email' id='email' type='email' required></input>
                </p>
                <p className='flex flex-col w-full'>
                    <label htmlFor='message'>Message</label>
                    <textarea className='border' rows='5' name='message' id='message' required></textarea>
                </p>
                <p className='w-full flex justify-center'>
                    <input className='border-4 mt-5 px-3 py-1 border-gray-600 cursor-pointer' type='submit' value='Send It!'></input>
                </p>
            </form>

    </>
  )
}
