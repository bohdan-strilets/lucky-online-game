import { useState, useEffect } from 'react';
import { useGetStatisticsQuery } from 'redux/statistics/statisticsApi';

const useNetProfit = () => {
  const [netto, setNetto] = useState(0);

  const { data: statistics } = useGetStatisticsQuery();

  useEffect(() => {
    if (statistics !== undefined) {
      const stats = statistics?.statistics;
      const result = stats.moneyEarned - stats.moneySpent;
      setNetto(result);
    }
  }, [statistics]);

  return { netto };
};

export default useNetProfit;
