import React from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { fetchData, receiveData } from './actions.js';
import './index.css';

const FormItem = Form.Item;

const error = () => {
  message.error('Failed to login');
};

class Login extends React.Component {
  componentWillMount() {
    // const { receiveData } = this.props;
    // receiveData(null, 'auth');
  }
  componentWillReceiveProps(nextProps) {
    const { auth: nextAuth = {} } = nextProps;
    const { history } = this.props;
    if (nextAuth.data && nextAuth.data.uid) {
      localStorage.setItem('user', JSON.stringify(nextAuth.data));
      history.push('/');
    }
  }
  componentDidUpdate(prevProps) {
    const { auth: nextAuth = {}, history } = this.props;
    // const { history } = this.props;
    if (nextAuth.data && nextAuth.data.uid) {
      localStorage.setItem('user', JSON.stringify(nextAuth.data));
      history.push('/');
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { fetchData } = this.props;
        if (values.userName === 'admin' && values.password === 'admin')
          fetchData({ funcName: 'admin', stateName: 'auth' });
        if (values.userName === 'guest' && values.password === 'guest')
          fetchData({ funcName: 'guest', stateName: 'auth' });
        error();
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <div className="login-form">
          <div className="login-logo">
            <span>OwnCRM</span>
          </div>
          <Form onSubmit={this.handleSubmit} style={{ maxWidth: '300px' }}>
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                  placeholder="admin: admin"
                />,
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                  type="password"
                  placeholder="admin: admin"
                />,
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>Remember</Checkbox>)}
              <a className="login-form-forgot" style={{ float: 'right' }}>
                Forgot password
              </a>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{ width: '100%' }}
              >
                Log in
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToPorps = state => {
  // const { auth } = state.httpData;
  // return { auth };
};
const mapDispatchToProps = dispatch => ({
  // fetchData: bindActionCreators(fetchData, dispatch),
  // receiveData: bindActionCreators(receiveData, dispatch),
});

export default connect(
  mapStateToPorps,
  mapDispatchToProps,
)(Form.create()(Login));
