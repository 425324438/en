import * as ActionTypes from '../actionTypes/diskTypes'

export const getDisks = () => ({
  type: ActionTypes.disk.DISK_GET_REQUESTED
})

export const deltClick = (data,resolve,reject) => ({
  type: ActionTypes.disk.DISK_DELETE_REQUESTED,
  data,
  resolve,
  reject
})

export const saveClick = (data,resolve,reject)=>({
    type: ActionTypes.disk.DISK_PUSH_REQUESTED,
    data,
    resolve,
    reject
})
