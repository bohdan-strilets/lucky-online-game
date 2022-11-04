import Media from 'react-media';
import screenWidth from 'helpers/screenWidth';

import Mobile from './Responsiv/Mobile';
import Desktop from './Responsiv/Desktop';

const Controllers: React.FC<{}> = () => {
  return (
    <Media
      queries={{
        small: '(max-width: 1439px)',
        large: `(min-width: ${screenWidth.desktop})`,
      }}
    >
      {matches => (
        <>
          {matches.small && <Mobile />}
          {matches.large && <Desktop />}
        </>
      )}
    </Media>
  );
};

export default Controllers;
