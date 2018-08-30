import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the organisationProfilePage state domain
 */

const selectOrganisationProfilePageDomain = state =>
  state.get('organisationProfilePage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by OrganisationProfilePage
 */

const makeSelectOrganisationProfilePage = () =>
  createSelector(selectOrganisationProfilePageDomain, substate =>
    substate.toJS(),
  );

export default makeSelectOrganisationProfilePage;
export { selectOrganisationProfilePageDomain };
