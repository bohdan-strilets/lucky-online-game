import { useState, useEffect } from 'react';
import useNetProfit from 'hooks/useNetProfit';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useGetStatisticsQuery } from 'redux/statistics/statisticsApi';
import getDataForDiagram from 'helpers/getDataForDiagram';

import Container from 'components/InterfaceElements/Container';
import { Wrapper, Chart } from '../Diagrams.styled';

const Tablet: React.FC<{}> = () => {
  const [totalBets, setTotalBets] = useState(0);
  const [wonBets, setWonBets] = useState(0);
  const [lostBets, setLostBets] = useState(0);
  const [moneyEarned, setMoneyEarned] = useState(0);
  const [moneySpent, setMoneySpent] = useState(0);

  ChartJS.register(ArcElement, Tooltip, Legend);
  const { data: statistics } = useGetStatisticsQuery();
  const { netto } = useNetProfit();

  useEffect(() => {
    if (statistics) {
      const stats = statistics.statistics;

      setTotalBets(stats.totalBets);
      setWonBets(stats.wonBets);
      setLostBets(stats.lostBets);

      setMoneyEarned(stats.moneyEarned);
      setMoneySpent(stats.moneySpent);
    }
  }, [statistics]);

  const optionBets = {
    labeles: ['Total bets placed', 'Bets that won', 'Lost bets'],
    dataArr: [totalBets, wonBets, lostBets],
    backgroundColor: [
      'rgba(54, 162, 235, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(255, 99, 132, 0.2)',
    ],
    borderColor: [
      'rgba(54, 162, 235, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(255, 99, 132, 1)',
    ],
    borderWidth: 1,
  };

  const optionMoney = {
    labeles: ['Total money earned', 'Total money spent', 'Net profit amounted'],
    dataArr: [moneyEarned, moneySpent, netto],
    backgroundColor: [
      'rgba(75, 192, 192, 0.2)',
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
    ],
    borderColor: [
      'rgba(75, 192, 192, 1)',
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
    ],
    borderWidth: 1,
  };

  const dataBets = getDataForDiagram(optionBets);
  const dataMoney = getDataForDiagram(optionMoney);

  return (
    <Container
      type="transparent"
      width="680px"
      padding="40px 10px 10px 10px"
      margin="50px 0 80px 0"
    >
      <Wrapper>
        <Chart>
          <Doughnut data={dataBets} />
        </Chart>
        <Chart>
          <Doughnut data={dataMoney} />
        </Chart>
      </Wrapper>
    </Container>
  );
};

export default Tablet;
