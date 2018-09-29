import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';

const MenuWithRouter = props => {
  return (
    <Menu
      selectedKeys={[props.currentLocation]}
      activeKey={props.currentLocation}
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['']}
    >
      <Menu.Item key="/userprofile">
        <Icon type="user" />
        <span className="nav-text">Личный профиль</span>
        <Link to="/userprofile" />
      </Menu.Item>
      <Menu.Item key="/catalog">
        <Icon type="table" />
        <span className="nav-text">Справочники</span>
        <Link to="/catalog" />
      </Menu.Item>
      <Menu.Item key="/organisationprofile">
        <Icon type="home" />
        <span className="nav-text">Профиль организации</span>
        <Link to="/organisationprofile" />
      </Menu.Item>
      <Menu.Item key="/settings">
        <Icon type="setting" />
        <span className="nav-text">Параметры системы</span>
        <NavLink to="/settings" />
      </Menu.Item>
      <Menu.Item key="/roles">
        <Icon type="upload" />
        <span className="nav-text">Роли и разрешения</span>
        <NavLink to="/roles" />
      </Menu.Item>
      <Menu.Item key="/employees">
        <Icon type="team" />
        <span className="nav-text">Сотрудники</span>
        <NavLink to="/employees" />
      </Menu.Item>
    </Menu>
  );
};

export default MenuWithRouter;
