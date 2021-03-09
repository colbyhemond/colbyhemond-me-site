// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const projects = [
    {
        id: 1,
        project: 'BIS Capstone Project',
        type: 'Web App',
        status: 'Demo',
        creationDate: '2014-05-01T12:00:00.000Z',
        description: 'Developed a mobile inventory system for a first aid supply company, up to a demo release state. Also, documented an official user manual for ease of use and reference to functionality.',
        technologies: ['Python', 'Django', 'jQuery', 'SQLite'],
        URL: null,
        gitRepository: null
    },
    {
        id: 2,
        project: 'Wasatch Request Form',
        type: 'Web App',
        status: 'Demo',
        creationDate: '2019-10-01T12:00:00.000Z',
        description: 'This was a small simple app created to get experience with React and Node, while also creating a simple API to pass form values from the front end to the backend so that Node can use nodemailer to send an email with the form information. A service worker and other attributes were added to try out creating a Progressive Web App.',
        technologies: ['React', 'Node.js', 'Express', 'Heroku'],
        URL: null,
        gitRepository: null
    },
    {
        id: 3,
        project: 'Pine Bark Boarding & Grooming',
        type: 'Website',
        status: 'Complete',
        creationDate: '2021-02-28T12:00:00.000Z',
        description: 'Pine Bark Boarding is a dog boarding and grooming business in Michigan. They needed a standard static website to expand their web presence from Facebook. Netlify CMS was used to create a simple CMS for them to update content without having to worry about any styling issues.',
        technologies: ['React', 'Next.js', 'Netlify CMS', 'Netlify'],
        URL: 'https://pinebarkboardingandgrooming.com',
        gitRepository: 'https://github.com/colbyhemond/pinebark-site'
    },
    {
        id: 4,
        project: 'DH Goals',
        type: 'Web App',
        status: 'In Progress',
        creationDate: '2021-010-01T12:00:00.000Z',
        description: 'DH-Goals is a demo project currently being worked on to allow Medical Students submit weekly goals, then at the end of the week they evaluate themselves and their supervising Resident evaluates them. Admins will be able to view reports and progress. Airtable is used as a database, and is connected to the website via the Airtable API. Airtable is utilized to easily create views for reports and to automate record creation and notifications.',
        technologies: ['React', 'Next.js', 'Netlify Identity', 'Netlify', 'AirTable'],
        URL: 'https://elegant-mcnulty-986ed9.netlify.app/',
        gitRepository: 'https://github.com/colbyhemond/dh-goals'
    }
      
  ]
  export default (req, res) => {
    res.statusCode = 200
    res.json(projects)
  }