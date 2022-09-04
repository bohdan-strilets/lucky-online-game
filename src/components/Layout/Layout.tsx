import Logo from 'components/Logo';
import StatusBar from 'components/StatusBar';
import SettingsBar from 'components/SettingsBar';

import { ILayoutState } from 'types/ILayout';
import { Wrapper, Body } from './Layout.styled';

const Layout: React.FC<ILayoutState> = ({ children, showSidebars }) => {
  return (
    <Wrapper>
      {!showSidebars && (
        <div>
          <Logo margin="50px auto" />
        </div>
      )}

      <Body showSidebars={showSidebars}>
        {showSidebars && <StatusBar />}
        <div>{children}</div>
        {showSidebars && <SettingsBar />}
      </Body>
    </Wrapper>
  );
};

export default Layout;
