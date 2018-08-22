import React from 'react';
import { Link, NavLink , withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';

const MenuWithRouter = props => {
  console.log(props)
  return (
    <Menu selectedKeys={props.currentLocation} activeKey={props.currentLocation} theme="dark" mode="inline" defaultSelectedKeys={['']}>
      <Menu.Item key="/catalog">
        <Icon type="table" />
        <span className="nav-text">Справочники</span>
        <Link to="/catalog"></Link>
      </Menu.Item>
      <Menu.Item key="/profile">
        <Icon type="home" />
        <span className="nav-text">Профиль организации</span>
        <Link to="/profile" ></Link>
      </Menu.Item>
      <Menu.Item key="/settings">
        <Icon type="setting" />
        <span className="nav-text">Параметры системы</span>
        <NavLink to="/settings"></NavLink>
      </Menu.Item>
      <Menu.Item key="/roles">
        <Icon type="upload" />
        <span className="nav-text">Роли и разрешения</span>
        <NavLink to="/roles"></NavLink>
      </Menu.Item>
      <Menu.Item key="/employees">
        <Icon type="team" />
        <span className="nav-text">Сотрудники</span>
        <NavLink to="/employees"></NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default MenuWithRouter;