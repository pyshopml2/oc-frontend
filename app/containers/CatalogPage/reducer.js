/*
 *
 * CatalogPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUESTED_CATALOGTABLE,
  REQUESTED_CATALOGTABLE_FAILED,
  REQUESTED_CATALOGTABLE_SUCCEEDED,
} from './constants';

export const initialState = fromJS({
  data: '',
  loading: false,
  error: false,
});

function catalogPageReducer(state = initialState, action) {
  switch (action.type) {
    case REQUESTED_CATALOGTABLE:
      return {
        data: '',
        loading: true,
        error: false,
      };
    case REQUESTED_CATALOGTABLE_SUCCEEDED:
      return {
        data: action.data,
        loading: false,
        error: false,
      };
    case REQUESTED_CATALOGTABLE_FAILED:
      return {
        data: '',
        loading: false,
        error: true,
      };
    default:
      return state;
  }
}

export default catalogPageReducer;
