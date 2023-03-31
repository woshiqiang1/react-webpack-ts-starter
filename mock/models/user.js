const { responseWrapper } = require('../help')

const userAPT = {
  'GET /mock/api/account': (req, res) => {
    return res.json(
      responseWrapper({
        name: 'Alice',
        password: 'test123'
      })
    )
  }
}

module.exports = userAPT
