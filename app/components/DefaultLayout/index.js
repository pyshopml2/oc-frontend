/**
 *
 * DefaultLayout
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import BasicLayout from '../../containers/BasicLayout/index'

const DefaultLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <BasicLayout>
        <Component {...matchProps} />
      </BasicLayout>
    )} />
  )
};

DefaultLayout.propTypes = {};

export default DefaultLayout;
