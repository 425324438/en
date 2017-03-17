import * as ActionTypes from '../actionTypes/diskTypes'

export const getDisks = () => ({
  type: ActionTypes.disk.DISK_GET_REQUESTED
})

export const deltClick = (data) => ({
  type: ActionTypes.disk.DISK_DELETE_DELETE,data
})
