import { reducerWithInitialState } from 'typescript-fsa-reducers';
import * as actions from '../actions/actions';

export interface IWordsState {
  words: string[];
}

export const initialReduceWordsState: IWordsState = {
  words: []
}

export default reducerWithInitialState(initialReduceWordsState)
  .case(actions.addWord, (state: IWordsState, payload) => ({
    ...state,
    words: state.words.concat(
      payload
    )
  }))
  .case(actions.resetWords, (state: IWordsState, payload) => ({
    ...state,
    words: []
  }))
  .build();
