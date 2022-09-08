import { useAppSelector } from 'hooks/useAppSelector';
import { getIsLoggedIn } from 'redux/user/userSelectors';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gameRules from 'data/gameRules.json';

import Container from 'components/InterfaceElements/Container';
import Button from 'components/InterfaceElements/Button';
import IconSwitcher from 'components/InterfaceElements/IconSwitcher';

import { Title, Text, List, Item, ShowRulesButton } from './Greetings.styled';

const Greetings: React.FC<{}> = () => {
  const [showRulles, setShowRulles] = useState(false);
  const navigate = useNavigate();

  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const toogle = () => setShowRulles(prevstate => !prevstate);

  return (
    <Container
      type="color"
      padding="30px"
      margin="0 0 30px 0"
      width="856px"
      alignItems="center"
    >
      <Title>Welcome</Title>
      <Text>
        Hello newbie. Do you want to earn some money? I know excellent place to
        get into it you need to register or log in if you have already visited
        before. If you wish to familiarize yourself with click on the button
        below.
      </Text>
      <Text>Good luck newbie.</Text>

      {isLoggedIn ? (
        <Button
          type="button"
          background="green"
          height="60px"
          width="100%"
          borderRadius="50px"
          shadow
          margin="0 0 30px 0"
          onClick={() => navigate('/profile')}
        >
          start
        </Button>
      ) : (
        <List>
          <li>
            <Button
              type="button"
              background="green"
              height="60px"
              width="380px"
              borderRadius="50px"
              shadow
              onClick={() => navigate('/sign-up')}
            >
              Sign up
            </Button>
          </li>
          <li>
            <Button
              type="button"
              background="blue"
              height="60px"
              width="380px"
              borderRadius="50px"
              shadow
              onClick={() => navigate('/sign-in')}
            >
              Sign in
            </Button>
          </li>
        </List>
      )}

      <ShowRulesButton type="button" onClick={toogle}>
        {!showRulles && (
          <span>
            Show game rules{' '}
            <IconSwitcher name="arrowdown" size="14px" fill="currentColor" />
          </span>
        )}
        {showRulles && (
          <span>
            Hide game rules{' '}
            <IconSwitcher name="arrowleft" size="14px" fill="currentColor" />
          </span>
        )}
      </ShowRulesButton>

      {showRulles && (
        <ol>
          {gameRules.map(({ id, rules }) => {
            return (
              <Item key={id}>
                <p>{rules}</p>
              </Item>
            );
          })}
        </ol>
      )}
    </Container>
  );
};

export default Greetings;
