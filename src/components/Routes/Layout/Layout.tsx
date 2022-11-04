import Media from 'react-media';
import screenWidth from 'helpers/screenWidth';

import Logo from 'components/InterfaceElements/Logo';
import StatusBar from 'components/StatusBar';
import SettingsBar from 'components/SettingsBar';

import { ILayoutState } from 'types/ILayout';
import { Wrapper, Body } from './Layout.styled';

import Mobile from './Responsiv/Mobile';
import Tablet from './Responsiv/Tablet';
import Desktop from './Responsiv/Desktop';

const Layout: React.FC<ILayoutState> = ({ children, showSidebars }) => {
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
          {matches.small && (
            <Mobile children={children} showSidebars={showSidebars} />
          )}
          {matches.medium && (
            <Tablet children={children} showSidebars={showSidebars} />
          )}
          {matches.large && (
            <Desktop children={children} showSidebars={showSidebars} />
          )}
        </>
      )}
    </Media>

    // <Wrapper>
    //   {!showSidebars && (
    //     <div>
    //       <Logo margin="50px auto" />
    //     </div>
    //   )}

    //   <Body showSidebars={showSidebars}>
    //     {showSidebars && <StatusBar />}
    //     <div>{children}</div>
    //     {showSidebars && <SettingsBar />}
    //   </Body>
    // </Wrapper>
  );
};

export default Layout;
