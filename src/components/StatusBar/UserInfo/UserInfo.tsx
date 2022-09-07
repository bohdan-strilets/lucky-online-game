import { IUserInfoState } from 'types/IStatusBar';
import Rank from '../Rank';

import { Wrapper, Name, Nickname, Status } from './UserInfo.styled';

const UserInfo: React.FC<IUserInfoState> = ({
  name,
  nickname,
  rank,
  level,
}) => {
  return (
    <Wrapper>
      <Name>{name}</Name>
      <Nickname>{nickname}</Nickname>

      <Status>{rank}</Status>

      {level && <Rank level={level} />}
    </Wrapper>
  );
};

export default UserInfo;
