module.exports = {
    reactStrictMode: true,
    async redirects() {
      return [
        {
          source: '/2017/10/05/a-freshers-take-abap-on-sap-cloud-platform',
          destination: '/posts/a-freshers-take-abap-on-sap-cloud-platform',
          permanent: true,
        },
      ]
    },
  }