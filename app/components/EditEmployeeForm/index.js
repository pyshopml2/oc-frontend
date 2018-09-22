/**
 *
 * EditEmployeeForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Input, Form, Row, Col, Select, Button } from 'antd';

const FormItem = Form.Item;
const { Option } = Select;

const positionData = [
  {
    id: 0,
    name: 'Director',
  },
  {
    id: 1,
    name: 'NOT director',
  },
];

const statusData = [
  {
    id: 0,
    name: 'Активный',
  },
  {
    id: 1,
    name: 'В отпуске',
  },
  {
    id: 2,
    name: 'Уволен',
  },
  {
    id: 3,
    name: 'Болен',
  },
  {
    id: 4,
    name: 'В командировке',
  },
];
/* eslint-disable react/prop-types */
const DescriptionItem = ({ title, content }) => (
  <div
    style={{
      fontSize: 14,
      lineHeight: '22px',
      marginBottom: 7,
      color: 'rgba(0,0,0,0.65)',
    }}
  >
    <p
      style={{
        marginRight: 8,
        display: 'inline-block',
        color: 'rgba(0,0,0,0.85)',
      }}
    >
      {title}:
    </p>
    {content}
  </div>
);

/* eslint-disable react/prefer-stateless-function */
export default class EditEmployeeForm extends React.Component {
  componentDidMount() {
    this.props.form.setFieldsValue({
      email: this.props.dataSource.email,
      lastName: this.props.dataSource.name.lastName,
      firstName: this.props.dataSource.name.firstName,
      secondName: this.props.dataSource.name.secondName,
      status: this.props.dataSource.status,
      position: this.props.dataSource.position,
      mobile: this.props.dataSource.position,
    });
  }

  render() {
    const { props } = this;
    const {
      modalVisible,
      confirmLoading,
      handleOk,
      handleCancel,
      dataSource,
      form,
    } = props;
    const { getFieldDecorator } = form;
    const options = positionData.map(position => (
      <Option key={position.id}>{position.name}</Option>
    ));
    const statuses = statusData.map(status => (
      <Option key={status.id}>{status.name}</Option>
    ));

    return (
      <Modal
        title="Редактирование данных сотрудника"
        visible={modalVisible}
        onOk={() => handleOk(form, dataSource)}
        onCancel={() => handleCancel(form)}
        footer={[
          <Button key="cancel" onClick={() => handleCancel(form)}>
            Отмена
          </Button>,
          <Button key="block" type="danger" onClick={() => handleCancel(form)}>
            Заблокировать
          </Button>,
          <Button
            key="confirmEmail"
            type="primary"
            onClick={() => handleCancel(form)}
          >
            Подтвердить email
          </Button>,
          <Button
            key="resetPass"
            type="primary"
            onClick={() => handleCancel(form)}
          >
            Сбросить пароль
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={() => handleOk(form, dataSource)}
          >
            Сохранить
          </Button>,
        ]}
        confirmLoading={confirmLoading}
        okText="Сохранить"
        cancelText="Отмена"
        width="700px"
      >
        <div>
          <Form layout="horizontal">
            <Row gutter={16}>
              <Col span={12}>
                <FormItem label="E-mail">
                  {getFieldDecorator('email', {
                    rules: [
                      {
                        type: 'email',
                        message: 'Введен некорректный E-mail!',
                      },
                      {
                        required: true,
                        message: 'Укажите E-mail',
                      },
                    ],
                  })(
                    <Input
                      style={{ width: 200 }}
                      placeholder="Укажите E-mail"
                    />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <FormItem label="Фамилия">
                  {getFieldDecorator('lastName', {
                    rules: [{ required: true, message: 'Введите фамилию' }],
                  })(
                    <Input
                      style={{ width: 200 }}
                      placeholder="Укажите фамилию"
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem label="Имя">
                  {getFieldDecorator('firstName', {
                    rules: [{ required: true, message: 'Введите имя!' }],
                  })(
                    <Input style={{ width: 200 }} placeholder="Укажите имя" />,
                  )}
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem label="Отчество">
                  {getFieldDecorator('secondName', {})(
                    <Input
                      style={{ width: 200 }}
                      placeholder="Укажите отчество"
                    />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <FormItem label="Телефон">
                  {getFieldDecorator('mobile', {})(
                    <Input
                      style={{ width: 200 }}
                      placeholder="Укажите телефон"
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem label="Должность">
                  {getFieldDecorator('position', {})(
                    <Select
                      showSearch
                      style={{ width: 200 }}
                      placeholder="Укажите должность"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      {options}
                    </Select>,
                  )}
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem label="Статус">
                  {getFieldDecorator('status', {})(
                    <Select
                      style={{ width: 200 }}
                      placeholder="Укажите статус"
                      optionFilterProp="children"
                    >
                      {statuses}
                    </Select>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <DescriptionItem
                  title="Ссылка на доступ"
                  content={
                    <a href="http://#">
                      Ссылка на подтверждение кабинета. Срок: 01.10.2018
                    </a>
                  }
                />
              </Col>
            </Row>
          </Form>
        </div>
      </Modal>
    );
  }
}

EditEmployeeForm.propTypes = {
  form: PropTypes.object.isRequired,
  dataSource: PropTypes.object.isRequired,
};
