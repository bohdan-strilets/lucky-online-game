import { useChangeLevelMutation } from 'redux/level/levelApi';
import { useChangeRankMutation } from 'redux/level/levelApi';
import { useAppSelector } from 'hooks/useAppSelector';
import { getSoundOff } from 'redux/options/optionsSelectors';

import useSound from 'use-sound';
import sounds from 'sounds/sounds.mp3';
import sprite from 'sounds/sprite';

import experienceInfo from 'data/experience.json';
import rankTypes from 'helpers/rankTypes';
import { toast } from 'react-toastify';

const useExperience = () => {
  const [changeLevel] = useChangeLevelMutation();
  const [changeRank, { data }] = useChangeRankMutation();
  const soundOff = useAppSelector(getSoundOff);
  const [play] = useSound(sounds, { sprite: sprite, soundEnabled: soundOff });

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
      play({ id: 'level_up' });
      toast.success('Your level has increased.');
      return changeLevel();
    }

    return;
  };

  const updateRank = (currentLevel: number) => {
    if (
      currentLevel === rankTypes.jester.level &&
      data &&
      data.rank !== rankTypes.jester.type
    ) {
      play({ id: 'level_up' });
      toast.success('Your rank JESTER.');
      return changeRank({ rank: rankTypes.jester.type });
    }

    if (
      currentLevel === rankTypes.beginning.level &&
      data &&
      data.rank !== rankTypes.beginning.type
    ) {
      play({ id: 'level_up' });
      toast.success('Your rank BEGINNING.');
      return changeRank({ rank: rankTypes.beginning.type });
    }

    if (
      currentLevel === rankTypes.entrepreneur.level &&
      data &&
      data.rank !== rankTypes.entrepreneur.type
    ) {
      play({ id: 'level_up' });
      toast.success('Your rank ENTREPRENEUR.');
      return changeRank({ rank: rankTypes.entrepreneur.type });
    }

    if (
      currentLevel === rankTypes.businessman.level &&
      data &&
      data.rank !== rankTypes.businessman.type
    ) {
      play({ id: 'level_up' });
      toast.success('Your rank BUSINESSMAN.');
      return changeRank({ rank: rankTypes.businessman.type });
    }

    if (
      currentLevel === rankTypes.deputy.level &&
      data &&
      data.rank !== rankTypes.deputy.type
    ) {
      play({ id: 'level_up' });
      toast.success('Your rank DEPUTY.');
      return changeRank({ rank: rankTypes.deputy.type });
    }

    if (
      currentLevel === rankTypes.investor.level &&
      data &&
      data.rank !== rankTypes.investor.type
    ) {
      play({ id: 'level_up' });
      toast.success('Your rank INVESTOR.');
      return changeRank({ rank: rankTypes.investor.type });
    }
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
