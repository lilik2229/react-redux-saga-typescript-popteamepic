import * as React from 'react';
import WordList from '../containers/WordList'
import AddWordButton from '../containers/AddWordButton'
import ResetWordsButton from '../containers/ResetWordsButton'

const App = () => (
  <div className="App">
    <p>App is working</p>
    <AddWordButton>Add Word</AddWordButton>
    <ResetWordsButton>Reset</ResetWordsButton>
    <WordList />
  </div >
)

export default App
