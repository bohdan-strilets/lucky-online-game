import { useAppSelector } from 'hooks/useAppSelector';
import { getUser } from 'redux/user/userSelectors';
import { useGetLevelInfoQuery } from 'redux/level/levelApi';
import useExperience from 'hooks/useExperience';
import moment from 'moment';

import Container from 'components/InterfaceElements/Container';
import Logo from 'components/InterfaceElements/Logo';
import UserInfo from './UserInfo';
import LevelInfo from './LevelInfo';
import RateInfo from './RateInfo';

import { TimeWrapper, Time, BankWrapper, Amount } from './StatusBar.styled';

const StatusBar: React.FC<{}> = () => {
  const { name, nickname, bank } = useAppSelector(getUser);
  const { getExperienceToImprove } = useExperience();
  const { data } = useGetLevelInfoQuery();

  return (
    <Container type="transparent" width="280px" height="100vh" padding="20px">
      <Logo />

      <TimeWrapper>
        {/* <Time>{moment().format('Do YYYY, H:mm')}</Time> */}
        <Time>{moment().format('YYYY-MM-DD HH:mm')}</Time>
      </TimeWrapper>

      <UserInfo
        name={name}
        nickname={nickname}
        rank={data?.level ? data?.level.rank : 'homeless'}
        level={data?.level ? data?.level.level : 1}
      />

      {data && (
        <LevelInfo
          experience={data?.level ? data.level.experience : 0}
          level={data?.level ? data.level.level : 0}
          experienceToImprove={getExperienceToImprove(
            data?.level ? data.level.level : 0,
          )}
        />
      )}

      <BankWrapper>
        <p>State of an account</p>
        <Amount>{`${bank} $`}</Amount>
      </BankWrapper>

      <RateInfo />
    </Container>
  );
};

export default StatusBar;
