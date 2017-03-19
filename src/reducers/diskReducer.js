import * as ActionTypes from '../actionTypes/diskTypes'

const initialState = {
  entities: {},
  ids: [],
  startRequest: 'end',
  errorMessage: ''
}

const diskReduer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.disk.DISK_GET_REQUESTED:
      console.info('开始请求')
      console.info(action)
      return {...state}
    case ActionTypes.disk.DISK_GET_SUCCEEDED:
      console.info('查询结果')
      const {result,entities} = action.mess
      state.ids = result
      state.entities = entities.disk
      return {...state}
    case ActionTypes.disk.DISK_PUSH_SUCCEEDED:
        console.info('查询结果')
        return {...state}
    case ActionTypes.disk.DISK_DELETE_SUCCEEDED:
      console.info('开始请求')
      console.info(action)
      return {...state}
    default:
      return state
  }
}

export default diskReduer
