import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';
import { useAppSelector } from 'hooks/useAppSelector';
import { getSoundOff } from 'redux/options/optionsSelectors';

import sounds from 'sounds/sounds.mp3';
import sprite from 'sounds/sprite';

import Button from 'components/InterfaceElements/Button';
import IconSwitcher from 'components/InterfaceElements/IconSwitcher';

const BackButton: React.FC<{ margin?: string }> = ({ margin }) => {
  const navigate = useNavigate();
  const soundOff = useAppSelector(getSoundOff);
  const [play] = useSound(sounds, { sprite: sprite, soundEnabled: soundOff });

  const goBack = () => {
    navigate(-1);
    play({ id: 'counter_click' });
  };

  return (
    <Button
      type="button"
      background="blue"
      borderRadius="50px"
      width="200px"
      height="50px"
      margin={margin}
      shadow
      onClick={goBack}
    >
      <IconSwitcher name="arrowleft" size="28px" fill="#ffffff" />
      back
    </Button>
  );
};

export default BackButton;
