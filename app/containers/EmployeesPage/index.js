/**
 *
 * EmployeesPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Table, Button, Form, Icon } from 'antd';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectEmployeesPage from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

import BasicLayout from '../BasicLayout/Loadable';
import NewEmployeeForm from '../../components/NewEmployeeForm';
import EditEmployeeForm from '../../components/EditEmployeeForm';
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-unused-prop-types */

const dataSource = [
  {
    key: 0,
    name: {
      firstName: 'Иван',
      secondName: 'Иванович',
      lastName: 'Иванов',
    },
    email: 'ya@ya.ru',
    mobile: '8 (911) 1234567',
    position: 'Director',
    status: 'Confirmed',
    isEmailConfirmed: true,
    isBlocked: true,
  },
];

const columns = [
  {
    title: 'ФИО',
    dataIndex: 'name',
    key: 'name',
    render: name => `${name.lastName} ${name.firstName} ${name.secondName}`,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Мобильный',
    dataIndex: 'mobile',
    key: 'mobile',
  },
  {
    title: 'Должность',
    dataIndex: 'position',
    key: 'position',
  },
  {
    title: 'Статус',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Блокирован',
    dataIndex: 'isBlocked',
    key: 'isBlocked',
    align: 'center',
    render: (text, record) =>
      record.isBlocked ? (
        <Icon type="close-circle" theme="twoTone" twoToneColor="#eb2f96" />
      ) : (
        ''
      ),
  },
  {
    title: 'Email подтвержден',
    dataIndex: 'isEmailConfirmed',
    key: 'isEmailConfirmed',
    align: 'center',
    render: (text, record) =>
      record.isEmailConfirmed ? (
        <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
      ) : (
        ''
      ),
  },
];

const MyNewEmployeeForm = Form.create()(NewEmployeeForm);
const MyEditEmployeeForm = Form.create()(EditEmployeeForm);

export class EmployeesPage extends React.Component {
  state = {
    modalNewVisible: false,
    modalEditVisible: false,
    confirmLoading: false,
    rowId: null,
  };

  render() {
    return (
      <BasicLayout>
        <div>
          <Button
            onClick={this.showModal}
            type="primary"
            style={{ marginBottom: 16, marginTop: 20, display: 'inline-block' }}
          >
            Новый сотрудник
          </Button>
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            onRow={record => ({
              onClick: () => {
                this.showModal(record);
              },
            })}
          />
        </div>
        <div>
          {this.state.modalEditVisible ? (
            <MyEditEmployeeForm
              modalVisible={this.state.modalEditVisible}
              confirmLoading={this.state.confirmLoading}
              dataSource={dataSource.find(
                item => item.key === this.state.rowId,
              )}
              handleOk={this.handleOk}
              handleCancel={this.handleCancel}
            />
          ) : null}
        </div>
        <div>
          <MyNewEmployeeForm
            modalVisible={this.state.modalNewVisible}
            confirmLoading={this.state.confirmLoading}
            handleOk={this.handleOk}
            handleCancel={this.handleCancel}
          />
        </div>
      </BasicLayout>
    );
  }

  handleOk = (form, editableData) => {
    // console.log(form.getFieldsError());
    if (form.isFieldsTouched() && form) {
      if (this.state.rowId === null) {
        dataSource.push({
          key: dataSource.length + 1,
          name: {
            firstName: form.getFieldValue('firstName'),
            secondName: form.getFieldValue('secondName'),
            lastName: form.getFieldValue('lastName'),
          },
          email: form.getFieldValue('email'),
          mobile: form.getFieldValue('mobile'),
          position: form.getFieldValue('position'),
          status: 'New',
          isEmailConfirmed: false,
          isBlocked: false,
        });
      } else {
        console.log(editableData);
      }
    }
    this.setState({
      modalNewVisible: false,
      modalEditVisible: false,
      rowId: null,
    });
    form.resetFields();
  };

  handleCancel = form => {
    form.resetFields();
    this.setState({
      modalNewVisible: false,
      modalEditVisible: false,
      rowId: null,
    });
  };

  showModal = record => {
    if (!record.name) {
      this.setState({
        modalNewVisible: true,
      });
    } else {
      this.setState({
        modalEditVisible: true,
        rowId: record.key,
      });
    }
  };
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
