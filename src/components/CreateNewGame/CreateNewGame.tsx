import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from 'redux/user/userOperations';
import { useNavigate } from 'react-router-dom';
import useCoefficient from 'hooks/useCoefficient';

import Container from 'components/Container';
import Button from 'components/Button';

import { IChangeBankRes } from 'types/IUserRessponse';
import { Title, Text, List } from './CreateNewGame.styled';

const CreateNewGame: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { initialFunds, types } = useCoefficient();

  const createNewGame = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.textContent as 'low' | 'medium' | 'high';
    dispatch(operations.createSession({ complexity: value }));

    if (value === types.LOW) {
      const res = await dispatch(
        operations.changeBank({ bank: initialFunds.LOW }),
      );

      if ((res.payload as IChangeBankRes).status === 'ok') {
        navigate('/game');
        return res;
      }
    }

    if (value === types.MEDIUM) {
      const res = await dispatch(
        operations.changeBank({ bank: initialFunds.MEDIUM }),
      );

      if ((res.payload as IChangeBankRes).status === 'ok') {
        navigate('/game');
        return res;
      }
    }

    if (value === types.HIGH) {
      const res = await dispatch(
        operations.changeBank({ bank: initialFunds.HIGH }),
      );

      if ((res.payload as IChangeBankRes).status === 'ok') {
        navigate('/game');
        return res;
      }
    }
  };

  return (
    <Container
      type="transparent"
      width="856px"
      padding="50px 100px"
      alignItems="center"
    >
      <Title>Create a new game</Title>
      <Text>
        Choose the level of difficulty. What will determine the coefficient that
        will be applied to the amount of winnings and the experience that you
        get for the bet.
      </Text>

      <Text>Low - 5.7, Medium - 3.2, High - 1.7</Text>
      <List>
        <li>
          <Button
            type="button"
            background="blue"
            borderRadius="50px"
            height="50px"
            width="200px"
            onClick={createNewGame}
          >
            low
          </Button>
        </li>
        <li>
          <Button
            type="button"
            background="blue"
            borderRadius="50px"
            height="50px"
            width="200px"
            onClick={createNewGame}
          >
            medium
          </Button>
        </li>
        <li>
          <Button
            type="button"
            background="blue"
            borderRadius="50px"
            height="50px"
            width="200px"
            onClick={createNewGame}
          >
            high
          </Button>
        </li>
      </List>
    </Container>
  );
};

export default CreateNewGame;
