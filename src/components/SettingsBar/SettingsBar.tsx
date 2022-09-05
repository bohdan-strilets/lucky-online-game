import { useNavigate } from 'react-router-dom';

import Container from 'components/Container';
import Button from 'components/Button';
import IconSwitcher from 'components/IconSwitcher';

import { Avatar, Item } from './SettingsBar.styled';

const SettingsBar: React.FC<{}> = () => {
  const navigate = useNavigate();

  const logout = () => {};

  const createNewGame = () => {};

  return (
    <Container
      type="transparent"
      width="80px"
      height="100vh"
      padding="10px"
      alignItems="center"
    >
      <div>
        <Avatar
          src="https://cdn.pixabay.com/photo/2022/08/13/09/05/lion-7383228_960_720.jpg"
          alt="User avatar"
        />

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
