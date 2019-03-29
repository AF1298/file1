module.exports = {
  path: 'First_Menu',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/First_Menu'))
    })
  }
}
