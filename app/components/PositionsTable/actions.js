/*
 *
 * CatalogPage actions
 *
 */

import {
  REQUESTED_POSITIONSTABLE,
  REQUESTED_POSITIONSTABLE_FAILED,
  REQUESTED_POSITIONSTABLE_SUCCEEDED,
  FETCHED_POSITIONSTABLE,
} from './constants';

function requestPositionsTable() {
  return { type: REQUESTED_POSITIONSTABLE };
}

function requestPositionsTableSuccess(data) {
  return { type: REQUESTED_POSITIONSTABLE_SUCCEEDED, data };
}

function requestPositionsTableError() {
  return { type: REQUESTED_POSITIONSTABLE_FAILED };
}

function fetchPositionsTable() {
  return { type: FETCHED_POSITIONSTABLE };
}

export {
  requestPositionsTable,
  requestPositionsTableSuccess,
  requestPositionsTableError,
  fetchPositionsTable,
};
