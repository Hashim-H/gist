// libraries
import { useState, useEffect } from 'react';

// api
import APIService from '../../../APIService';

// components
import View from '../../containers/views/ViewContainer';
import Spinner from '../../features/Spinner';
import ViewHeader from '../../containers/views/ViewSectionContainer';
import { AddListButton } from './subComponents';
import { MyLists } from './subComponents';

export default function MyListsView() {
  // state
  const [lists, setLists] = useState();

  useEffect(() => {
    (async () => {
      const fetchedLists = await APIService.getLists();
      setLists(fetchedLists);
    })();
  },[]);

  // render
  if (!lists) return <View><Spinner /></View>;

  return (
    <View>
      <ViewHeader>
        <h2>My Lists</h2>
        <AddListButton />
      </ViewHeader>
      <MyLists lists={lists}/>
    </View>
  );
}