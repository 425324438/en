import { createStore, compose } from 'redux'
import rootReducer from '../reducers/index'

export default () => {
  // 启用调试工具
  const enhancers = []
  const devToolsExtension = window.devToolsExtension
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
  // 创建 store
  const store = createStore(
    rootReducer,
    ...enhancers
  )
  return store
}
