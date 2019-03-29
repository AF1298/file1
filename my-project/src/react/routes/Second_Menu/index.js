module.exports = {
  path: 'Second_Menu',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Second_Menu'))
    })
  }
}
