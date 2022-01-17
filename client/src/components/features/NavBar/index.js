import NavigationBar from '../../containers/NavigationBar';
import Heading1 from '../../containers/Heading1';
import NavigationLinkContainer from '../../containers/NavigationLinkContainer';
import NavigationLink from '../../containers/NavigationLink';

export default function NavBar() {
  return (
    <NavigationBar>
      <Heading1>GIST</Heading1>
      <NavigationLinkContainer>
        <NavigationLink to={'/'}>My Lists</NavigationLink>
        <NavigationLink to={'/friends'}>Friends</NavigationLink>
        <NavigationLink to={'/'}>Logout</NavigationLink>
      </NavigationLinkContainer>
    </NavigationBar>
  );
}