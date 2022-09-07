const useCoefficient = () => {
  const types = {
    LOW: 'low',
    MEDIUM: 'medium',
    HIGH: 'high',
  };

  const coefficient = {
    [types.LOW]: 5.7,
    [types.MEDIUM]: 3.2,
    [types.HIGH]: 1.7,
  };

  const initialFunds = {
    [types.LOW]: 8400,
    [types.MEDIUM]: 5500,
    [types.HIGH]: 3200,
  };

  const increment = (a: number, b: number) => a * b;

  return { types, coefficient, initialFunds, increment };
};

export default useCoefficient;
