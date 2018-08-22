import { fromJS } from 'immutable';
import employeesPageReducer from '../reducer';

describe('employeesPageReducer', () => {
  it('returns the initial state', () => {
    expect(employeesPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
