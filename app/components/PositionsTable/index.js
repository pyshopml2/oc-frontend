/**
 *
 * PositionsTable
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './index.css';

import { Table, Input, Button, Popconfirm, Form } from 'antd';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import makeSelectPositionsTable from './selectors';
import reducer from './reducer';
import saga from './saga';
import { fetchPositionsTable } from './actions';

const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

const config = {
  pagination: {
    pageSizeOptions: ['30', '40'],
    showSizeChanger: true,
    position: 'bottom',
  },
};

class EditableCell extends React.Component {
  state = {
    editing: false,
  };

  componentDidMount() {
    if (this.props.editable) {
      document.addEventListener('click', this.handleClickOutside, true);
    }
  }

  componentWillUnmount() {
    if (this.props.editable) {
      document.removeEventListener('click', this.handleClickOutside, true);
    }
  }

  toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus();
      }
    });
  };

  handleClickOutside = e => {
    const { editing } = this.state;
    if (editing && this.cell !== e.target && !this.cell.contains(e.target)) {
      this.save();
    }
  };

  save = () => {
    const { record, handleSave } = this.props;
    this.form.validateFields((error, values) => {
      if (error) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  };

  render() {
    const { editing } = this.state;
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      ...restProps
    } = this.props;
    return (
      <td ref={node => (this.cell = node)} {...restProps}>
        {editable ? (
          <EditableContext.Consumer>
            {form => {
              this.form = form;
              return editing ? (
                <FormItem style={{ margin: 0 }}>
                  {form.getFieldDecorator(dataIndex, {
                    rules: [
                      {
                        required: true,
                        message: `${title} is required.`,
                      },
                    ],
                    initialValue: record[dataIndex],
                  })(
                    <Input
                      ref={node => (this.input = node)}
                      onPressEnter={this.save}
                    />,
                  )}
                </FormItem>
              ) : (
                <div
                  className="editable-cell-value-wrap"
                  style={{ paddingRight: 24 }}
                  onClick={this.toggleEdit}
                >
                  {restProps.children}
                </div>
              );
            }}
          </EditableContext.Consumer>
        ) : (
          restProps.children
        )}
      </td>
    );
  }
}

class PositionsTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: 'id',
        dataIndex: 'key',
        width: '6%',
      },
      {
        title: 'Должность',
        dataIndex: 'name',
        width: '',
        editable: true,
      },
      {
        title: 'Описание',
        dataIndex: 'description',
        width: '40%',
        editable: true,
      },
      {
        title: 'Действие',
        dataIndex: 'operation',
        render: (text, record) =>
          this.state.dataSource.length > 1 ? (
            <Popconfirm
              title="Уверены?"
              onConfirm={() => this.handleDelete(record.key)}
            >
              <a href="javascript:;">Удалить</a>
            </Popconfirm>
          ) : null,
      },
    ];
    this.state = {
      dataSource: [],
    };
  }

  componentWillReceiveProps(props) {
    console.log('props', props);
    if (props.positionsTable.data) {
      this.setState({
        dataSource: props.positionsTable.data,
      });
    }
  }

  componentDidMount() {
    if (!this.props.positionsTable.data) {
      this.props.dispatch(fetchPositionsTable());
    } else {
      this.setState({
        dataSource: this.props.positionsTable.data,
      });
    }
  }

  handleDelete = key => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
    console.log('after delete', this.state.dataSource);
  };

  handleAdd = () => {
    const dataSource = this.state.dataSource;
    const count = dataSource.length + 1;
    const newData = {
      key: count,
      name: `Менеджер ${count}`,
      description: `Обзванивает клиентов ${count}`,
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };

  handleSave = row => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    this.setState({ dataSource: newData });
  };

  componentWillUnmount() {
    console.log('table unmounted');
  }

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    console.log('dataSource', dataSource);
    return (
      <div>
        <Button
          onClick={this.handleAdd}
          type="primary"
          style={{ marginBottom: 16, display: 'inline-block' }}
        >
          Добавить запись
        </Button>
        <Button
          style={{ margin: '10px' }}
          onClick={() => this.props.dispatch(fetchPositionsTable())}
        >
          Обновить
        </Button>
        <Table
          {...config}
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
          loading={this.props.positionsTable.loading}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  positionsTable: makeSelectPositionsTable(),
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

const withReducer = injectReducer({ key: 'positionsTable', reducer });
const withSaga = injectSaga({ key: 'positionsTable', saga });

PositionsTable.propTypes = {};

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PositionsTable);
