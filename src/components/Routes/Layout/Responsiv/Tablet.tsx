import Logo from 'components/InterfaceElements/Logo';
import Controllers from 'components/Profile/Controllers';

import { ILayoutState } from 'types/ILayout';
import { Wrapper, Body } from '../Layout.styled';

const Tablet: React.FC<ILayoutState> = ({ children, showSidebars }) => {
  return (
    <Wrapper>
      {!showSidebars && (
        <div>
          <Logo margin="50px auto" />
        </div>
      )}

      <Body showSidebars={showSidebars}>
        <div>{children}</div>
        {showSidebars && <Controllers />}
      </Body>
    </Wrapper>
  );
};

export default Tablet;
