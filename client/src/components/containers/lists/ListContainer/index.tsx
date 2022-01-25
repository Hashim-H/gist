import * as React from 'react';

interface Props {
  ordered?: boolean;
  children: any
}

const ListContainer: React.FC<Props> = ({ ordered, children }): JSX.Element => {
  return ordered ? <ol>{ children }</ol> : <ul>{ children }</ul>;
}

export default ListContainer;