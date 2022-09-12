const randomNumberGenerator = () => {
  const min = 0;
  const max = 36;

  const number = min + Math.random() * (max + 1 - min);
  return Math.floor(number);
};

export default randomNumberGenerator;
