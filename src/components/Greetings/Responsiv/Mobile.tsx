import useGreetings from 'hooks/useGreetings';

import Container from 'components/InterfaceElements/Container';
import Button from 'components/InterfaceElements/Button';
import IconSwitcher from 'components/InterfaceElements/IconSwitcher';
import Rules from '../Rules';

import {
  Title,
  Text,
  List,
  ShowRulesButton,
  Warning,
} from '../Greetings.styled';

const Mobile: React.FC<{}> = () => {
  const {
    isLoggedIn,
    showRulles,
    toogle,
    redirectToProfile,
    redirectToSignup,
    redirectToSignin,
  } = useGreetings();

  return (
    <Container
      type="color"
      padding="30px"
      margin="0 0 30px 0"
      width="300px"
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
          onClick={redirectToProfile}
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
              width="250px"
              borderRadius="50px"
              shadow
              onClick={redirectToSignup}
              margin="0 0 15px 0"
            >
              Sign up
            </Button>
          </li>
          <li>
            <Button
              type="button"
              background="blue"
              height="60px"
              width="250px"
              borderRadius="50px"
              shadow
              onClick={redirectToSignin}
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

      {showRulles && <Rules />}

      <Warning>Warning!!! There are sounds on the site!</Warning>
    </Container>
  );
};

export default Mobile;
