/**
 *
 * CatalogPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectCatalogPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import BasicLayout from '../BasicLayout/Loadable';

/* eslint-disable react/prefer-stateless-function */
export class CatalogPage extends React.Component {
  render() {
      return <BasicLayout />;
    }
}

CatalogPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  catalogpage: makeSelectCatalogPage(),
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

const withReducer = injectReducer({ key: 'catalogPage', reducer });
const withSaga = injectSaga({ key: 'catalogPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CatalogPage);
