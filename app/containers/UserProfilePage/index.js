/**
 *
 * UserProfilePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Card } from 'antd';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectUserProfilePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import BasicLayout from '../BasicLayout/Loadable';

/* eslint-disable react/prefer-stateless-function */
export class UserProfilePage extends React.Component {
  render() {
    return (
      <BasicLayout>
        <div style={{ margin: '15px' }}>
          <Card title="Профиль" loading={false}>
            content
          </Card>
        </div>
      </BasicLayout>
    );
  }
}

UserProfilePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  userprofilepage: makeSelectUserProfilePage(),
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

const withReducer = injectReducer({ key: 'userProfilePage', reducer });
const withSaga = injectSaga({ key: 'userProfilePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(UserProfilePage);
