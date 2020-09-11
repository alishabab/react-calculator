import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const a = new Big(numberOne);
  const b = new Big(numberTwo);
  const negativeOne = new Big(-1);
  const hundred = new Big(100);
  let total;

  switch (operation) {
    case '+':
      total = a.plus(b);
      break;
    case '-':
      total = a.minus(b);
      break;
    case 'X':
      total = a.times(b);
      break;
    case '÷':
      total = a.div(b);
      break;
    case '%':
      total = b.div(hundred);
      break;
    case '+/-':
      total = b.times(negativeOne);
      break;
    default:
      break;
  }
  return total;
};

export default operate;
