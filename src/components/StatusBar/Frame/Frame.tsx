import { useAppSelector } from 'hooks/useAppSelector';
import { getBet } from 'redux/bets/betsSelectors';
import { getUser } from 'redux/user/userSelectors';
import { useGetLevelInfoQuery } from 'redux/level/levelApi';
import useExperience from 'hooks/useExperience';
import moment from 'moment';
import bankFormatting from 'helpers/bankFormatting';

import Logo from 'components/InterfaceElements/Logo';
import UserInfo from '../UserInfo';
import LevelInfo from '../LevelInfo';
import RateInfo from '../RateInfo';

import { TimeWrapper, Time, Amount, BankWrapper } from './Frame.styled';

const MobileVersion: React.FC<{}> = () => {
  const bet = useAppSelector(getBet);

  const { name, nickname, bank, inGame } = useAppSelector(getUser);
  const { getExperienceToImprove } = useExperience();
  const { data } = useGetLevelInfoQuery();
  const stateAccount = bankFormatting(Number(bank).toFixed(2));

  return (
    <>
      <Logo />

      <TimeWrapper>
        <Time>{moment().format('YYYY-MM-DD HH:mm')}</Time>
      </TimeWrapper>

      <UserInfo
        name={name}
        nickname={nickname}
        rank={data?.level ? data?.level.rank : 'homeless'}
        level={data?.level ? data?.level.level : 1}
        inGame={inGame}
      />

      {inGame && (
        <LevelInfo
          experience={data?.level ? data.level.experience : 0}
          level={data?.level ? data.level.level : 1}
          experienceToImprove={getExperienceToImprove(
            data?.level ? data.level.level : 0,
          )}
        />
      )}

      {inGame && (
        <BankWrapper>
          <p>State of an account</p>
          <Amount>{`${stateAccount ? stateAccount : 0} $`}</Amount>
        </BankWrapper>
      )}

      {inGame && bet && (
        <RateInfo
          type={bet.type}
          number={bet.number}
          color={bet.color}
          betAmount={bet.betAmount}
          coefficient={bet.coefficient}
        />
      )}
    </>
  );
};

export default MobileVersion;
