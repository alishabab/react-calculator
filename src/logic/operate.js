import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  if (operation === '+') {
    return Big(numberOne).plus(Big(numberTwo));
  }
  if (operation === '-') {
    return Big(numberOne).minus(Big(numberTwo));
  }
  if (operation === '÷') {
    if (numberTwo !== '0') {
      return Big(numberOne).div(Big(numberTwo));
    }

    return '∞';
  }
  if (operation === 'X') {
    return Big(numberOne).times(Big(numberTwo));
  }
  if (numberOne === null) {
    return Big(numberTwo).times(0.01);
  }
  return Big(numberOne).times(Big(numberTwo).times(0.01));
};

export default operate;
