import { takeLatest, call, put, select } from 'redux-saga/effects';

import {
  REQUESTED_CATALOGTABLE,
  REQUESTED_CATALOGTABLE_FAILED,
  REQUESTED_CATALOGTABLE_SUCCEEDED,
  FETCHED_CATALOGTABLE,
} from './constants';

import {
  requestCatalogTable,
  requestCatalogTableError,
  requestCatalogTableSuccess,
  fetchCatalogTable,
} from './actions';

export default function* watchFetchCatalogTable() {
  yield takeLatest(FETCHED_CATALOGTABLE, fetchCatalogTableAsync);
}

function* fetchCatalogTableAsync() {
  try {
    yield put(requestCatalogTable());
    const data = yield call(() => {
      return fetch(
        'http://5b8140fb97d8e500144f2dfc.mockapi.io/positionscatalog',
      ).then(res => res.json());
    });
    yield put(requestCatalogTableSuccess(data));
  } catch (error) {
    yield put(requestCatalogTableError());
  }
}
