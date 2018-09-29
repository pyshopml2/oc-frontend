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

import LoginForm from 'containers/LoginForm/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import EmployeesPage from 'containers/EmployeesPage/Loadable';
import OrganisationProfilePage from 'containers/OrganisationProfilePage/Loadable';
import UserProfilePage from 'containers/UserProfilePage/Loadable';
import RolesPage from 'containers/RolesPage/Loadable';
import SettingsPage from 'containers/SettingsPage/Loadable';
import CatalogPage from 'containers/CatalogPage/Loadable';
// import BasicLayout from 'containers/BasicLayout/Loadable'
import API from '../../api/index';
import DefaultLayout from '../../components/DefaultLayout/index'

const AppWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;


// console.log(API.get('client'));

export default function App() {
  return (
    <AppWrapper>
      <Switch>
        <Route path="/login" component={LoginForm} />
        <DefaultLayout path="/catalog" component={CatalogPage} />
        <DefaultLayout
          path="/organisationprofile"
          component={OrganisationProfilePage}
        />
        <DefaultLayout path="/userprofile" component={UserProfilePage} />
        <DefaultLayout path="/settings" component={SettingsPage} />
        <DefaultLayout path="/roles" component={RolesPage} />
        <DefaultLayout path="/employees" component={EmployeesPage} />
        <Redirect to="/" />
      </Switch>
    </AppWrapper>
  );
}
