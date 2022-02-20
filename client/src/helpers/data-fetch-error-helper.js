export const dataFetchError = (err) => {
  if (err.response) {
    throw new Error('Server Error: Problems With Response');
  } else if (err.request) {
    throw new Error('Server Error: Problems With Request');
  } else {
    throw new Error('Error', err.message);
  }
};

export default dataFetchError;
