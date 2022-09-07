// import { useChangeLevelMutation } from 'redux/level/levelApi';
// import { useChangeRankMutation } from 'redux/level/levelApi';

import experienceInfo from 'data/experience.json';
import { toast } from 'react-toastify';

const useExperience = () => {
  //   const [changeLevel] = useChangeLevelMutation();
  //   const [changeRank] = useChangeRankMutation();

  const findCurrentLevel = (currentLevel: number) => {
    const currentLevelInfo = experienceInfo.find(
      ({ level }) => level === currentLevel,
    );

    return currentLevelInfo;
  };

  const getExperienceToImprove = (currentLevel: number) => {
    const level = currentLevel + 1;
    const experienceToImprove = findCurrentLevel(level)?.experience;

    return experienceToImprove;
  };

  const updateLevel = ({
    currentLevel,
    currentExperience,
  }: {
    currentLevel: number;
    currentExperience: number;
  }) => {
    const level = currentLevel + 1;
    const exp = experienceInfo.find(item => item.level === level)
      ?.experience as number;

    if (currentExperience >= exp) {
      return changeLevel();
    }

    return;
  };

  const updateRank = (currentLevel: number) => {
    const type = {
      FIVE: 5,
      TEN: 10,
      FIFTEEN: 15,
      TWENTY: 20,
      TWENTY_FIVE: 25,
      THIRTY: 30,
    };

    switch (currentLevel) {
      case type.FIVE:
        return changeRank({ rank: 'jester' });

      case type.TEN:
        return changeRank({ rank: 'beginning' });

      case type.FIFTEEN:
        return changeRank({ rank: 'entrepreneur' });

      case type.TWENTY:
        return changeRank({ rank: 'businessman' });

      case type.TWENTY_FIVE:
        return changeRank({ rank: 'deputy' });

      case type.THIRTY:
        return changeRank({ rank: 'investor' });

      default:
        return toast.warning('You have reached perfection.');
    }
  };

  const getPercentage = (level: number, currentExp: number) => {
    const experienceToImprove = findCurrentLevel(level + 1)
      ?.experience as number;
    const percengate = (currentExp / experienceToImprove) * 100;

    return Math.floor(percengate);
  };

  return { getExperienceToImprove, updateLevel, updateRank, getPercentage };
};

export default useExperience;
