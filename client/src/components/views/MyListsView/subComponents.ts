// libraries
import { Fragment } from 'react';
import { IoIosAddCircle } from 'react-icons/io';

// components
import IconLink from '../../containers/links/IconLinkContainer';
import List from '../../containers/lists/ListContainer';
import ListItem from '../../containers/lists/ListItemContainer';
import ListLink from '../../containers/links/ListLinkContainer';

export function AddListButton() {
  return (
    <IconLink to="/listeditor">
      <IoIosAddCircle />
    </IconLink>
  );
};

export function MyLists({ lists }) {
  return (
    <List>
      {lists.map(list => {
        return (
          <Fragment key={list._id}>
            <ListLink to={`/list/${list._id}`}>
              <ListItem>
                <h3>{list.name}</h3>
              </ListItem>
            </ListLink>
          </Fragment>
        );
      })}
    </List>
  );
};