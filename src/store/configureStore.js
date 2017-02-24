import { createStore, compose } from 'redux'
import rootReducer from '../reducers/index'

const counter = (state = { count: 0 }, action) => {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
  }
}

export default () => {
  // 启用调试工具
  const enhancers = []
  const devToolsExtension = window.devToolsExtension
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
  // 创建 store
  const store = createStore(
    counter,
    ...enhancers
  )
  return store
}
