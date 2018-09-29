import { takeLatest, call, put, select } from 'redux-saga/effects';

import {
  REQUESTED_POSITIONSTABLE,
  REQUESTED_POSITIONSTABLE_FAILED,
  REQUESTED_POSITIONSTABLE_SUCCEEDED,
  FETCHED_POSITIONSTABLE,
} from './constants';

import {
  requestPositionsTable,
  requestPositionsTableError,
  requestPositionsTableSuccess,
  fetchPositionsTable,
} from './actions';

export default function* watchFetchPositionsTable() {
  yield takeLatest(FETCHED_POSITIONSTABLE, fetchPositionsTableAsync);
}

function* fetchPositionsTableAsync() {
  try {
    yield put(requestPositionsTable());
    const data = yield call(() =>
      fetch('http://5b8140fb97d8e500144f2dfc.mockapi.io/positionscatalog').then(
        res => res.json(),
      ),
    );
    yield put(requestPositionsTableSuccess(data));
  } catch (error) {
    yield put(requestPositionsTableError());
  }
}
