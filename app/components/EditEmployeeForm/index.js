/**
 *
 * EditEmployeeForm
 *
 */

import React from 'react';
import { Modal, Input, Form, Row, Col, Select } from 'antd';

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

/* eslint-disable react/prefer-stateless-function */
export default class EditEmployeeForm extends React.Component {
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
    return (
      <Modal
        title="Редактирование данных сотрудника"
        visible={modalVisible}
        onOk={() => handleOk(form, dataSource)}
        onCancel={() => handleCancel(form)}
        confirmLoading={confirmLoading}
        okText="Сохранить"
        cancelText="Отмена"
        width="650px"
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
                      // onChange={handleChange}
                      // onFocus={handleFocus}
                      // onBlur={handleBlur}
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
            </Row>
          </Form>
        </div>
      </Modal>
    );
  }
}

EditEmployeeForm.propTypes = {};
