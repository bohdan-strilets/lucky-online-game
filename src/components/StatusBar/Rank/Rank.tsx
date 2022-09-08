import IconSwitcher from 'components/InterfaceElements/IconSwitcher';
import { StarsWrapper } from './Rank.styled';

const Rank: React.FC<{ level: number }> = ({ level }) => {
  return (
    <StarsWrapper>
      {level < 5 && (
        <>
          <IconSwitcher name="starfill" fill="var(--green-color)" size="25px" />
          <IconSwitcher name="starfill" fill="var(--white-color)" size="25px" />
          <IconSwitcher name="starfill" fill="var(--white-color)" size="25px" />
          <IconSwitcher name="starfill" fill="var(--white-color)" size="25px" />
          <IconSwitcher name="starfill" fill="var(--white-color)" size="25px" />
          <IconSwitcher name="starfill" fill="var(--white-color)" size="25px" />
        </>
      )}

      {level > 4 && level < 10 && (
        <>
          <IconSwitcher name="starfill" fill="var(--green-color)" size="25px" />
          <IconSwitcher name="starfill" fill="var(--green-color)" size="25px" />
          <IconSwitcher name="starfill" fill="var(--white-color)" size="25px" />
          <IconSwitcher name="starfill" fill="var(--white-color)" size="25px" />
          <IconSwitcher name="starfill" fill="var(--white-color)" size="25px" />
          <IconSwitcher name="starfill" fill="var(--white-color)" size="25px" />
        </>
      )}

      {level > 9 && level < 15 && (
        <>
          <>
            <IconSwitcher
              name="starfill"
              fill="var(--green-color)"
              size="25px"
            />
            <IconSwitcher
              name="starfill"
              fill="var(--green-color)"
              size="25px"
            />
            <IconSwitcher
              name="starfill"
              fill="var(--green-color)"
              size="25px"
            />
            <IconSwitcher
              name="starfill"
              fill="var(--white-color)"
              size="25px"
            />
            <IconSwitcher
              name="starfill"
              fill="var(--white-color)"
              size="25px"
            />
            <IconSwitcher
              name="starfill"
              fill="var(--white-color)"
              size="25px"
            />
          </>
        </>
      )}

      {level > 14 && level < 20 && (
        <>
          <IconSwitcher name="starfill" fill="var(--green-color)" size="25px" />
          <IconSwitcher name="starfill" fill="var(--green-color)" size="25px" />
          <IconSwitcher name="starfill" fill="var(--green-color)" size="25px" />
          <IconSwitcher name="starfill" fill="var(--white-color)" size="25px" />
          <IconSwitcher name="starfill" fill="var(--white-color)" size="25px" />
          <IconSwitcher name="starfill" fill="var(--white-color)" size="25px" />
        </>
      )}

      {level > 19 && level < 25 && (
        <>
          <IconSwitcher name="starfill" fill="var(--green-color)" size="25px" />
          <IconSwitcher name="starfill" fill="var(--green-color)" size="25px" />
          <IconSwitcher name="starfill" fill="var(--green-color)" size="25px" />
          <IconSwitcher name="starfill" fill="var(--green-color)" size="25px" />
          <IconSwitcher name="starfill" fill="var(--white-color)" size="25px" />
          <IconSwitcher name="starfill" fill="var(--white-color)" size="25px" />
        </>
      )}

      {level > 24 && level < 30 && (
        <>
          <IconSwitcher name="starfill" fill="var(--green-color)" size="25px" />
          <IconSwitcher name="starfill" fill="var(--green-color)" size="25px" />
          <IconSwitcher name="starfill" fill="var(--green-color)" size="25px" />
          <IconSwitcher name="starfill" fill="var(--green-color)" size="25px" />
          <IconSwitcher name="starfill" fill="var(--green-color)" size="25px" />
          <IconSwitcher name="starfill" fill="var(--white-color)" size="25px" />
        </>
      )}

      {level === 30 && (
        <>
          <IconSwitcher name="starfill" fill="var(--green-color)" size="25px" />
          <IconSwitcher name="starfill" fill="var(--green-color)" size="25px" />
          <IconSwitcher name="starfill" fill="var(--green-color)" size="25px" />
          <IconSwitcher name="starfill" fill="var(--green-color)" size="25px" />
          <IconSwitcher name="starfill" fill="var(--green-color)" size="25px" />
          <IconSwitcher name="starfill" fill="var(--green-color)" size="25px" />
        </>
      )}
    </StarsWrapper>
  );
};

export default Rank;
