import { useState, useEffect } from 'react';
import useExperience from 'hooks/useExperience';

import { ILevelInfoState } from 'types/IStatusBar';
import { Wrapper, Line, Progress, Data, Text } from './LevelInfo.styled';

const LevelInfo: React.FC<ILevelInfoState> = ({
  experience,
  level,
  experienceToImprove,
}) => {
  const [percengate, setPercengate] = useState(0);
  const { getPercentage } = useExperience();

  useEffect(() => {
    if (level && experience) {
      const value = getPercentage(level, experience);
      setPercengate(value);
    }
  }, [experience, getPercentage, level, percengate]);

  return (
    <Wrapper>
      <div>
        <Line>
          <Progress percengate={percengate} />
        </Line>
      </div>
      <Data>
        <Text>{`${experience}XP`}</Text>
        <Text>{level && level}</Text>
        <Text>{`${experienceToImprove}XP`}</Text>
      </Data>
    </Wrapper>
  );
};

export default LevelInfo;
