import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';

const Linkmenu = withRouter(props => {
  const { location } = props;
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="table" />
              <Link to="/catalog">Справочники</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="home" />
              <Link to="/profile">Профиль организации</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="setting" />
              <Link to="/settings">Параметры системы</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="upload" />
              <Link to="/roles">Роли и разрешения</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="team" />
              <Link to="/employees">Сотрудники</Link>
            </Menu.Item>
          </Menu>
  );
});

export default Linkmenu;