import { useEffect } from 'react';
import { useGetStatisticsQuery } from 'redux/statistics/statisticsApi';
import bankFormatting from 'helpers/bankFormatting';
import useNetProfit from 'hooks/useNetProfit';

import Container from 'components/InterfaceElements/Container';
import Loader from 'components/InterfaceElements/Loader';

import { Wrapper, Title, Item, Text } from '../Statistics.styled';

const Desktop: React.FC<{}> = () => {
  const { data: statistics, refetch, isFetching } = useGetStatisticsQuery();
  const { netto } = useNetProfit();

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <Container
      type="transparent"
      width="1050px"
      padding="70px 50px"
      margin="50px"
    >
      {isFetching && <Loader />}

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
                {statistics.statistics.moneyEarned
                  ? `${bankFormatting(
                      Number(statistics.statistics.moneyEarned).toFixed(2),
                    )} $`
                  : 0}
              </Text>
            </Item>
            <Item>
              <Text>Total money spent:</Text>
              <Text>
                {statistics.statistics.moneySpent
                  ? `${bankFormatting(
                      Number(statistics.statistics.moneySpent).toFixed(2),
                    )} $`
                  : 0}
              </Text>
            </Item>
            <Item>
              <Text>Net profit amounted to:</Text>
              <Text>{`${bankFormatting(Number(netto).toFixed(2))} $`}</Text>
            </Item>
          </ul>
        </Wrapper>
      ) : (
        <h1>To start keeping statistics, you need to create a new game.</h1>
      )}
    </Container>
  );
};

export default Desktop;
