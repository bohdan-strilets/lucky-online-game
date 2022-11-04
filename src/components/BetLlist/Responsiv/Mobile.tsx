import useBetList from 'hooks/useBetList';

import Container from 'components/InterfaceElements/Container';
import Button from 'components/InterfaceElements/Button';

import dateFormatting from 'helpers/dateFormatting';
import {
  Wrapper,
  Title,
  CategoriesList,
  CategoriesItem,
  List,
  Item,
  Column,
  IsWon,
} from '../BetLlist.styled';

const Mobile: React.FC<{}> = () => {
  const { bets, disabledbutton, showMore } = useBetList();

  return (
    <Container type="transparent" width="300px" padding="10px">
      <Wrapper>
        <Title>List of bets</Title>
        <CategoriesList>
          <CategoriesItem>creating date</CategoriesItem>
          <CategoriesItem>type</CategoriesItem>
          <CategoriesItem>amount</CategoriesItem>
          <CategoriesItem>coeffient</CategoriesItem>
          <CategoriesItem>is won</CategoriesItem>
          <CategoriesItem>wining amount</CategoriesItem>
        </CategoriesList>
      </Wrapper>

      <List>
        {bets?.map(
          ({
            _id,
            createdAt,
            type,
            betAmount,
            coefficient,
            isWon,
            winningAmount,
          }) => {
            return (
              <Item key={_id}>
                <Column>
                  <p>{dateFormatting(createdAt)}</p>
                </Column>
                <Column>
                  <p>{type}</p>
                </Column>
                <Column>
                  <p>{`${betAmount} $`}</p>
                </Column>
                <Column>
                  <p>{coefficient}</p>
                </Column>
                <Column>
                  <IsWon isWon={isWon} />
                </Column>
                <Column>
                  <p>{`${winningAmount} $`}</p>
                </Column>
              </Item>
            );
          },
        )}
      </List>

      <Button
        type="button"
        background="green"
        borderRadius="50px"
        height="50px"
        width="100%"
        shadow
        margin="50px auto 0 auto"
        onClick={showMore}
        disabled={disabledbutton()}
      >
        Show more
      </Button>
    </Container>
  );
};

export default Mobile;
