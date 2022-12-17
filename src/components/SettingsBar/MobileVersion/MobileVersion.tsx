import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import useSettingsBar from 'hooks/useSettingsBar';

import Button from 'components/InterfaceElements/Button';
import IconSwitcher from 'components/InterfaceElements/IconSwitcher';
import Logo from 'components/InterfaceElements/Logo';

import { Wrapper, CloseMenu, List, Item } from './MobileVersion.styled';

const menuRoot = document.querySelector('#mobile-menu') as HTMLDivElement;

const MobileVersion: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const {
    createNewGame,
    logout,
    openBetList,
    openProfile,
    openStatistics,
    openStore,
    openRating,
    openInformation,
    soundSwitch,
    soundOff,
  } = useSettingsBar();

  return createPortal(
    <Wrapper>
      <CloseMenu type="button" onClick={() => onClose()}>
        <IconSwitcher name="cross" size="18px" fill="var(--green-color)" />
      </CloseMenu>

      <Logo />

      <List>
        <Item>
          <Button
            type="button"
            background="blue"
            borderRadius="10px"
            width="280px"
            height="50px"
            onClick={createNewGame}
          >
            <IconSwitcher name="play" fill="var(--white-color)" size="22px" />
          </Button>
        </Item>
        <Item>
          <Button
            type="button"
            background="blue"
            borderRadius="10px"
            width="280px"
            height="50px"
            onClick={openBetList}
          >
            <IconSwitcher name="list" fill="var(--white-color)" size="22px" />
          </Button>
        </Item>
        <Item>
          <Button
            type="button"
            background="blue"
            borderRadius="10px"
            width="280px"
            height="50px"
            onClick={openProfile}
          >
            <IconSwitcher
              name="settings"
              fill="var(--white-color)"
              size="22px"
            />
          </Button>
        </Item>
        <Item>
          <Button
            type="button"
            background="blue"
            borderRadius="10px"
            width="280px"
            height="50px"
            onClick={openStatistics}
          >
            <IconSwitcher name="bar" fill="var(--white-color)" size="22px" />
          </Button>
        </Item>
        <Item>
          <Button
            type="button"
            background="blue"
            borderRadius="10px"
            width="280px"
            height="50px"
            onClick={openStore}
          >
            <IconSwitcher name="store" fill="var(--white-color)" size="22px" />
          </Button>
        </Item>
        <Item>
          <Button
            type="button"
            background="blue"
            borderRadius="10px"
            width="280px"
            height="50px"
            onClick={openRating}
          >
            <IconSwitcher name="medal" fill="var(--white-color)" size="22px" />
          </Button>
        </Item>
        <Item>
          <Button
            type="button"
            background="blue"
            borderRadius="10px"
            width="280px"
            height="50px"
            onClick={openInformation}
          >
            <IconSwitcher name="info" fill="var(--white-color)" size="22px" />
          </Button>
        </Item>
        <Item>
          <Button
            type="button"
            background="blue"
            borderRadius="10px"
            width="280px"
            height="50px"
            onClick={soundSwitch}
          >
            {soundOff ? (
              <IconSwitcher
                name="sound_on"
                fill="var(--white-color)"
                size="22px"
              />
            ) : (
              <IconSwitcher
                name="sound_off"
                fill="var(--white-color)"
                size="22px"
              />
            )}
          </Button>
        </Item>
        <Item>
          <Button
            type="button"
            background="blue"
            borderRadius="10px"
            width="280px"
            height="50px"
            onClick={logout}
          >
            <IconSwitcher name="power" fill="var(--white-color)" size="22px" />
          </Button>
        </Item>
      </List>
    </Wrapper>,
    menuRoot,
  );
};

export default MobileVersion;
