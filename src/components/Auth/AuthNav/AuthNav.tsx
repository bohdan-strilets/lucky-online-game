import { List, Item, AuthLink } from './AuthNav.styled';

const AuthNav: React.FC<{}> = () => {
  return (
    <List>
      <Item>
        <AuthLink to="/sign-in">Sign in</AuthLink>
      </Item>
      <Item>
        <AuthLink to="/sign-up">Sign up</AuthLink>
      </Item>
    </List>
  );
};

export default AuthNav;
