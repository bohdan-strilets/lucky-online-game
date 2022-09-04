import Button from 'components/Button';
import IconSwitcher from 'components/IconSwitcher';
import { useNavigate } from 'react-router-dom';

const BackButton: React.FC<{}> = () => {
  const navigate = useNavigate();

  return (
    <Button
      type="button"
      background="blue"
      borderRadius="50px"
      width="200px"
      height="50px"
      shadow
      onClick={() => navigate(-1)}
    >
      <IconSwitcher name="arrowleft" size="28px" fill="#ffffff" />
      back
    </Button>
  );
};

export default BackButton;
