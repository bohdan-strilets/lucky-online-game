import { useNavigate } from 'react-router-dom';
import Button from 'components/InterfaceElements/Button';
import { Wrapper, Text } from '../EmptyList.styled';

const Tablet: React.FC<{}> = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Text>You haven't bought anything yet.... :(</Text>

      <Button
        type="button"
        background="green"
        height="60px"
        width="550px"
        borderRadius="50px"
        shadow
        onClick={() => navigate('/store')}
      >
        go to the store
      </Button>
    </Wrapper>
  );
};

export default Tablet;
