import React, { Component } from 'react';
import { Route } from 'react-router-dom';

export class FrontendAuth extends Component {
  render() {
    const { location, config } = this.props;
    const { pathname } = location;

    const targetRouterConfig = config.find((v) => v.path === pathname);
    console.log('targetRouterConfig', targetRouterConfig)
    const { component } = targetRouterConfig;
    return <Route exact path={pathname} component={component} />
  }
}