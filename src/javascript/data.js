// obtain data from source and save it into localstorage for later usage
export const fetchData = () => {
  const url = 'https://jsonplaceholder.typicode.com/posts/';
  fetch(url)
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('sampleData', JSON.stringify(data));
    })
    // eslint-disable-next-line no-console
    .catch(error => console.error(error));
};
