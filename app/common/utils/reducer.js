import { handleActions } from 'redux-actions';

class OnHandler {
  constructor(actionCreator) {
    this.actionType = actionCreator.type;
    this.completedHandler = (state, action) => action.payload;
    this.failedHandler = (state) => state;
  }

  completed(handler) {
    this.completedHandler = handler;
    return this;
  }

  failed(handler) {
    this.failedHandler = handler;
    return this;
  }
}

export const createReducer = (func, initialState) => {
  const onHandlers = [];

  function on(actionCreator) {
    const onHandler = new OnHandler(actionCreator);
    onHandlers.push(onHandler);
    return onHandler;
  }

  func(on);

  const handlers = {};
  onHandlers.forEach(onHandler => {
    handlers[onHandler.actionType] = {
      next(state, action) {
        return onHandler.completedHandler(state, action) || state;
      },
      throw(state, action) {
        return onHandler.failedHandler(state, action) || state;
      }
    };
  });

  return handleActions(handlers, initialState);
};
