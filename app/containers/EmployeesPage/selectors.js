import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the employeesPage state domain
 */

const selectEmployeesPageDomain = state =>
  state.get('employeesPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by EmployeesPage
 */

const makeSelectEmployeesPage = () =>
  createSelector(selectEmployeesPageDomain, substate => substate.toJS());

export default makeSelectEmployeesPage;
export { selectEmployeesPageDomain };
