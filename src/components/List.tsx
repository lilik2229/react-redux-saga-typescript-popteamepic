import * as React from 'react'

interface IListProps {
  words?: string[];
}

const List: React.SFC<IListProps> = ({ words = [] }) => <p>{words}</p>

export default List
