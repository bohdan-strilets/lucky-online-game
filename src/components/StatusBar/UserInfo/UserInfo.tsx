import { IUserInfoState } from 'types/IStatusBar';
import IconSwitcher from 'components/IconSwitcher';
import {
  Wrapper,
  Name,
  Nickname,
  Status,
  StarsWrapper,
} from './UserInfo.styled';

const UserInfo: React.FC<IUserInfoState> = ({ name, nickname }) => {
  return (
    <Wrapper>
      <Name>{name}</Name>
      <Nickname>{nickname}</Nickname>

      <Status>investor</Status>
      <StarsWrapper>
        <IconSwitcher name="starfill" fill="var(--green-color)" size="25px" />
        <IconSwitcher name="starfill" fill="var(--green-color)" size="25px" />
        <IconSwitcher name="starfill" fill="var(--green-color)" size="25px" />
        <IconSwitcher name="starfill" fill="var(--green-color)" size="25px" />
        <IconSwitcher name="starfill" fill="var(--green-color)" size="25px" />
        <IconSwitcher name="starfill" fill="var(--green-color)" size="25px" />
        <IconSwitcher name="starfill" fill="var(--white-color)" size="25px" />
        <IconSwitcher name="starfill" fill="var(--white-color)" size="25px" />
      </StarsWrapper>
    </Wrapper>
  );
};

export default UserInfo;
