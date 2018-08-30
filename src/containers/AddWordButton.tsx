import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as actions from '../actions/actions';
import Button from '../components/Button';

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  onhandleClick: actions.addWord,
}, dispatch);

const AddWordButton = connect(
  null,
  mapDispatchToProps
)(Button);
export default AddWordButton;
