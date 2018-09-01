import { take, takeLatest, put, all, fork, select } from 'redux-saga/effects'
import * as actions from '../actions/actions';

const getWords = (state: any) => state.words

function* addWord(action: any) {
  let word: string;
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      word = 'Pop';
      break;
    case 1:
      word = 'Team';
      break;
    case 2:
      word = 'Epic';
      break;
    default:
      word = '';
  }
  yield put({ type: actions.addWord.type, payload: word })
}

function* resetWords(action: any) {
  yield put({ type: actions.resetWords.type })
}

function* watchAddWord() {
  yield takeLatest(actions.pushAddWordButton.type, addWord)
}

function* watchResetWords() {
  yield takeLatest(actions.pushResetWordsButton.type, resetWords)
}

function* checkPopTeamEpic() {
  while (true) {
    yield take([actions.addWord, actions.resetWords])
    const words = yield select(getWords)
    const isPopTeamEpic = yield words.join('').endsWith('PopTeamEpic')
    yield put({ type: actions.checkPopTeamEpic.type, payload: isPopTeamEpic })
  }
}

function* root() {
  yield all([fork(watchAddWord), fork(watchResetWords), fork(checkPopTeamEpic)])
}

export default root

