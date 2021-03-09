// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const education = [
    {
        school: 'Central Michigan University',
        location: 'Mount Pleasant, MI',
        degree: 'Bachelors of Science in Business Administration',
        major: 'Business Information Systems',
        minor: null,
        concentration: 'Enterprise Software Systems',
        gpa: '3.49',
        courswork: ['Application Development (Visual Basic .NET)', 'ABAP/4 Programming Fundamentals','Database Management Systems', 'Decision Support Systems and Business Intelligence', 'Business Computer Networking', 'SAP Enterprise Software: Integrated Business Processes', 'SAP Configuration and Implementation'],
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
        courswork: ['Graphic Arts classes using Adobe Illustrator and Adobe PhotoShop', 'Art Classes involving drawing with pencil and charcoal' ],
        involvements: null,
        dateStart: '2009-08-01T12:00:00.000Z',
        dateEnd: '2011-05-01T12:00:00.000Z'
    }
  ]

  const certifications = [
      {
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

  const additional = [
    {
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
  export default (req, res) => {
    res.statusCode = 200
    res.json(education)
  }