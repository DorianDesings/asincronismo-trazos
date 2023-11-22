//FETCH

const double = n => n * 2;

const request = url => fetch(url);

request('/data.txt')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
