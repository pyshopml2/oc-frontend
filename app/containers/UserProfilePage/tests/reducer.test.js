import { fromJS } from 'immutable';
import userProfilePageReducer from '../reducer';

describe('userProfilePageReducer', () => {
  it('returns the initial state', () => {
    expect(userProfilePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
