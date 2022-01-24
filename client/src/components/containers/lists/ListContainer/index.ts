export default function ListContainer({ ordered, children }) {
  return ordered ? <ol>{ children }</ol> : <ul>{ children }</ul>;
}