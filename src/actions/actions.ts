import actionCreatorFactory from 'typescript-fsa';
const actionCreator = actionCreatorFactory();

export const addWord = actionCreator<string>('ADD_WORD');
export const resetWords = actionCreator<string>('RESET_WORDS');
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
