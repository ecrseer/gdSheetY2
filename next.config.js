const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    swSrc: 'service-worker.js'
  },
  env:{
      URLTEST: process.env.URLTEST,
      local_TO_HEROKU: process.env.local_TO_HEROKU
  }
})
