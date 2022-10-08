const bankFormatting = (bank: string) => {
  if (bank.length === 7) {
    const numbers = bank.split('');
    numbers.splice(1, 0, ' ');
    return numbers.join('');
  }

  if (bank.length === 8) {
    const numbers = bank.split('');
    numbers.splice(2, 0, ' ');
    return numbers.join('');
  }

  if (bank.length === 9) {
    const numbers = bank.split('');
    numbers.splice(3, 0, ' ');
    return numbers.join('');
  }

  if (bank.length === 10) {
    const numbers = bank.split('');
    numbers.splice(1, 0, ' ');
    numbers.splice(5, 0, ' ');
    return numbers.join('');
  }

  if (bank.length === 11) {
    const numbers = bank.split('');
    numbers.splice(2, 0, ' ');
    numbers.splice(6, 0, ' ');
    return numbers.join('');
  }

  if (bank.length === 12) {
    const numbers = bank.split('');
    numbers.splice(3, 0, ' ');
    numbers.splice(7, 0, ' ');
    return numbers.join('');
  }

  return bank;
};

export default bankFormatting;
