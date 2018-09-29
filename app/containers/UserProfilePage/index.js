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
import {Card, List, Tooltip, Button, Modal, Input} from 'antd';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectUserProfilePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import BasicLayout from '../BasicLayout/Loadable';

const timeZone = new Date().getTimezoneOffset();

const data = [
  {
    title: 'ФИО',
    body: 'Иванов Иван Иванович',
  },
  {
    title: 'Дата рождения',
    body: '01/01/1991',
  },
  {
    title: 'Email',
    body: '1@1.com',
  },
  {
    title: 'Часовой пояс',
    body: 'GMT ' + timeZone/60 + ' hours ' + timeZone%60 + ' minutes',
  },
];

function showModal() {
  Modal.confirm({
    title: 'Сменить пароль',
    content: (
      <div>
        <Input addonBefore="Новый пароль" style={{ marginBottom: 16, marginTop: 16 }}/>
        <Input addonBefore="Повторите пароль" style={{ marginBottom: 16 }} />
      </div>
    ),
    onOk() {},
    onCancel() {},
  });
}

/* eslint-disable react/prefer-stateless-function */
export class UserProfilePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ margin: '15px' }}>
          <Card title="Профиль пользователя" extra = {
            <Tooltip title="Изменить пароль">
              <Button icon="dashboard" style={{ margin: '0 20px' }} onClick={showModal} />
            </Tooltip>
          } loading={false}>
            <List
              dataSource={data}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    title={<strong>{item.title}:</strong>}
                    description = {item.body}
                  />
                </List.Item>
              )}
            />
          </Card>
        </div>
      </React.Fragment>
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

const withSaga = injectSaga({ key: 'userProfilePage', saga });

export default compose(
  withSaga,
  withConnect,
)(UserProfilePage);
