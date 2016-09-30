import { combineReducers } from 'redux';

import * as baseCommonReducers from './app/common/reducers';

export default combineReducers({
  ...baseCommonReducers
});
