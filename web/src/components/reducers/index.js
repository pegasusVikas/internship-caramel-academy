import { combineReducers } from 'redux';

import Common from '../reducers/common'
import Contact from '../reducers/contact'

export default () => combineReducers({
  // router: connectRouter(history),
  contacts : Contact ,
  commonData: Common,
});
