// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const resume = {
    summary: {
        description: 'Colby has over 8 years experience working as a software developer. He has worked on multiple enterprise wide software implementation projects that integrate with many other systems. He started out as an SAP ABAP developer focusing on back-end development, and throughout his career he has built up his web development skills as well. He has worked remotely in some capacity since 2016, because of this he has become comfortable with communicating asynchronously and maintaining contact with teammates and managers to stay in the loop.'
    },
    experience: [
            {
                id: 1,
                company: 'Meijer',
                dateStart: '2010-01-01T12:00:00.000Z',
                dateEnd: '2013-05-01T12:00:00.000Z',
                jobTitle: 'Produce Clerk',
                duties: [
                    { id: 1, duty: 'Assist customers in the produce department to help them find what they need so that they have an enjoyable shopping experience'},
                    { id: 2, duty: 'Restock produce items in a neat and organized way so that the floor remains full and looks appealing to customers'},
                    { id: 3, duty: 'Manage inventory of produce items on the floor and in the stock room so that the produce department can maintain the items available for customers'}
                ],
                skills: ["Customer Service", "Inventory Techniques", "Fruit and Vegetable Cutting Techniques"]
            },
            {
                id: 2,
                company: 'Central Michigan University',
                dateStart: '2013-01-01T12:00:00.000Z',
                dateEnd: '2014-05-01T12:00:00.000Z',
                jobTitle: 'Lab Consultant',
                duties: [
                    { id: 1, duty: 'Resolve and Document issues with computer lab equipment so that the computer lab remains functioning properly'}
                ],
                skills: ["Customer Support", "Printing Administration"]
            },
            {
                id: 3,
                company: 'Central Michigan University',
                dateStart: '2012-01-01T12:00:00.000Z',
                dateEnd: '2014-05-01T12:00:00.000Z',
                jobTitle: 'Tutor',
                duties: [
                    { id: 1, duty: 'Tutor students on SAP software and standard business processes including accounting fundamentals associated to the processes so that they learn and are prepared for their SAP related classes'}
                ],
                skills: ["Teaching"]
            },
            {
                id: 4,
                company: 'Central Michigan University',
                dateStart: '2014-05-05T12:00:00.000Z',
                dateEnd: '2014-05-16T12:00:00.000Z',
                jobTitle: 'SAP Certification Assistant',
                duties: [
                    { id: 1, duty: 'Assist teacher of SAP Certification course with clerical tasks so that they can focus on teaching the students'}
                ],
                skills: ["SAP Software", "Teaching"]
            },
            {
                id: 5,
                company: 'Auto Owners Insurance',
                dateStart: '2014-06-02T12:00:00.000Z',
                dateEnd: '2017-09-01T12:00:00.000Z',
                jobTitle: 'Software Developer',
                duties: [
                    { id: 1, duty: 'Maintain existing SOAP web service integrations and documentation so that the front-end development team can implement them exposing functionality to the web pages'},
                    { id: 2, duty: 'Communicate with teams from integrating systems to ensure data consistency, integrations expectations, and support'},
                    { id: 3, duty: 'Teach and Lead teammates in various small projects from a remote office using phone, WebEx, and Slack'}
                ],
                skills: ["SAP Software", "ABAP Programming Language", "SOAP Web Services", "Object Oriented Programming", "Agile Project Management Methodologies", "Test Driven Development", "Pair Programming", "Design Patterns"]
            },
            {
                id: 6,
                company: 'Auto Owners Insurance',
                dateStart: '2017-06-02T12:00:00.000Z',
                dateEnd: '2019-09-01T12:00:00.000Z',
                jobTitle: 'Sr. Software Developer',
                duties: [
                    { id: 1, duty: 'Maintain existing SOAP web service integrations and documentation so that the front-end development team can implement them exposing functionality to the web pages'},
                    { id: 2, duty: 'Communicate with teams from integrating systems to ensure data consistency, integrations expectations, and support'},
                    { id: 3, duty: 'Teach and Lead teammates in various small projects from a remote office using phone, WebEx, and Slack'}
                ],
                skills: ["SAP Software", "ABAP Programming Language", "SOAP Web Services", "Object Oriented Programming", "Agile Project Management Methodologies", "Test Driven Development", "Pair Programming", "Design Patterns"]
            },
            {
                id: 7,
                company: 'Pennsylvania Statue University',
                dateStart: '2019-09-01T12:00:00.000Z',
                dateEnd: '2021-07-01T12:00:00.000Z',
                jobTitle: 'Integration Developer',
                duties: [
                    { id: 1, duty: 'Maintain existing integration points (OData REST and batch files) so that connecting systems have reliable access points to send and receive data'},
                    { id: 2, duty: 'Assist in reports development and bug fixing so that the development team can keep up on backlog'},
                    { id: 3, duty: 'Create and Maintain documentation for integrations and other programming changes so that end users and developers have the most up to date information about the logic and functionality'}
                ],
                skills: ["SAP Software", "ABAP Programming Language", "OData REST services", "Object Oriented Programming", "Test Driven Development", "UI5 JavaScript Library", "Remote working", "Asynchronous Communication"]
            },
            {
                id: 8,
                company: 'Colby Hemond LLC',
                dateStart: '2020-08-01T12:00:00.000Z',
                dateEnd: null,
                jobTitle: 'Web Developer',
                duties: [
                    { id: 1, duty: 'Develop websites for customers so that they can build their online presence for their small business'},
                    { id: 2, duty: 'Streamline and automate customer’s business processes using development and no-code techniques'},
                    { id: 3, duty: 'Provide the best customer service possible so that I can build strong relationships and maintain a good reputation'}
                ],
                skills: ["Sales", "Accounting", "Marketing", "Project Management", "Customer Service/Support", "Remote Communication"]
            },
            {
                id: 9,
                company: 'TekSystems - Auto-Owners Insurance',
                dateStart: '2021-07-01T12:00:00.000Z',
                dateEnd: '2022-08-26T12:00:00.000Z',
                jobTitle: 'SAP ABAP Consultant',
                duties: [
                    { id: 1, duty: 'Maintain existing SOAP web service integrations and documentation so that the front-end development team can implement them exposing functionality to the web pages'},
                    { id: 2, duty: 'Communicate with teams from integrating systems to ensure data consistency, integrations expectations, and support'},
                    { id: 3, duty: 'Teach and Lead teammates in various small projects from a remote office using phone, WebEx, and Slack'}
                ],
                skills: ["SAP Software", "ABAP Programming Language", "SOAP Web Services", "Object Oriented Programming", "Agile Project Management Methodologies", "Test Driven Development", "Pair Programming", "Design Patterns"]
            },
            {
                id: 10,
                company: 'Bowdark Consulting',
                dateStart: '2022-09-15T12:00:00.000Z',
                dateEnd: null,
                jobTitle: 'SAP Senior Technical Consultant',
                duties: [
                    { id: 1, duty: "Assist in solution implementation into client's software ecosystem"},
                    { id: 2, duty: "Communicate experiences and learning through blog posts"},
                ],
                skills: ["SAP Software", "ABAP Programming Language", "SAP UI5"]
            }
    ],
    education: {
        schools: [{
                school: 'Central Michigan University',
                location: 'Mount Pleasant, MI',
                degree: 'Bachelors of Science in Business Administration',
                major: 'Business Information Systems',
                minor: null,
                concentration: 'Enterprise Software Systems',
                gpa: '3.49',
                courswork: ['Application Development (Visual Basic .NET)', 'ABAP/4 Programming Fundamentals', 'Database Management Systems', 'Decision Support Systems and Business Intelligence', 'Business Computer Networking', 'SAP Enterprise Software: Integrated Business Processes', 'SAP Configuration and Implementation'],
                involvements: ['Men\'s Volleyball Club', 'SAP Student User Group'],
                dateStart: '2011-08-01T12:00:00.000Z',
                dateEnd: '2014-05-01T12:00:00.000Z'
            },
            {
                school: 'Muskegon Community College',
                location: 'Muskegon, MI',
                degree: 'Transfer Credits',
                major: null,
                minor: null,
                concentration: 'Graphic Design',
                gpa: null,
                courswork: ['Graphic Arts classes using Adobe Illustrator and Adobe PhotoShop', 'Art Classes involving drawing with pencil and charcoal'],
                involvements: null,
                dateStart: '2009-08-01T12:00:00.000Z',
                dateEnd: '2011-05-01T12:00:00.000Z'
            }
        ],

        certifications: [{
                certification: 'C_TAW12_740 SAP Certified Development Associate - ABAP with SAP NetWeaver 7.40',
                date: '2018-05-01T12:00:00.000Z',
                description: 'SAP ABAP Developer Certification'
            },
            {
                certification: 'C_TERP10_65 SAP Certified - Associate Business Foundation & Integration with SAP ERP 6.0 EHP5',
                date: '2013-06-01T12:00:00.000Z',
                description: 'SAP Software and Integration of Business Processes'
            }
        ],

        additional: [{
                certification: 'C_TAW12_740 SAP Certified Development Associate - ABAP with SAP NetWeaver 7.40',
                date: '2018-05-01T12:00:00.000Z',
                description: 'SAP ABAP Developer Certification'
            },
            {
                certification: 'C_TERP10_65 SAP Certified - Associate Business Foundation & Integration with SAP ERP 6.0 EHP5',
                date: '2013-06-01T12:00:00.000Z',
                description: 'SAP Software and Integration of Business Processes'
            }
        ]
    },
    projects: [
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
            project: 'Rise and Shine Goals',
            type: 'Web App',
            status: 'Complete',
            creationDate: '2021-010-01T12:00:00.000Z',
            description: "Rise and Shine Goals was implemented with Dartmouth Geisel School of Medicine and Dartmouth Medical Center's Internal Medicine Residence program. The application allows Medical Students to submit weekly goals, then at the end of the week they evaluate themselves and their supervising Resident evaluates them. Admins will be able to view reports and progress. Airtable is used as a database, and is connected to the website via the Airtable API. Airtable is utilized to easily create views for reports and to automate record creation and notifications.",
            technologies: ['React', 'Next.js', 'Netlify Identity', 'Netlify', 'AirTable'],
            URL: 'https://elegant-mcnulty-986ed9.netlify.app/',
            gitRepository: 'https://github.com/colbyhemond/dh-goals'
        }
    ]
}

 export const getResume = (req, res) => {

    return resume
  }
