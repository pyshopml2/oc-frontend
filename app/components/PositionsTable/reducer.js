/*
 *
 * CatalogPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUESTED_POSITIONSTABLE,
  REQUESTED_POSITIONSTABLE_FAILED,
  REQUESTED_POSITIONSTABLE_SUCCEEDED,
} from './constants';

export const initialState = fromJS({
  data: '',
  loading: false,
  error: false,
});

function positionsTableReducer(state = initialState, action) {
  switch (action.type) {
    case REQUESTED_POSITIONSTABLE:
      return {
        data: '',
        loading: true,
        error: false,
      };
    case REQUESTED_POSITIONSTABLE_SUCCEEDED:
      return {
        data: action.data,
        loading: false,
        error: false,
      };
    case REQUESTED_POSITIONSTABLE_FAILED:
      return {
        data: '',
        loading: false,
        error: true,
      };
    default:
      return state;
  }
}

export default positionsTableReducer;
