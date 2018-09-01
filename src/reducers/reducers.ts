import { reducerWithInitialState } from 'typescript-fsa-reducers';
import * as actions from '../actions/actions';

export interface IWordsState {
  isPopTeamEpic: boolean;
  words: string[];
}

export const initialReduceWordsState: IWordsState = {
  isPopTeamEpic: false,
  words: []
}

export default reducerWithInitialState(initialReduceWordsState)
  .case(actions.addWord, (state: IWordsState, payload: string) => ({
    ...state,
    words: state.words.concat(
      payload
    )
  }))
  .case(actions.resetWords, (state: IWordsState) => ({
    ...state,
    words: []
  }))
  .case(actions.checkPopTeamEpic, (state: IWordsState, payload: boolean) => ({
    ...state,
    isPopTeamEpic: payload
  }))
  .build();
