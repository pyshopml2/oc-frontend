/**
 *
 * EmployeesPage
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
import makeSelectEmployeesPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import BasicLayout from '../BasicLayout/Loadable';
/* eslint-disable react/prefer-stateless-function */
export class EmployeesPage extends React.Component {
  render() {
      return <BasicLayout />;
    }
  }

EmployeesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  employeespage: makeSelectEmployeesPage(),
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

const withReducer = injectReducer({ key: 'employeesPage', reducer });
const withSaga = injectSaga({ key: 'employeesPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(EmployeesPage);
