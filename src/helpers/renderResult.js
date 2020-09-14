const renderResult = state => {
  const { total, next, operation } = state;
  const result = `${total}${operation}${next}`.replace(/null/g, '');
  return result === '' ? undefined : result;
};

export default renderResult;
