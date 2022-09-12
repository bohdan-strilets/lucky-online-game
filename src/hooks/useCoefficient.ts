const useCoefficient = () => {
  const coefficientInfo = {
    low: {
      types: 'low',
      coefficient: 5.7,
      initialFunds: 8400,
      experience: 30,
    },
    medium: {
      types: 'medium',
      coefficient: 3.2,
      initialFunds: 5500,
      experience: 20,
    },
    high: {
      types: 'high',
      coefficient: 1.7,
      initialFunds: 3200,
      experience: 10,
    },
  };

  const increment = (a: number, b: number) => a * b;

  const getCoefficient = (complexity: string | null | undefined) => {
    switch (complexity) {
      case coefficientInfo.low.types:
        return coefficientInfo.low.coefficient;

      case coefficientInfo.medium.types:
        return coefficientInfo.medium.coefficient;

      case coefficientInfo.high.types:
        return coefficientInfo.high.coefficient;

      default:
        return 0;
    }
  };

  return {
    coefficientInfo,
    increment,
    getCoefficient,
  };
};

export default useCoefficient;
