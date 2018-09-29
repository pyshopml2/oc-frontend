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
import { Table, Checkbox } from 'antd';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectRolesPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import BasicLayout from '../BasicLayout/Loadable';

const roles = [
  'Системный администратор',
  'Руководитель отдела продаж',
  'Бухгалтер',
  'Менеджер продаж',
  'Трейд-маркетолог',
  'Начальник склада',
];

const columns = [
  {
    title: '',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Просмотр всех клиентов',
    dataIndex: 'canViewAllClients',
    key: 'canViewAllClients',
    align: 'center',
  },
  {
    title: 'Просмотр только своих клиентов',
    dataIndex: 'canViewOnlyOwnClients',
    key: 'canViewOnlyOwnClients',
    align: 'center',
  },
  {
    title: 'Просмотр всех задач',
    dataIndex: 'canViewAllTasks',
    key: 'canViewAllTasks',
    align: 'center',
  },
  {
    title: 'Просмотр только своих задач',
    dataIndex: 'canViewOnlyOwnTasks',
    key: 'canViewOnlyOwnTasks',
    align: 'center',
  },
  {
    title: 'Добавление клиента',
    dataIndex: 'canAddClient',
    key: 'canAddClient',
    align: 'center',
  },
  {
    title: 'Редактирование клиента',
    dataIndex: 'canEditClient',
    key: 'canEditClient',
    align: 'center',
  },
];

const dataSourse = [];

const row = [];

columns.forEach(column => {
  if (column.dataIndex !== 'name') {
    row[column.dataIndex] = <Checkbox />;
  }
});

roles.forEach(role => {
  dataSourse.push({ name: role, ...row });
});

/* eslint-disable react/prefer-stateless-function */
export class RolesPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Table
          dataSource={dataSourse}
          columns={columns}
          style={{ margin: '30px' }}
          pagination={false}
        />
      </React.Fragment>
    );
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
