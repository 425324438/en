import { call, put, takeLatest, fork } from 'redux-saga/effects'
import { normalize } from 'normalizr'
import { callApi } from '../services/api'
import * as ActionTypes from '../actionTypes/diskTypes'
import * as schema from '../actions/schema'

function* fetchDisks(data) {
  yield put({ type: ActionTypes.disk.DISK_GET_REQUEST })
  try {
    console.info('开始请求')
    // const json = yield call(callApi, 'getFixedData', 'GET')
    const json = yield call(callApi, 'signup', 'GET',{id:data.id})
    const result = normalize(json, schema.arrayOfDisks)
    // yield put({ type: ActionTypes.disk.DISK_GET_SUCCEEDED, ...{ result } })
    yield put({ type: ActionTypes.disk.DISK_GET_SUCCEEDED, ...{ mess: result } })
  } catch (e) {
    yield put({ type: ActionTypes.disk.DISK_GET_FAILED, message: e.message })
  }
}
//根据ID 删除
function* deltClick(data) {

  yield put({ type: ActionTypes.disk.DISK_DELETE_REQUEST })
  try {
    console.info('开始请求---删除方法')
    console.info(data);
    // const json = yield call(callApi, 'getFixedData', 'GET')
    const json = yield call(callApi, 'deleteById', 'POST', {id:data.data})
      console.info('开始请求---删除方法--回调'+json)
    const result = normalize(json, schema.arrayOfDisks)
    // yield put({ type: ActionTypes.disk.DISK_GET_SUCCEEDED, ...{ result } })
    yield put({ type: ActionTypes.disk.DISK_DELETE_SUCCEEDED, ...{ mess: result } })
    yield data.resolve()
  } catch (e) {
    yield put({ type: ActionTypes.disk.DISK_DELETE_FAILED, message: e.message })
    yield data.reject()
  }
}

function*saveClick(data){
  yield put({ type: ActionTypes.disk.DISK_PUSH_REQUEST })
  try {
    console.info('开始请求---添加')
    console.info(data)
    const json = yield call(callApi, 'insetUser', 'POST', {data})
    console.info('开始请求---添加--回调'+json)
    const result = normalize(json, schema.arrayOfDisks)
    yield put({ type: ActionTypes.disk.DISK_PUSH_SUCCEEDED, ...{ mess: result } })
    yield data.resolve()
  } catch (e) {
    yield put({ type: ActionTypes.disk.DISK_PUSH_FAILED, message: e.message })
    console.info('开始请求---错误'+e.message)
    yield data.reject()
  }
}
function* fetchWatcher() {
  yield takeLatest(ActionTypes.disk.DISK_GET_REQUESTED, fetchDisks)
  yield takeLatest(ActionTypes.disk.DISK_DELETE_REQUESTED, deltClick)
  yield takeLatest(ActionTypes.disk.DISK_PUSH_REQUESTED,saveClick)
}

function* diskSaga() {
  const sagas = []
  sagas.push(fork(fetchWatcher))
  yield sagas
}

export default diskSaga
