import * as ActionTypes from '../actionTypes/diskTypes'

const initialState = {
  entities: {
    di_0: {
      'first_Name': '11',
      'last_Name': '22'
    },
    di_1: {
      'first_Name': '33',
      'last_Name': '44'
    }
  },
  ids: [
    'di_0',
    'di_1',
  ],
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
      console.info(action.mess)
      return {...state}
    default:
      return state
  }
}

export default diskReduer
