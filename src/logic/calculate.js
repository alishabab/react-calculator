import operate from './operate';

const calculate = (calculator, buttonName) => {
  const newCalculator = { ...calculator };
  if (buttonName === '+/-') {
    newCalculator.total *= -1;
    newCalculator.next *= -1;
  }
  if (buttonName === '+') {
    newCalculator.total = operate(calculator.total, calculator.next, calculator.operator);
  }
  return newCalculator;
};

export default calculate;
