import { call, put, takeLatest, fork } from 'redux-saga/effects'
import { normalize } from 'normalizr'
import { callApi } from '../services/api'
import * as actionTypes from '../actionTypes/diskTypes'
import * as schema from '../actions/schema'


function* fetchDisks() {
  yield put({ type: actionTypes.disk.DISK_GET_REQUEST })
  try {
    console.info('sagas')
    // const json = yield call(callApi, 'getFixedData', 'GET')
    // const result = normalize(json, schema.arrayOfDisks)
    // yield put({ type: actionTypes.disk.DISK_GET_SUCCEEDED, ...{ result } })
    yield put({ type: actionTypes.disk.DISK_GET_SUCCEEDED, ...{ ms: 'aaaa' } })
  } catch (e) {
    yield put({ type: actionTypes.disk.DISK_GET_FAILED, message: e.message })
  }
}

function* fetchWatcher() {
  yield takeLatest(actionTypes.disk.DISK_GET_REQUESTED, fetchDisks)
}

function* diskSaga() {
  const sagas = []
  sagas.push(fork(fetchWatcher))
  yield sagas
}

export default diskSaga
