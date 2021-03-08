// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const jobs = [
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
        dateEnd: null,
        jobTitle: 'Software Developer',
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
  ]
  export default (req, res) => {
    res.statusCode = 200
    res.json(jobs)
  }