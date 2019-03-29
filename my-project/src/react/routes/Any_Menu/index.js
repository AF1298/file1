module.exports = {
  path: 'Any_Menu',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Any_Menu'))
    })
  }
}
