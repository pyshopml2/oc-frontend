import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the catalogPage state domain
 */

const selectPositionsTableDomain = state => state.get('positionsTable', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by CatalogPage
 */

const makeSelectPositionsTable = () =>
  createSelector(selectPositionsTableDomain, substate => substate);

export default makeSelectPositionsTable;
export { selectPositionsTableDomain };
