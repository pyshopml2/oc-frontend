/*
 *
 * CatalogPage actions
 *
 */

import {
  REQUESTED_CATALOGTABLE,
  REQUESTED_CATALOGTABLE_FAILED,
  REQUESTED_CATALOGTABLE_SUCCEEDED,
  FETCHED_CATALOGTABLE,
} from './constants';

function requestCatalogTable() {
  return { type: REQUESTED_CATALOGTABLE };
}

function requestCatalogTableSuccess(data) {
  return { type: REQUESTED_CATALOGTABLE_SUCCEEDED, data: data };
}

function requestCatalogTableError() {
  return { type: REQUESTED_CATALOGTABLE_FAILED };
}

function fetchCatalogTable() {
  return { type: FETCHED_CATALOGTABLE };
}

export {
  requestCatalogTable,
  requestCatalogTableError,
  requestCatalogTableSuccess,
  fetchCatalogTable,
};
