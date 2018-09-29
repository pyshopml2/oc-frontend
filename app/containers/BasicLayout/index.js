/**
 *
 * BasicLayout
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  Badge,
  Tooltip,
  Button,
  Popover,
  Breadcrumb,
  Layout,
  Menu,
  Icon,
  Avatar,
  Input,
} from 'antd';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectBasicLayout from './selectors';
import { makeSelectCurrentPathName } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import './index.css';
import 'antd/dist/antd.css';
import MenuWithRouter from '../../components/MenuWithRouter/Loadable';

const { Header, Content, Sider, Footer } = Layout;
const Search = Input.Search;

const fakeNotificationContent = (
  <div>
    <p>раз</p>
    <p>два</p>
  </div>
);

const fakeProfileContent = (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Button style={{ margin: '5px' }}> Профиль </Button>
    <Button style={{ margin: '5px' }}> Выход </Button>
  </div>
);

const fakeFastTaskAddContent = (
  <div>
    <p>раз</p>
    <p>два</p>
  </div>
);
/* eslint-disable react/prefer-stateless-function */
export class BasicLayout extends Component {
  state = {
    collapsed: false,
    isPopoverVisible: {
      addTask: true,
      notifications: true,
      profile: true,
    },
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleVisibleChange = event => {
    console.log(event.type);
    if (event.type == 'mouseover') {
      this.setState({
        isPopoverVisible: {
          notifications: !this.state.isPopoverVisible.notifications,
        },
      });
    }
  };

  render() {
    // const { location } = props;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          width="210"
        >
          {this.state.collapsed ? (
            <div
              className="logo"
              style={{ color: '#001529', fontSize: 20, textAlign: 'center' }}
            >
              {' '}
              O{' '}
            </div>
          ) : (
            <div
              className="logo"
              style={{ color: '#001529', fontSize: 20, textAlign: 'center' }}
            >
              {' '}
              OwnCRM{' '}
            </div>
          )}
          <MenuWithRouter
            currentLocation={this.props.location.location.pathname}
          />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} className="Header">
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />

            <div className="Right">
              <Search
                placeholder="Поиск"
                onSearch={value => console.log(value)}
                style={{ width: 200 }}
              />
              <Tooltip title="Добавить задачу">
                <Popover
                  content={fakeFastTaskAddContent}
                  title="Добавить задачу"
                  trigger="click"
                >
                  <Button icon="plus" style={{ margin: '0 20px' }} />
                </Popover>
              </Tooltip>
              <Tooltip title="Уведомления">
                <Popover
                  onVisibleChange={event => this.handleVisibleChange(event)}
                  content={fakeNotificationContent}
                  title="Уведомления"
                  trigger="click"
                >
                  <Badge count={2}>
                    <Button className="Bell" icon="bell" style={{}} />
                  </Badge>
                </Popover>
              </Tooltip>
              <Tooltip title="Профиль">
                <Popover
                  placement="bottomRight"
                  content={fakeProfileContent}
                  title="Профиль"
                  trigger="click"
                >
                  <Button icon="user" style={{ margin: '0 20px' }} />
                </Popover>
              </Tooltip>
            </div>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            <Breadcrumb>
              <Breadcrumb.Item href="/catalog">
                <Icon type="home" />
              </Breadcrumb.Item>
              <Breadcrumb.Item href="/roles">
                <Icon type="user" />
                <span>Application List</span>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Application</Breadcrumb.Item>
            </Breadcrumb>
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>OwnCRM, 2018</Footer>
        </Layout>
      </Layout>
    );
  }
}

BasicLayout.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  basiclayout: makeSelectBasicLayout(),
  location: makeSelectCurrentPathName(),
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

const withSaga = injectSaga({ key: 'basicLayout', saga });

export default compose(
  withSaga,
  withConnect,
)(BasicLayout);
