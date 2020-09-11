import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const a = Big(numberOne);
  const b = Big(numberTwo);

  if (operation === '+') {
    return a.plus(b);
  }

  if (operation === '-') {
    return a.minus(b);
  }

  if (operation === 'X') {
    return a.times(b);
  }

  if (operation === '÷') {
    return a.div(b);
  }

  return Big(numberOne).times(0.01);
};

export default operate;
