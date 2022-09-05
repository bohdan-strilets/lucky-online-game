import { useState, useEffect } from 'react';

import { ILevelInfoState } from 'types/IStatusBar';
import { Wrapper, Line, Progress, Data, Text } from './LevelInfo.styled';

const LevelInfo: React.FC<ILevelInfoState> = ({
  experience,
  level,
  experienceToImprove,
}) => {
  const [percengate, setPercengate] = useState(0);

  useEffect(() => {
    setPercengate(75);
  }, []);

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
