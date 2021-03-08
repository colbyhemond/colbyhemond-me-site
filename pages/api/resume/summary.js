// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const summary = [
    {
      description: 'Colby has over 6 years experience working as a software developer. He has worked on multiple enterprise wide software implementation projects that integrate with many other systems. He started out as an SAP ABAP developer focusing on back-end development, and is striving to become a full stack web developer with a focus on React and Node.js. He has worked remotely or in remote offices since 2016, and has worked from home since September 2019. Because of this he has become comfortable with communicating asynchronously and maintaining contact with teammates and managers to stay in the loop.'
    }
  ]
  export default (req, res) => {
    res.statusCode = 200
    res.json(summary)
  }