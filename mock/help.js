const { mock } = require('mockjs')

function responseWrapper(data) {
  return mock({
    code: 0,
    msg: '请求成功',
    data
  })
}

module.exports = {
  responseWrapper
}
