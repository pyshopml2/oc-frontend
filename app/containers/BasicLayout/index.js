/**
 *
 * BasicLayout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Breadcrumb, Layout, Menu, Icon, Avatar, Input } from 'antd';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectBasicLayout from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import './index.css';
import 'antd/dist/antd.css';
import MenuWithRouter from '../../components/MenuWithRouter/Loadable'

const { Header, Content, Sider, Footer } = Layout;
const Search = Input.Search;

/* eslint-disable react/prefer-stateless-function */
export class BasicLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
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
          <div className="logo" style={{ color: '#001529', fontSize:20, textAlign: 'center' }}> OwnCRM </div>
          <MenuWithRouter>

          </MenuWithRouter>
          {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="table" />
              <Link to="/catalog">Справочники</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="home" />
              <span>Профиль организации</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="setting" />
              <span>Параметры системы</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="upload" />
              <span>Роли и разрешения</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="team" />
              <span>Сотрудники</span>
            </Menu.Item>
          </Menu> */}
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
                style={{ width: 200, margin: '0 10px' }}
              />
              <Icon
                className="Bell"
                type="bell"
                style={{ color: '#CCCCCC', fontSize: 28, margin: '0 10px' }}
              />
              <Avatar icon="user" style={{ margin: '0 10px' }} />
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
              <Breadcrumb.Item href="">
                <Icon type="home" />
              </Breadcrumb.Item>
              <Breadcrumb.Item href="">
                <Icon type="user" />
                <span>Application List</span>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Application</Breadcrumb.Item>
            </Breadcrumb>
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

const withReducer = injectReducer({ key: 'basicLayout', reducer });
const withSaga = injectSaga({ key: 'basicLayout', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(BasicLayout);
