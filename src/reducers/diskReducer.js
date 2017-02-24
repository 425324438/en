import * as ActionTypes from '../actionTypes/diskTypes'

const initialState = {
  entities: {
    di_0: 0,
    di_1: 1
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
      console.info('reducer')
      return {...state}
    default:
      return state
  }
}

export default diskReduer
