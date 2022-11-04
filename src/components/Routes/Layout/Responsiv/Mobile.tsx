import Logo from 'components/InterfaceElements/Logo';
import StatusBar from 'components/StatusBar';
import SettingsBar from 'components/SettingsBar';
import MobileVersion from 'components/SettingsBar/MobileVersion';

import { ILayoutState } from 'types/ILayout';
import { Wrapper, Body } from '../Layout.styled';

const Mobile: React.FC<ILayoutState> = ({ children, showSidebars }) => {
  return (
    <Wrapper>
      {!showSidebars && (
        <div>
          <Logo margin="50px auto" />
        </div>
      )}

      <Body showSidebars={showSidebars}>
        <div>{children}</div>
      </Body>
    </Wrapper>
  );
};

export default Mobile;
