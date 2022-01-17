import BlockContainer from '../../containers/format/BlockContainer';
import Flexbox from '../../containers/format/Flexbox';

export default function Banner({ children }) {
  const flexOptions = {
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  }

  return (
    <BlockContainer>
      <Flexbox flexOptions={flexOptions}>{children}</Flexbox>
    </BlockContainer>
  );
}