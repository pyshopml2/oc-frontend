/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginForm from 'containers/LoginForm/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import EmployeesPage from 'containers/EmployeesPage/Loadable';
import OrganisationProfilePage from 'containers/OrganisationProfilePage/Loadable';
import UserProfilePage from 'containers/UserProfilePage/Loadable';
import RolesPage from 'containers/RolesPage/Loadable';
import SettingsPage from 'containers/SettingsPage/Loadable';
import CatalogPage from 'containers/CatalogPage/Loadable';
// import BasicLayout from 'containers/BasicLayout/Loadable'
import requireAuth from '../../auth/requireAuth';
const AppWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/catalog" component={requireAuth(CatalogPage)} />
        <Route
          path="/organisationprofile"
          component={requireAuth(OrganisationProfilePage)}
        />
        <Route path="/userprofile" component={requireAuth(UserProfilePage)} />
        <Route path="/settings" component={requireAuth(SettingsPage)} />
        <Route path="/roles" component={requireAuth(RolesPage)} />
        <Route path="/employees" component={requireAuth(EmployeesPage)} />
        <Redirect to="/roles" />
      </Switch>
    </AppWrapper>
  );
}
