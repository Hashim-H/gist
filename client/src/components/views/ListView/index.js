// libraries
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// api
import APIService from '../../../APIService';

// components
import View from '../../containers/views/ViewContainer';
import Spinner from '../../Spinner';
import ViewHeader from '../../containers/views/ViewHeaderContainer';
import { EditListButton, List } from './subComponents';

export default function GameList() {
  // state
  const { id } = useParams();
  const [list, setList] = useState({});

  useEffect(() => {
    (async () => {
      const fetchedList = await APIService.getListById(id);
      setList(fetchedList);
    })();
  }, [id]);

  // render
  if (!list.name) return <View><Spinner /></View>;

  return (
    <View>
      <ViewHeader>
        <h2>{list.name}</h2>
        {list.name ? <EditListButton id={list._id} /> : null}
      </ViewHeader>
      <List list={list} />
    </View>
  );
}