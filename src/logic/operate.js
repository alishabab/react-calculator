import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const a = new Big(numberOne);
  const b = new Big(numberTwo);
  if (operation === '+') {
    return a.plus(b);
  }
  return 0;
};

export default operate;
