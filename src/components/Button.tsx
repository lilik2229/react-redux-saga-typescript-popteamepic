import * as React from 'react';

interface IButtonProps {
  children?: React.ReactNode;
  onhandleClick: (str: string) => any;
}

const Button: React.SFC<IButtonProps> = (props) => {
  const children = props.children;

  const handleAddWord = () => {
    props.onhandleClick('pop');
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
