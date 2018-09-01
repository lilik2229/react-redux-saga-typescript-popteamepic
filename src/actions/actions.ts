import actionCreatorFactory from 'typescript-fsa';
const actionCreator = actionCreatorFactory();

export const pushAddWordButton = actionCreator('PUSH_ADD_WORD_BUTTON');
export const pushResetWordsButton = actionCreator('PUSH_RESET_WORDS_BUTTON');
export const addWord = actionCreator<string>('ADD_WORD');
export const resetWords = actionCreator('RESET_WORDS');
export const checkPopTeamEpic = actionCreator<boolean>('CHECK_POPTEAMEPIC');
// export const ADD_WORD = 'ADD_WORD'
// export const addWord = () => {
//   const payload = { word: 'pop' }
//   return { type: ADD_WORD, payload }
// }

// export const RESET_WORDS = 'RESET_WORDS'
// export const resetWords = () => {
//   const payload = { label: 'Reset' }
//   return { type: RESET_WORDS, payload }
// }
