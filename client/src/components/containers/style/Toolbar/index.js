import Flexbox from '../../../containers/format/Flexbox';

export default function Toolbar({ children }) {
  const flexOptions = {
    flexDirection: 'row-reverse',
  }

  return <Flexbox flexOptions={flexOptions}>{children}</Flexbox>;
}