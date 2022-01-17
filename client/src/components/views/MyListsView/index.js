// libraries
import { useState, useEffect } from 'react';

// api
import APIService from '../../../APIService';

// components
import Spinner from '../../Done/Spinner';
import View from '../../containers/ViewContainer';
import ViewHeader from '../../containers/ViewHeaderContainer';
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