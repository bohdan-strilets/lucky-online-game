import { createPortal } from 'react-dom';

import Frame from './Frame';
import IconSwitcher from 'components/InterfaceElements/IconSwitcher';

import { Wrapper, CloseMenu } from './MStatusBar.styled';

const statusBarRoot = document.querySelector('#status-bar') as HTMLDivElement;

const MStatusBar: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return createPortal(
    <Wrapper>
      <CloseMenu type="button" onClick={() => onClose()}>
        <IconSwitcher name="cross" size="18px" fill="var(--green-color)" />
      </CloseMenu>

      <Frame />
    </Wrapper>,
    statusBarRoot,
  );
};

export default MStatusBar;
