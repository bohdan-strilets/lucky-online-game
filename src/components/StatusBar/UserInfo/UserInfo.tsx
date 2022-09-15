import { IUserInfoState } from 'types/IStatusBar';
import Rank from '../Rank';

import { Wrapper, Name, Nickname, Status } from './UserInfo.styled';

const UserInfo: React.FC<IUserInfoState> = ({
  name,
  nickname,
  rank,
  level,
  inGame,
}) => {
  return (
    <Wrapper>
      <Name>{name}</Name>
      <Nickname>{nickname}</Nickname>
      {inGame && rank && <Status>{rank}</Status>}
      {inGame && level && <Rank level={level} />}
    </Wrapper>
  );
};

export default UserInfo;
