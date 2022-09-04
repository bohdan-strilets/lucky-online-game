import Button from 'components/Button';
import IconSwitcher from 'components/IconSwitcher';
import { useNavigate } from 'react-router-dom';

const BackButton: React.FC<{ margin?: string }> = ({ margin }) => {
  const navigate = useNavigate();

  return (
    <Button
      type="button"
      background="blue"
      borderRadius="50px"
      width="200px"
      height="50px"
      margin={margin}
      shadow
      onClick={() => navigate(-1)}
    >
      <IconSwitcher name="arrowleft" size="28px" fill="#ffffff" />
      back
    </Button>
  );
};

export default BackButton;
