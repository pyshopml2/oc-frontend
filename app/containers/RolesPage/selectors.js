import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the rolesPage state domain
 */

const selectRolesPageDomain = state => state.get('rolesPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by RolesPage
 */

const makeSelectRolesPage = () =>
  createSelector(selectRolesPageDomain, substate => substate.toJS());

export default makeSelectRolesPage;
export { selectRolesPageDomain };
