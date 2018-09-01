import * as React from 'react'
import { connect } from 'react-redux';
import { IWordsState } from '../reducers/reducers';

/* components */
interface IPopTeamEpicProps {
  isPopTeamEpic: boolean;
}

const showPopTeamEpic = (isPopTeamEpic: boolean) => {
  if (isPopTeamEpic) {
    return 'bomb';
  }
  return '';
}

const PopTeamEpicComponent: React.SFC<IPopTeamEpicProps> = ({ isPopTeamEpic = false }) => {

  return (
    <p>{showPopTeamEpic(isPopTeamEpic)}</p>
  );

}

/* containers */
const mapStateToProps = (state: IWordsState) => ({ isPopTeamEpic: state.isPopTeamEpic })

const PopTeamEpicContainer = connect(mapStateToProps)(PopTeamEpicComponent);
export default PopTeamEpicContainer;
