import { fromJS } from 'immutable';
import rolesPageReducer from '../reducer';

describe('rolesPageReducer', () => {
  it('returns the initial state', () => {
    expect(rolesPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
