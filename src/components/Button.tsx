import * as React from 'react';

interface IButtonProps {
  children?: React.ReactNode;
  onhandleClick: () => any;
  isPopTeamEpic: boolean;
}

const Button: React.SFC<IButtonProps> = (props) => {
  const children = props.children;

  const handleAddWord = () => {
    props.onhandleClick();
  };

  return (
    <div>
      <button type="submit" onClick={handleAddWord}>
        {children}
      </button>
    </div>
  )
}

export default Button
