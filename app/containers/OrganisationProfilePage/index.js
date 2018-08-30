/**
 *
 * OrganisationProfilePage
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
import makeSelectOrganisationProfilePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import BasicLayout from '../BasicLayout/Loadable';

/* eslint-disable react/prefer-stateless-function */
export class OrganisationProfilePage extends React.Component {
  render() {
    return (
      <BasicLayout>
        <FormattedMessage {...messages.header} />
      </BasicLayout>
    );
  }
}

OrganisationProfilePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  organisationprofilepage: makeSelectOrganisationProfilePage(),
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

const withReducer = injectReducer({ key: 'organisationProfilePage', reducer });
const withSaga = injectSaga({ key: 'organisationProfilePage', saga });

export default compose(withConnect)(OrganisationProfilePage);
