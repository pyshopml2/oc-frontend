/**
 *
 * SettingsPage
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
import makeSelectSettingsPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import BasicLayout from '../BasicLayout/Loadable';

/* eslint-disable react/prefer-stateless-function */
export class SettingsPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>settings page</div>
      </React.Fragment>
    );
  }
}

SettingsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  settingspage: makeSelectSettingsPage(),
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

const withSaga = injectSaga({ key: 'settingsPage', saga });

export default compose(
  withSaga,
  withConnect,
)(SettingsPage);
