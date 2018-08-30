import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as actions from '../actions/actions';
import Button from '../components/Button';

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  onhandleClick: actions.resetWords,
}, dispatch);

const ResetWordsButton = connect(
  null,
  mapDispatchToProps
)(Button);
export default ResetWordsButton;
