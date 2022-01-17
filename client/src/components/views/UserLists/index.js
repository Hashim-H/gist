// style
import styles from './UserLists.module.css';

// libraries
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoIosAddCircle } from 'react-icons/io';

// store
import { selectLists } from '../../../redux/slices/lists';

// components
import ContentContainer from '../../containers/format/ViewContainer';
import ListContainer from '../../containers/format/ListContainer';
import ListItem from '../../containers/format/ListItem';
import Spinner from '../../features/Spinner';
import Banner from '../../features/Banner';
import IconLink from '../../containers/style/links/IconLink';
import CustomLink from '../../containers/style/links/CustomLink';
import ListItemContentContainer from '../../containers/style/other/ListItemContentContainer';
import Heading2 from '../../containers/style/headings/Heading2';
import Toolbar from '../../containers/style/Toolbar';

export default function UserLists() {
  // state
  const listsState = useSelector(selectLists);


  // render helper functions
  const renderListItems = () => {
    return listsState.lists.map(list => {
      return (
        <Link
          className={styles.link}
          key={list._id}
          to={`/list/${list._id}`}>
            <ListItem>{list.name}</ListItem>
        </Link>
      );
    })
  };


  // render
  if (listsState.loading) return <Spinner />;

  return (
    <ContentContainer>
      <Banner>
        <Heading2>My Lists</Heading2>
        <Toolbar>
          <IconLink to="/listeditor"><IoIosAddCircle /></IconLink>
        </Toolbar>
      </Banner>
      <ListContainer>
        {listsState.lists.map(list => {
          return (
            <Fragment key={list._id}>
              <ListItem>
                <CustomLink to={`/list/${list._id}`}>
                  <ListItemContentContainer>
                    {list.name}
                  </ListItemContentContainer>
                </CustomLink>
              </ListItem>
            </Fragment>
          );
        })}
      </ListContainer>
    </ContentContainer>
  );
}