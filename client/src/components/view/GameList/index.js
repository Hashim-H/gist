// style
import './GameList.css';

// libraries
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// api
import { getListById  } from '../../../api';

// components
import Main from '../../structural/Main';
import List from '../../structural/List';
import Spinner from '../../feature/Spinner';

export default function GameList() {
  // STATE
  const { id } = useParams();
  const [list, setList] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await getListById(id);
      setList(data);
    })();
  }, [id]);

  // RENDER

  // TODO: create button components array

  // create list item components array
  const createListComponents = list => {
    return list.map(listItem => {

      const imgUrl = `http://media.steampowered.com/steamcommunity/public/images/apps/${listItem.appid}/${listItem.img_logo_url}.jpg`;
      return (
        <li className="list__item"
          key={listItem._id}
          onClick={() => alert('hi')}>
          <div className="list__item__flex__container">
            <div className="list__item__img" style={{ backgroundImage: `url(${imgUrl})` }}></div>
            <div className="list__item__text__container">
              <h3 className="list__item__name">{listItem.name}</h3>
              <p className="list__item__comments">{listItem.comments}</p>
            </div>

          </div>
        </li>
      );
    })
  };



  if (list.name) {
    return (
      <Main>
        <List heading={list.name}
          listComponents={createListComponents(list.games)} />
      </Main>
    );
  } else {
    return (
      <Spinner />
    );
  }
}


      // <Main>
      //   <List heading="My Lists"
      //     listComponents={createListComponents(listsState.lists)} />
      // </Main>