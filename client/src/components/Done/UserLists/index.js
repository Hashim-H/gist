// libraries
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { IoIosAddCircle } from 'react-icons/io';

// store
import { selectLists } from '../../../redux/slices/lists';

// components
import ViewContainer from '../ViewContainer';
import Banner from '../Banner';
import Heading2 from '../Heading2';
import Toolbar from '../Toolbar';
import CustomIconLink from '../CustomIconLink';
import ListContainer from '../ListContainer';
import ListItem from '../ListItem';
import CustomLink from '../CustomLink';
import Spinner from '../Spinner';

export default function UserLists() {
  // state
  const listsState = useSelector(selectLists);

  // render
  if (listsState.loading) return <Spinner />;

  return (
    <ViewContainer>
      <Banner>
        <Heading2>My Lists</Heading2>
        <Toolbar>
          <CustomIconLink to="/listeditor"><IoIosAddCircle /></CustomIconLink>
        </Toolbar>
      </Banner>
      <ListContainer>
        {listsState.lists.map(list => {
          return (
            <Fragment key={list._id}>
              <CustomLink to={`/list/${list._id}`}>
                <ListItem>{list.name}</ListItem>
              </CustomLink>
            </Fragment>
          );
        })}
      </ListContainer>
    </ViewContainer>
  );
}