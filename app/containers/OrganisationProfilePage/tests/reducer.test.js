import { fromJS } from 'immutable';
import organisationProfilePageReducer from '../reducer';

describe('organisationProfilePageReducer', () => {
  it('returns the initial state', () => {
    expect(organisationProfilePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
