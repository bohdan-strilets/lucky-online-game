import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from 'redux/user/userOperations';
import { useAppSelector } from 'hooks/useAppSelector';
import { getUser } from 'redux/user/userSelectors';

import Container from 'components/Container';
import Button from 'components/Button';
import IconSwitcher from 'components/IconSwitcher';

import { API_URL } from 'api';
import { Avatar, Item } from './SettingsBar.styled';

const SettingsBar: React.FC<{}> = () => {
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

  return (
    <Container
      type="transparent"
      width="80px"
      height="100vh"
      padding="10px"
      alignItems="center"
    >
      <div>
        {avatarURL && (
          <Avatar src={`${API_URL}/${avatarURL}`} alt={`${name} user avatar`} />
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
              <IconSwitcher name="play" fill="var(--white-color)" size="22px" />
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
              <IconSwitcher name="bar" fill="var(--white-color)" size="22px" />
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
            >
              <IconSwitcher
                name="minimize"
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
              onClick={logout}
            >
              <IconSwitcher
                name="power"
                fill="var(--white-color)"
                size="22px"
              />
            </Button>
          </Item>
        </ul>
      </div>
    </Container>
  );
};

export default SettingsBar;
