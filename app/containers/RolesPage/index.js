/**
 *
 * RolesPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectRolesPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import BasicLayout from '../BasicLayout/Loadable';

/* eslint-disable react/prefer-stateless-function */
export class RolesPage extends React.Component {
  render() {
    return <BasicLayout />;
  }
}

RolesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  rolespage: makeSelectRolesPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'rolesPage', reducer });
const withSaga = injectSaga({ key: 'rolesPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(RolesPage);
