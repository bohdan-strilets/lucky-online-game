const useCoefficient = () => {
  const types = {
    LOW: 'low',
    MEDIUM: 'medium',
    HIGH: 'high',
  };

  const coefficient = {
    LOW: 5.7,
    MEDIUM: 3.2,
    HIGH: 1.7,
  };

  const initialFunds = {
    LOW: 8400,
    MEDIUM: 5500,
    HIGH: 3200,
  };

  const increment = (a: number, b: number) => a * b;

  return { types, coefficient, initialFunds, increment };
};

export default useCoefficient;
