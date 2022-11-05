import useCreateNewGame from 'hooks/useCreateNewGame';

import Container from 'components/InterfaceElements/Container';
import Button from 'components/InterfaceElements/Button';

import { Title, Text, List, Item } from '../CreateNewGame.styled';

const Tablet: React.FC<{}> = () => {
  const { createNewGame } = useCreateNewGame();

  return (
    <Container
      type="transparent"
      width="680px"
      padding="40px 10px 10px 10px"
      margin="50px 0 80px 0"
    >
      <Title>Create a new game</Title>
      <Text>
        Choose the level of difficulty. What will determine the coefficient that
        will be applied to the amount of winnings and the experience that you
        get for the bet.
      </Text>

      <List>
        <Item>
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
        </Item>
        <Item>
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
        </Item>
        <Item>
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
        </Item>
      </List>
    </Container>
  );
};
export default Tablet;
