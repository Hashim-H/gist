// libraries
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// api
import APIService from '../../../APIService';

// components
import View from '../../containers/views/ViewContainer';
import Spinner from '../../features/Spinner';
import ViewHeader from '../../containers/views/ViewSectionContainer';
import { EditListButton, List } from './subComponents';

const ListView: React.FC = () => {
  // state
  const { id } = useParams();
  const [list, setList] = useState<gameList>();//was useState({})

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

export default ListView;