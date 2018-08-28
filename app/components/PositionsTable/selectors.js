import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the positions state domain
 */

const selectPositionsDomain = state => state.get('positions', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Positions
 */

const makeSelectPositions = () =>
  createSelector(selectPositionsDomain, substate => substate.toJS());

export default makeSelectPositions;
export { selectPositionsDomain };
