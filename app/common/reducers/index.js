import { fetchStart, fetchEnd } from '../utils/action';
import { createReducer } from '../utils/reducer';
import _ from 'lodash';

export const fetchStatus = createReducer(on => {
  on(fetchStart)
    .completed((state, action) => {
      const { type, key } = action.payload;

      if (key !== undefined) {
        const old = _.isObject(state[type]) ? state[type] : {};
        return Object.assign({}, state, {
	         [type]: Object.assign({}, old, { [key]: true }),
        });
      }
      return Object.assign({}, state, { [type]: true });
    });
  on(fetchEnd)
    .completed((state, action) => {
      const { type, key } = action.payload;

      if (key !== undefined) {
        const old = _.isObject(state[type]) ? state[type] : {};
        return Object.assign({}, state, {
          [type]: _.omit(old, key),
        });
      }
      return _.omit(state, type);
    });
}, {});
