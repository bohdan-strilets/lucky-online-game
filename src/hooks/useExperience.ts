import { useChangeLevelMutation } from 'redux/level/levelApi';
import { useChangeRankMutation } from 'redux/level/levelApi';

import experienceInfo from 'data/experience.json';
import { toast } from 'react-toastify';

const useExperience = () => {
  const [changeLevel] = useChangeLevelMutation();
  const [changeRank] = useChangeRankMutation();

  const findNextLevel = (currentLevel: number) => {
    const nextLevelInfo = experienceInfo.find(
      ({ level }) => level === currentLevel + 1,
    );

    return nextLevelInfo;
  };

  const getExperienceToImprove = (currentLevel: number) => {
    const experienceToImprove = findNextLevel(currentLevel)?.experience;

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
      ZERO: 0,
      FIVE: 5,
      TEN: 10,
      FIFTEEN: 15,
      TWENTY: 20,
      TWENTY_FIVE: 25,
      THIRTY: 30,
    };

    if (currentLevel >= type.ZERO && currentLevel <= type.FIVE) {
      return changeRank({ rank: 'jester' });
    }

    if (currentLevel > type.FIVE && currentLevel <= type.TEN) {
      return changeRank({ rank: 'beginning' });
    }

    if (currentLevel > type.TEN && currentLevel <= type.FIFTEEN) {
      return changeRank({ rank: 'entrepreneur' });
    }

    if (currentLevel > type.FIFTEEN && currentLevel <= type.TWENTY) {
      return changeRank({ rank: 'businessman' });
    }

    if (currentLevel > type.TWENTY && currentLevel <= type.TWENTY_FIVE) {
      return changeRank({ rank: 'deputy' });
    }

    if (currentLevel > type.TWENTY_FIVE && currentLevel <= type.THIRTY) {
      return changeRank({ rank: 'investor' });
    }

    return toast.warning('You have reached perfection.');
  };

  const getPercentage = (currentLevel: number, currentExp: number) => {
    const experienceToImprove = findNextLevel(currentLevel)
      ?.experience as number;
    const percengate = (currentExp / experienceToImprove) * 100;

    return Math.floor(percengate);
  };

  return { getExperienceToImprove, updateLevel, updateRank, getPercentage };
};

export default useExperience;
