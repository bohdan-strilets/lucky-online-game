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
        <Value>{`${experience} XP`}</Value>
        <Value>{level}</Value>
        <Value>{`${bank} $`}</Value>
        <Value>{totalBets}</Value>
        <Value>{wonBets}</Value>
        <Value>{lostBets}</Value>
      </UserMetrics>
    </Wrapper>
  );
};

export default ListItem;