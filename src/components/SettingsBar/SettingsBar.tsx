import useSettingsBar from 'hooks/useSettingsBar';

import Container from 'components/InterfaceElements/Container';
import Button from 'components/InterfaceElements/Button';
import IconSwitcher from 'components/InterfaceElements/IconSwitcher';

import { Wrapper, Avatar, Item } from './SettingsBar.styled';

const SettingsBar: React.FC<{}> = () => {
  const {
    createNewGame,
    logout,
    switchFullScreen,
    avatarURL,
    name,
    fullScreen,
    openBetList,
    openProfile,
    openStatistics,
    openStore,
    openRating,
    openInformation,
    soundSwitch,
    soundOff,
  } = useSettingsBar();

  return (
    <Container
      type="transparent"
      width="80px"
      height="100vh"
      padding="10px"
      alignItems="center"
    >
      <Wrapper>
        <div>
          {avatarURL && <Avatar src={avatarURL} alt={`${name} user avatar`} />}

          <ul>
            <Item>
              <Button
                type="button"
                width="40px"
                height="40px"
                background="blue"
                borderRadius="10px"
                onClick={createNewGame}
              >
                <IconSwitcher
                  name="play"
                  fill="var(--white-color)"
                  size="22px"
                />
              </Button>
            </Item>

            <Item>
              <Button
                type="button"
                width="40px"
                height="40px"
                background="blue"
                borderRadius="10px"
                onClick={openBetList}
              >
                <IconSwitcher
                  name="list"
                  fill="var(--white-color)"
                  size="22px"
                />
              </Button>
            </Item>

            <Item>
              <Button
                type="button"
                width="40px"
                height="40px"
                background="blue"
                borderRadius="10px"
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
                width="40px"
                height="40px"
                background="blue"
                borderRadius="10px"
                onClick={openStatistics}
              >
                <IconSwitcher
                  name="bar"
                  fill="var(--white-color)"
                  size="22px"
                />
              </Button>
            </Item>

            <Item>
              <Button
                type="button"
                width="40px"
                height="40px"
                background="blue"
                borderRadius="10px"
                onClick={openStore}
              >
                <IconSwitcher
                  name="store"
                  fill="var(--white-color)"
                  size="22px"
                />
              </Button>
            </Item>

            <Item>
              <Button
                type="button"
                width="40px"
                height="40px"
                background="blue"
                borderRadius="10px"
                onClick={openRating}
              >
                <IconSwitcher
                  name="medal"
                  fill="var(--white-color)"
                  size="22px"
                />
              </Button>
            </Item>

            <Item>
              <Button
                type="button"
                width="40px"
                height="40px"
                background="blue"
                borderRadius="10px"
                onClick={openInformation}
              >
                <IconSwitcher
                  name="info"
                  fill="var(--white-color)"
                  size="22px"
                />
              </Button>
            </Item>

            <Item>
              <Button
                type="button"
                width="40px"
                height="40px"
                background="blue"
                borderRadius="10px"
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
                width="40px"
                height="40px"
                background="blue"
                borderRadius="10px"
                onClick={switchFullScreen}
              >
                {fullScreen ? (
                  <IconSwitcher
                    name="minimize"
                    fill="var(--white-color)"
                    size="22px"
                  />
                ) : (
                  <IconSwitcher
                    name="expand"
                    fill="var(--white-color)"
                    size="22px"
                  />
                )}
              </Button>
            </Item>
          </ul>
        </div>

        <Button
          type="button"
          width="40px"
          height="40px"
          background="blue"
          borderRadius="10px"
          onClick={logout}
        >
          <IconSwitcher name="power" fill="var(--white-color)" size="22px" />
        </Button>
      </Wrapper>
    </Container>
  );
};

export default SettingsBar;
