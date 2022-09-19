import useCreateNewGame from 'hooks/useCreateNewGame';

import Container from 'components/InterfaceElements/Container';
import Button from 'components/InterfaceElements/Button';

import { Title, Text, List } from './CreateNewGame.styled';

const CreateNewGame: React.FC<{}> = () => {
  const { createNewGame } = useCreateNewGame();

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
