import { connect } from 'react-redux';
import { IWordsState } from '../reducers/reducers';
import List from '../components/List';

const mapStateToProps = (state: IWordsState) => ({ words: state.words })

const WordList = connect(mapStateToProps)(List);
export default WordList;
