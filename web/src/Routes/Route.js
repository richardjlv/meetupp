import PropTypes from 'prop-types';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import authLayouts from '~/pages/_layouts/auth';
import defaultLayouts from '~/pages/_layouts/default';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { signed } = false;

  const Layout = isPrivate ? defaultLayouts : authLayouts;

  if (isPrivate && !signed) {
    return <Redirect to="/" />;
  }

  if (!isPrivate && signed) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType(PropTypes.element, PropTypes.func).isRequired,
  isPrivate: PropTypes.bool,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
