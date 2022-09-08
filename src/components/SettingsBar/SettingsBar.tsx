import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from 'redux/user/userOperations';
import { useAppSelector } from 'hooks/useAppSelector';
import { getUser } from 'redux/user/userSelectors';
import { useState } from 'react';

import Container from 'components/Container';
import Button from 'components/Button';
import IconSwitcher from 'components/IconSwitcher';
import { toast } from 'react-toastify';

import { API_URL } from 'api';
import { Wrapper, Avatar, Item } from './SettingsBar.styled';

const SettingsBar: React.FC<{}> = () => {
  const [fullScreen, setFullScreen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { inGame, avatarURL, name } = useAppSelector(getUser);

  const logout = () => {
    dispatch(operations.signout());
    navigate('/');
  };

  const createNewGame = () => {
    if (inGame) {
      navigate('/game');
    } else {
      navigate('/new-game');
    }
  };

  const switchFullScreen = async () => {
    const elem = document.documentElement;
    try {
      await elem.requestFullscreen();
      setFullScreen(true);
      if (fullScreen) {
        await document.exitFullscreen();
        setFullScreen(false);
      }
    } catch (error) {
      toast.warning('Something went wrong. Try reloading the page.');
    }
  };

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
          {avatarURL && (
            <Avatar
              src={`${API_URL}/${avatarURL}`}
              alt={`${name} user avatar`}
            />
          )}

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
                onClick={() => navigate('/profile')}
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
                onClick={() => navigate('/statistics')}
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
                onClick={() => navigate('/store')}
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
