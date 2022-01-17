import { Oval } from 'react-loader-spinner';

import Flexbox from '../../containers/format/Flexbox';

export default function Spinner() {
  const flexOptions = {
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <Flexbox flexOptions={flexOptions}>
      <Oval color="#C7D5E0" height={40} />;
    </Flexbox>
  );
}