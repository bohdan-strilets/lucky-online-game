import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from 'redux/user/userOperations';
import { useNavigate } from 'react-router-dom';
import useCoefficient from 'hooks/useCoefficient';

import Container from 'components/InterfaceElements/Container';
import Button from 'components/InterfaceElements/Button';

import { IChangeBankRes } from 'types/IUserRessponse';
import { Title, Text, List } from './CreateNewGame.styled';

const CreateNewGame: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { coefficientInfo } = useCoefficient();

  const createNewGame = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.textContent as 'low' | 'medium' | 'high';
    dispatch(operations.createSession({ complexity: value }));

    if (value === coefficientInfo.low.type) {
      const res = await dispatch(
        operations.changeBank({ bank: coefficientInfo.low.initialFunds }),
      );

      if ((res.payload as IChangeBankRes).status === 'ok') {
        navigate('/game');
      }
    }

    if (value === coefficientInfo.medium.type) {
      const res = await dispatch(
        operations.changeBank({ bank: coefficientInfo.medium.initialFunds }),
      );

      if ((res.payload as IChangeBankRes).status === 'ok') {
        navigate('/game');
      }
    }

    if (value === coefficientInfo.high.type) {
      const res = await dispatch(
        operations.changeBank({ bank: coefficientInfo.high.initialFunds }),
      );

      if ((res.payload as IChangeBankRes).status === 'ok') {
        navigate('/game');
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
