import { IListItemState } from 'types/IListItem';

import {
  Wrapper,
  Position,
  Number,
  UserInfo,
  Avatar,
  Name,
  UserMetrics,
  Value,
} from './ListItem.styled';

const ListItem: React.FC<IListItemState> = ({
  position,
  avatar,
  name,
  experience,
  level,
  bank,
  totalBets,
  wonBets,
  lostBets,
}) => {
  return (
    <Wrapper>
      <Position position={position}>
        <Number>{position}</Number>
      </Position>

      <UserInfo>
        <Avatar src={avatar} alt={`Avatar by ${name}`} />
        <Name>{name}</Name>
      </UserInfo>

      <UserMetrics>
        {experience && <Value>{`${experience} XP`}</Value>}
        {level && <Value>{level}</Value>}
        {bank && <Value>{`${bank} $`}</Value>}
        {totalBets && <Value>{totalBets}</Value>}
        {wonBets && <Value>{wonBets}</Value>}
        {lostBets && <Value>{lostBets}</Value>}
      </UserMetrics>
    </Wrapper>
  );
};

export default ListItem;
