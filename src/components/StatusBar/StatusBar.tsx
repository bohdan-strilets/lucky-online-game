import Container from 'components/Container';
import Logo from 'components/Logo';
import UserInfo from './UserInfo';
import LevelInfo from './LevelInfo';
import RateInfo from './RateInfo';

import { BankWrapper, Amount } from './StatusBar.styled';

const StatusBar: React.FC<{}> = () => {
  return (
    <Container type="transparent" width="280px" height="100vh" padding="20px">
      <Logo />

      <UserInfo name="Bohdan Strilets" nickname="mp4" />

      <LevelInfo experience={23500} level={23} experienceToImprove={25000} />

      <BankWrapper>
        <p>State of an account</p>
        <Amount>5000 $</Amount>
      </BankWrapper>

      <RateInfo />
    </Container>
  );
};

export default StatusBar;
