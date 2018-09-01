import * as React from 'react';
import WordList from '../containers/WordList'
import AddWordButton from '../containers/AddWordButton'
import ResetWordsButton from '../containers/ResetWordsButton'
import PopTeamEpicContainer from '../containers/PopTeamEpic'

const App = () => (
  <div className="App">
    <p>App is working</p>
    <AddWordButton>Add Word</AddWordButton>
    <ResetWordsButton>Reset</ResetWordsButton>
    <WordList />
    <PopTeamEpicContainer />
  </div >
)

export default App
