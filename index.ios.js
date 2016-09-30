
import { AppRegistry } from 'react-native';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
const { Provider } = ReactRedux;
import ReduxPromiseMiddleware from 'redux-promise';
import reducers from './reducer';

import UserCenter from './app/comps/user/pages/center';

const store = Redux.createStore(reducers, Redux.compose(
  Redux.applyMiddleware(ReduxPromiseMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <UserCenter />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('RNTest', () => Root);
