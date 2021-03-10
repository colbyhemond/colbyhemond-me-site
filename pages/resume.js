import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { attributes, react as HomeContent } from '../content/home.md';
import useSwr from 'swr'
import HomeButton from '../components/HomeButton'
import Footer from '../components/Footer'


const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Resume(props) {
  let { title } = attributes;
  // const sections = ['summary', 'experience', 'education', 'projects']
  
  let { data, error } = useSwr('/api/resume', fetcher)
  if (error) return <div>Failed to load resume</div>
  if (!data) return <div>Loading...</div>
  // const dateStr = JSON.parse(data.projects)
  // console.log(dateStr);
  // var date = new Date(dateStr);
  console.log(data.projects);
  let test = data.projects.sort(function(a, b){return b.creationDate-a.creationDate})
  console.log(test);
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeButton/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Resume
        </h1>
        <div className={styles.content}>
          <h2>Summary</h2>
          <p>{data.summary.description}</p>
          <h2>Experience</h2>
          {data.experience.map(job => 
            <>
            <h4>{job.company}</h4>
            <p>{job.jobTitle}</p>
            <p><strong>Start Date: </strong>{job.dateStart}</p>
            { job.dateEnd ? <p><strong>End Date: </strong>{job.dateEnd}</p> : '' }
            <p><strong>Duties: </strong><ul>{job.duties.map(duty=>(<li>{duty.duty}</li>))}</ul></p>
            <p><strong>Skills: </strong>{
              job.skills.map( (skill, i, arr) => {
                if (arr.length - 1 === i) {
                   return skill
                } else {
                   return `${skill}, `
                }
            })
            }</p>
            </>
          )}
          <h2 id="education">Education</h2>
          <h3 id="schools">Schools</h3>
          {data.education.schools.map(school => 
          <>
          <h4>{school.school}</h4>
          <p>{school.location}</p>
          {school.degree ? <p>Degree: {school.degree}</p> : '' }
          {school.gpa ? <p>GPA: {school.gpa}</p> : '' }
          {school.major ? <p>Major: {school.major}</p> : '' }
          {school.minor ? <p>Minor: {school.minor}</p> : '' }
          {school.concentration ? <p>Concentration: {school.concentration}</p> : '' }
          {school.dateStart ? <p>Start Date: {school.dateStart}</p> : '' }
          {school.dateEnd ? <p>End Date: {school.dateEnd}</p> : '' }
          <p>Course Work:</p>
          <ul>{school.courswork.map(course=>(<li>{course}</li>))}</ul>
          { school.involvements ?
            <>
              <p>Involvements:</p>
              <ul>{school.involvements.map(thing=>(<li>{thing}</li>))}</ul>
            </>
            : '' }
          </>
          )}
          <h3>Certifications</h3>
          {data.education.certifications.map(cert => 
          <>
          <h4>{cert.description}</h4>
          <p>Certification: {cert.certification}</p>
          <p>Date: {cert.date}</p>
          
          </>
          )}
          {/* <h3>Additional</h3>
          <p>{data.education.certifications.map(cert => <p>{cert.certification}</p>)}</p> */}
          <h2>Projects</h2>
          <p>{
          data.projects.map(proj => 
          <>
          <h4>{proj.project}</h4>
          <p>Type: {proj.type}</p>
          {/* <p>{proj.status}</p> */}
          <p>{proj.creationDate}</p>
          <p>{proj.description}</p>
          <p>Technologies: {proj.technologies.map((tech, i, arr ) => {
            if (arr.length - 1 === i) {
              return tech
           } else {
              return `${tech}, `
           }
          })}</p>
          {proj.URL ? <p>View Site: <a href={proj.URL}>{proj.URL}</a></p> : ''}
          {proj.gitRepository ? <p>Git Repo: <a href={proj.gitRepository}>{proj.gitRepository}</a></p> : ''}
          </>
          )}</p>
          
        </div>
    
      </main>

      <Footer/>
    </div>
  )
}