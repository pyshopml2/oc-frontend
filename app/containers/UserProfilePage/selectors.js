import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the userProfilePage state domain
 */

const selectUserProfilePageDomain = state =>
  state.get('userProfilePage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by UserProfilePage
 */

const makeSelectUserProfilePage = () =>
  createSelector(selectUserProfilePageDomain, substate => substate.toJS());

export default makeSelectUserProfilePage;
export { selectUserProfilePageDomain };
