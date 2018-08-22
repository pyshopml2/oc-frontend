import { fromJS } from 'immutable';
import catalogPageReducer from '../reducer';

describe('catalogPageReducer', () => {
  it('returns the initial state', () => {
    expect(catalogPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
