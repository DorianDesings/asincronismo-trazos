const double = n => n * 2;

const request = url => {
  return (promise = new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = () => {
      if (req.status === 200) {
        resolve(req.responseText);
      } else {
        reject('Error al cargar');
      }
    };

    req.onerror = () => {
      reject('Error de red');
    };

    req.send();
  }));
};

request('/data.txt')
  .then(data => double(data))
  .then(data => console.log(data))
  .catch(error => console.log(error));
