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
import {Button, Card, Tooltip, List, Input, Icon, Modal} from "antd";

const timeZone = new Date().getTimezoneOffset();

function info() {
  Modal.info({
    title: 'Данные успешно внесены!',
    onOk() {
    },
  });
}

const data = [
  {
    title: 'Название',
    body: 'БСК',
  },
  {
    title: 'Почтовый индекс',
    body: '192000',
  },
  {
    title: 'Почтовый адрес',
    body: 'Невский пр. 105',
  },
  {
    title: 'Населенный пункт',
    body: (
      <div>
        <Input style={{ marginBottom: 16, width: '90%' }}/>
          <Tooltip title="Сохранить">
            <Button icon="check" style={{ margin: '0 20px' }} onClick={info}/>
          </Tooltip>
      </div>
    ),
  },
  {
    title: 'Регион, область',
    body: (
      <div>
        <Input style={{ marginBottom: 16, width: '90%' }}/>
          <Tooltip title="Сохранить">
            <Button icon="check" style={{ margin: '0 20px' }} onClick={info}/>
          </Tooltip>
      </div>
    ),
  },
  {
    title: 'Часовой пояс',
    body: 'GMT ' + timeZone/60 + ' hours ' + timeZone%60 + ' minutes',
  },
  {
    title: 'Сайт компании',
    body: 'mysite.com',
  },
];

/* eslint-disable react/prefer-stateless-function */
export class OrganisationProfilePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ margin: '15px' }}>
          <Card title="Профиль организации" loading={false}>
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

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(OrganisationProfilePage);
