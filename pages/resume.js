import Head from 'next/head'
import NavGroup from '../components/NavGroup'
import {getResume} from './api/resume'


export default function Resume({data}) {
  const sortDescending = () => {

  }

  return (
    <>
      <Head>
        <title>Résumé</title>
      </Head>

      <NavGroup home />
      <h1 className='text-5xl my-20'>
          Résumé
        </h1>
      <div className='prose'>
                
          <h2>Summary</h2>
          <p>{data.summary.description}</p>
          <h2>Experience</h2>
          {data.experience.map((job, index) => 
            <div key={index}>
            <h4>{job.company}</h4>
            <p>{job.jobTitle}</p>
            <p><strong>Start Date: </strong>{new Date(job.dateStart).toLocaleDateString()}</p>
            { job.dateEnd ? <p><strong>End Date: </strong>{new Date(job.dateEnd).toLocaleDateString()}</p> : '' }
            <p><strong>Duties: </strong><ul>{job.duties.map((duty, i)=>(<li key={i}>{duty.duty}</li>))}</ul></p>
            <p><strong>Skills: </strong>{
              job.skills.map( (skill, i, arr) => {
                if (arr.length - 1 === i) {
                   return skill
                } else {
                   return `${skill}, `
                }
            })
            }</p>
            </div>
          )}
          <h2 id="education">Education</h2>
          <h3 id="schools">Schools</h3>
          {data.education.schools.map((school, index) => 
          <div key={index}>
          <h4>{school.school}</h4>
          <p>{school.location}</p>
          {school.degree ? <p>Degree: {school.degree}</p> : '' }
          {school.gpa ? <p>GPA: {school.gpa}</p> : '' }
          {school.major ? <p>Major: {school.major}</p> : '' }
          {school.minor ? <p>Minor: {school.minor}</p> : '' }
          {school.concentration ? <p>Concentration: {school.concentration}</p> : '' }
          {school.dateStart ? <p>Start Date: {new Date(school.dateStart).toLocaleDateString()}</p> : '' }
          {school.dateEnd ? <p>End Date: {new Date(school.dateEnd).toLocaleDateString()}</p> : '' }
          <p>Course Work:</p>
          <ul>{school.courswork.map((course, i)=>(<li key={i}>{course}</li>))}</ul>
          { school.involvements ?
            <>
              <p>Involvements:</p>
              <ul>{school.involvements.map((thing, i)=>(<li key={i}>{thing}</li>))}</ul>
            </>
            : '' }
          </div>
          )}
          <h3>Certifications</h3>
          {data.education.certifications.map(cert => 
          <>
          <h4>{cert.description}</h4>
          <p>Certification: {cert.certification}</p>
          <p>Date: {new Date(cert.date).toLocaleDateString()}</p>
          
          </>
          )}

          <h2>Projects</h2>
          <p>{
          data.projects.map((proj, index) => 
          <div key={index}>
          <h4>{proj.project}</h4>
          <p>Type: {proj.type}</p>
          <p>{proj.creationDate ? new Date(proj.creationDate).toLocaleDateString() : 'In Progress'}</p>
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
          </div>
          )}</p>
          
        </div>
 
    </>
  )
}

const sortDesc = (dateA, dateB) => {
  if (dateA < dateB) {
    return 1
  } else {
    return -1
  }
}

export async function getStaticProps() {
  const resume = getResume()

  resume.experience.sort((jobA, jobB) => sortDesc(jobA.dateStart, jobB.dateStart))
  resume.education.schools.sort((schoolA, schoolB) => sortDesc(schoolA.dateStart, schoolB.dateStart))
  resume.projects.sort((projA, projB) => sortDesc(projA.date, projB.date))
  

  return {
    props: { 
      data: resume
     }
  }
}