import { combineReducers } from 'redux'
import { reducer as ReduxFormReducer } from 'redux-form'
import diskReduer from './diskReducer'

const rootReducer = combineReducers({
  server: {
    disk: diskReduer
  },
  form: ReduxFormReducer
})

export default rootReducer
