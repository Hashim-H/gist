// style
import './List.css';

export default function List({ heading, buttonComponents, listComponents }) {

  // TODO: add buttons array prop
  return (
    <div className="list__container">
      <div className="list__header">
        <h2 className="list__heading">{heading}</h2>
        {buttonComponents}
      </div>
        <ul className="list">
          {listComponents}
        </ul>
    </div>
  );
}