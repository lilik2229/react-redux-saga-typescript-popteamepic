import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as actions from '../actions/actions';
import { IWordsState } from '../reducers/reducers';
import Button from '../components/Button';

const mapStateToProps = (state: IWordsState) => ({ isPopTeamEpic: state.isPopTeamEpic })

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  onhandleClick: actions.pushAddWordButton,
}, dispatch);

const AddWordButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
export default AddWordButton;
