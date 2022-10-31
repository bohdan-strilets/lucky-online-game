import Media from 'react-media';
import screenWidth from 'helpers/screenWidth';
import { IPolicyState } from 'types/IPolicy';

import Mobile from './Responsiv/Mobile';
import Tablet from './Responsiv/Tablet';
import Desktop from './Responsiv/Desktop';

const Policy: React.FC<IPolicyState> = ({ title, text }) => {
  return (
    <Media
      queries={{
        small: '(max-width: 767px)',
        medium: `(min-width: ${screenWidth.tablet}) and (max-width: 1439px)`,
        large: `(min-width: ${screenWidth.desktop})`,
      }}
    >
      {matches => (
        <>
          {matches.small && <Mobile title={title} text={text} />}
          {matches.medium && <Tablet title={title} text={text} />}
          {matches.large && <Desktop title={title} text={text} />}
        </>
      )}
    </Media>
  );
};

export default Policy;
