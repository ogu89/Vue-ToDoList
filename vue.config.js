module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/vue-todoapp/'   //任意
      : '/'
  }