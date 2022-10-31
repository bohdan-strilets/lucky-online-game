import Media from 'react-media';
import screenWidth from 'helpers/screenWidth';

import Mobile from './Responsiv/Mobile';
import Tablet from './Responsiv/Tablet';
import Desktop from './Responsiv/Desktop';

const SigninForm: React.FC<{}> = () => {
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
          {matches.small && <Mobile />}
          {matches.medium && <Tablet />}
          {matches.large && <Desktop />}
        </>
      )}
    </Media>
  );
};

export default SigninForm;
