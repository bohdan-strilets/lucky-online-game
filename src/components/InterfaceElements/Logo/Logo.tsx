import logoIcon from 'images/logo/logo-icon.png';
import { ILogoState } from 'types/ILogo';

import {
  Wrapper,
  StyledLink,
  Subtitle,
  Group,
  Icon,
  Title,
} from './Logo.styled';

const Logo: React.FC<ILogoState> = ({ margin }) => {
  return (
    <Wrapper margin={margin}>
      <StyledLink to="/">
        <Subtitle>online game</Subtitle>
        <Group>
          <Icon src={logoIcon} alt="Logo icon - lucky" />
          <Title>Lucky</Title>
        </Group>
      </StyledLink>
    </Wrapper>
  );
};

export default Logo;
