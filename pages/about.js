import Head from 'next/head'
import NavGroup from '../components/NavGroup'

export default function About() {
  return (
    <>
    <Head>
        <title>About</title>
      </Head>

      <NavGroup home />
      <h1 className='text-5xl mt-28 mb-20'>
          About
        </h1>

        <div className='prose'>
          <p>Hey! I&apos;m Colby.</p>
          <p>I&apos;m currently working on contract as an SAP ABAP Developer with Pennsylvania State University. However, I&apos;m making a transition to full time web development. I enjoy both frontend and backend development; frontend fulfills my creative/design itch, whereas backend allows my brain to use its logical, structured aspects.</p>
          <p>I love the challenge that programming brings, because there&apos;s always a problem to be solved and you get to use your creativity to solve that problem they way that you like.</p>
          <p>I live in New Hampshire with my beautiful wife, Emily, and our dog, Chance. I have also lived in other various parts of the United States: Connecticut, California, and Michigan. When I am not coding, I can be found snowboarding, mountain biking, hiking, or checking out a new brewery.</p>
          <p>I don&apos;t like to be complacent. I like to constantly be learning and growing. I always want to keep pushing to be better, and do better.</p>
        </div>
    </>
  )
}
