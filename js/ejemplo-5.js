const thenFunction = number => {
  console.log(number);
};

const printDoubleNumber = number => {
  console.log(number * 2);
};

const catchAndPrint = err => console.log(err);

const request = (error, then, url) => {
  const req = new XMLHttpRequest();
  req.open('GET', url);
  req.onload = () => {
    if (req.status === 200) {
      then(req.responseText);
    } else {
      error('Error al cargar');
    }
  };

  req.onerror = () => {
    error('Error de red');
  };

  req.send();
};

request(catchAndPrint, thenFunction, '../data/data.txt');
