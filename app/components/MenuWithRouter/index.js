import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';

const adminRoutes = [
  {
    link: 'userprofile',
    label: 'Личный профиль',
    icon: 'user',
  },
  {
    link: 'catalog',
    label: 'Справочники',
    icon: 'table',
  },
  {
    link: 'organisationprofile',
    label: 'Профиль организации',
    icon: 'home',
  },
  {
    link: 'settings',
    label: 'Параметры системы',
    icon: 'setting',
  },
  {
    link: 'roles',
    label: 'Роли и разрешения',
    icon: 'upload',
  },
  {
    link: 'employees',
    label: 'Сотрудники',
    icon: 'team',
  },
];

const userRoutes = [
  {
    link: 'userprofile',
    label: 'Личный профиль',
    icon: 'user',
  },
  {
    link: 'clients',
    label: 'Клиенты',
    icon: 'shopping-cart',
  },
  {
    link: 'tasks',
    label: 'Задачи',
    icon: 'project',
  },
  {
    link: 'employees',
    label: 'Список сотрудников',
    icon: 'team',
  },
];

const routesWithRoles = [
  {
    routes: adminRoutes,
    role: 'admin',
  },
  {
    routes: userRoutes,
    role: 'user',
  },
];

const roles = ['admin', 'user'];

const renderMenuItems = (routeswithroles, roles, currentRole) =>
  routeswithroles.map(item => {
    if (item.role === currentRole) {
      return item.routes.map(route => (
        <Menu.Item key={`/${route.link}`}>
          <Icon type={route.icon} />
          <span className="nav-text">{route.label}</span>
          <Link to={`/${route.link}`} />
        </Menu.Item>
      ));
    }
  }); // TODO: render only once

const MenuWithRouter = props => (
  <Menu
    selectedKeys={[props.currentLocation]}
    activeKey={props.currentLocation}
    theme="dark"
    mode="inline"
    defaultSelectedKeys={['']}
  >
    {renderMenuItems(routesWithRoles, roles, props.isAdmin ? 'admin' : 'user')}
  </Menu>
);

export default MenuWithRouter;
