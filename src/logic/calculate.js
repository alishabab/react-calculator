const calculate = (calculator, buttonName) => {
  const newCalculator = { ...calculator };
  if (buttonName === '+/-') {
    newCalculator.total *= -1;
  }
  return newCalculator;
};

export default calculate;
