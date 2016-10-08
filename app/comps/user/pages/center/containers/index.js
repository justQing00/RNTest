import PureCenter from '../components';
import * as ReactRedux from 'react-redux';
import * as UserAction from '../../../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.userInfo
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  };
};

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(PureCenter);


