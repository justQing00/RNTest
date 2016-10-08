import { createReducer } from '../../../common/utils/reducer';
import * as UserAction from '../actions';

export const userInfo = createReducer(on => {
  on(UserAction.info)
    .completed((state, action) => {
      return { user: '123'}
    });
}, { user: '1'});

