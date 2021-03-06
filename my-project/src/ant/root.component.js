import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { showFrameworkObservable, getBorder } from 'src/common/colored-border.js';

// import './stubs/COURSES';

const rootRoute = {
  childRoutes: [ {
    path: 'ant',
    component: require('./components/App'),
    childRoutes: [
      require('./routes/First_Menu'),
      // require('./routes/Course'),
      require('./routes/Any_Menu'),
      require('./routes/Second_Menu'),
      // require('./routes/Profile')
    ]
  } ]
};

export default class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      frameworkInspector: false,
    };
  }
  componentWillMount() {
    this.subscription = showFrameworkObservable.subscribe(newValue => this.setState({frameworkInspector: newValue}));
  }
  render() {
    return (
      <div style={this.state.frameworkInspector ? {border: getBorder('react')} : {}}>
        {this.state.frameworkInspector &&
          <div>(built with React)</div>
        }
        <Router
          history={browserHistory}
          routes={rootRoute}
        />
      </div>
    );
  }
  componentWillUnmount() {
    this.subscription.dispose();
  }
}
