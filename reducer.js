import { combineReducers } from 'redux';

import * as baseCommonReducers from './app/common/reducers';
import * as userReducers from './app/comps/user/reducers';

export default combineReducers({
  ...baseCommonReducers,
  ...userReducers
});
