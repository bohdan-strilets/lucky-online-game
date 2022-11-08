import useBetList from 'hooks/useBetList';
import usePagination from 'hooks/usePagination';
import dateFormatting from 'helpers/dateFormatting';

import Container from 'components/InterfaceElements/Container';
import Pagination from 'components/InterfaceElements/Pagination';

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
  const { bets } = useBetList();

  const {
    firstContentIndex,
    gaps,
    lastContentIndex,
    nextPage,
    page,
    prevPage,
    setPage,
    totalPages,
  } = usePagination({ contentPerPage: 10, count: bets ? bets?.length : 0 });

  return (
    <Container
      type="transparent"
      width="300px"
      padding="10px"
      margin="0 0 80px 0"
    >
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
        {bets &&
          bets
            .slice(firstContentIndex, lastContentIndex)
            .map(
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

      {bets && bets.length > 0 && (
        <Pagination
          contentPerPage={3}
          arr={bets}
          gaps={gaps}
          nextPage={nextPage}
          page={page}
          prevPage={prevPage}
          setPage={setPage}
          totalPages={totalPages}
        />
      )}
    </Container>
  );
};

export default Mobile;
