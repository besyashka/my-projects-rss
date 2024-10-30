export const saveResults = (results) => {
  localStorage.setItem('results', JSON.stringify(results));
}

export const getResults = () => {
  const results = localStorage.getItem('results');
  return results ? JSON.parse(results) : [];
}