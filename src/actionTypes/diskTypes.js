const types = [
  'GET',
  'PULL',
  'PUSH',
  'DELETE'
]

const requestType = [
  'REQUESTED',
  'REQUEST',
  'SUCCEEDED',
  'FAILED'
]

export const disk = {}

types.forEach(type =>
  requestType.forEach(status =>
    (disk[`DISK_${type}_${status}`] = `DISK_${type}_${status}`))
)

export default { disk }
