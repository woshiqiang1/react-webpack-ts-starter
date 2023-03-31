const userAPI = require('./models/user')

const proxy = {
  ...userAPI
}

module.exports = proxy
