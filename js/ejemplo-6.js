const thenFunction = number => {
  console.log(number);
};

const printDoubleNumber = number => {
  console.log(number * 2);
};

const catchAndPrint = err => console.log(err);

const request = url => {
  return new Promise((resolve, reject) => {
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
  });
};

request('../data/data.txt')
  .then(data => printDoubleNumber(data))
  .catch(err => catchAndPrint(err));
