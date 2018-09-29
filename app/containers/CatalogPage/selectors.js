import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the rolesPage state domain
 */

const selectCatalogPageDomain = state => state.get('catalogPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by RolesPage
 */

const makeSelectCatalogPage = () =>
  createSelector(selectCatalogPageDomain, substate => substate.toJS());

export default makeSelectCatalogPage;
export { selectCatalogPageDomain };
