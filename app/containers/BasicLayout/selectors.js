import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the basicLayout state domain
 */

const selectBasicLayoutDomain = state => state.get('basicLayout', initialState);
const selectCurrentPathName = state => state.get('route', initialState);
/**
 * Other specific selectors
 */

/**
 * Default selector used by BasicLayout
 */

const makeSelectBasicLayout = () =>
  createSelector(selectBasicLayoutDomain, substate => substate.toJS());

const makeSelectCurrentPathName = () =>
  createSelector(selectCurrentPathName, substate => substate.toJS());

export default makeSelectBasicLayout;
export { makeSelectCurrentPathName, selectBasicLayoutDomain };
