import { useEffect } from 'react';
import { useGetStatisticsQuery } from 'redux/statistics/statisticsApi';
import bankFormatting from 'helpers/bankFormatting';

import Container from 'components/InterfaceElements/Container';
import { Wrapper, Title, Item, Text } from './Statistics.styled';

const Statistics: React.FC<{}> = () => {
  const { data: statistics, refetch } = useGetStatisticsQuery();

  useEffect(() => {
    refetch();
  }, [refetch]);

  const netto = () => {
    if (statistics !== undefined) {
      return (
        statistics?.statistics.moneyEarned - statistics?.statistics.moneySpent
      );
    }
  };

  return (
    <Container
      type="transparent"
      width="1050px"
      padding="70px 50px"
      margin="50px"
    >
      {statistics?.statistics ? (
        <Wrapper>
          <Title>Statistics</Title>

          <ul>
            <Item>
              <Text>Total bets placed:</Text>
              <Text>{statistics.statistics.totalBets}</Text>
            </Item>
            <Item>
              <Text>Bets that won:</Text>
              <Text>{statistics.statistics.wonBets}</Text>
            </Item>
            <Item>
              <Text>Lost bets:</Text>
              <Text>{statistics.statistics.lostBets}</Text>
            </Item>
            <Item>
              <Text>Total money earned:</Text>
              <Text>
                {`${bankFormatting(
                  Number(statistics.statistics.moneyEarned).toFixed(2),
                )} $`}
              </Text>
            </Item>
            <Item>
              <Text>Total money spent:</Text>
              <Text>
                {`${bankFormatting(
                  Number(statistics.statistics.moneySpent).toFixed(2),
                )} $`}
              </Text>
            </Item>
            <Item>
              <Text>Net profit amounted to:</Text>
              <Text>{`${bankFormatting(Number(netto()).toFixed(2))} $`}</Text>
            </Item>
          </ul>
        </Wrapper>
      ) : (
        <h1>To start keeping statistics, you need to create a new game.</h1>
      )}
    </Container>
  );
};

export default Statistics;
