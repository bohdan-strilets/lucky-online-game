import types from 'helpers/betTypes';

const useCoefficient = () => {
  const coefficientInfo = {
    low: {
      type: 'low',
      coefficient: {
        number: 5.7,
        bottomRow: 4.2,
        oneFromTwo: 3.2,
      },
      initialFunds: 3200,
      experience: 30,
    },
    medium: {
      type: 'medium',
      coefficient: {
        number: 3.2,
        bottomRow: 2.1,
        oneFromTwo: 1.7,
      },
      initialFunds: 1600,
      experience: 20,
    },
    high: {
      type: 'high',
      coefficient: {
        number: 1.9,
        bottomRow: 1.5,
        oneFromTwo: 1.3,
      },
      initialFunds: 700,
      experience: 10,
    },
  };

  const getCoefficient = (
    complexity: string | null | undefined,
    type: string | null,
  ) => {
    switch (complexity) {
      case coefficientInfo.low.type:
        if (type === types.ZERO || type === types.NUMBER) {
          return coefficientInfo.low.coefficient.number;
        }

        if (
          type === types.HIGH ||
          type === types.LOW ||
          type === types.EVEN ||
          type === types.ODD ||
          type === types.BLACK ||
          type === types.RED
        ) {
          return coefficientInfo.low.coefficient.oneFromTwo;
        }

        if (
          type === types.DOZEN_1 ||
          type === types.DOZEN_2 ||
          type === types.DOZEN_3 ||
          type === types.COLUMN_1 ||
          type === types.COLUMN_2 ||
          type === types.COLUMN_3
        ) {
          return coefficientInfo.low.coefficient.bottomRow;
        }
        return 0;

      case coefficientInfo.medium.type:
        if (type === types.ZERO || type === types.NUMBER) {
          return coefficientInfo.medium.coefficient.number;
        }

        if (
          type === types.HIGH ||
          type === types.LOW ||
          type === types.EVEN ||
          type === types.ODD ||
          type === types.BLACK ||
          type === types.RED
        ) {
          return coefficientInfo.medium.coefficient.oneFromTwo;
        }

        if (
          type === types.DOZEN_1 ||
          type === types.DOZEN_2 ||
          type === types.DOZEN_3 ||
          type === types.COLUMN_1 ||
          type === types.COLUMN_2 ||
          type === types.COLUMN_3
        ) {
          return coefficientInfo.medium.coefficient.bottomRow;
        }
        return 0;

      case coefficientInfo.high.type:
        if (type === types.ZERO || type === types.NUMBER) {
          return coefficientInfo.high.coefficient.number;
        }

        if (
          type === types.HIGH ||
          type === types.LOW ||
          type === types.EVEN ||
          type === types.ODD ||
          type === types.BLACK ||
          type === types.RED
        ) {
          return coefficientInfo.high.coefficient.oneFromTwo;
        }

        if (
          type === types.DOZEN_1 ||
          type === types.DOZEN_2 ||
          type === types.DOZEN_3 ||
          type === types.COLUMN_1 ||
          type === types.COLUMN_2 ||
          type === types.COLUMN_3
        ) {
          return coefficientInfo.high.coefficient.bottomRow;
        }
        return 0;

      default:
        return 0;
    }
  };

  return {
    coefficientInfo,
    getCoefficient,
  };
};

export default useCoefficient;
