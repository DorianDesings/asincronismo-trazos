// Método obsoleto
const double = n => n * 2;

const request = new XMLHttpRequest();

request.open('GET', './data/number.txt');
request.onload = () => {
  if (request.status === 200) {
    const number = request.responseText;
    const multiply = double(number);
    console.log(multiply);
  } else {
    console.log('Error al cargar');
  }

  request.onerror = () => {
    console.log('Error de red');
  };
};

request.send();

//Reutilización

// const double = n => n * 2;

// const thenFunction = number => {
//   const multiply = double(number);
//   console.log(multiply);
// };

// const catchAndPrint = err => console.log(err);

// const request = (url, then, error) => {
//   const req = new XMLHttpRequest();
//   req.open('GET', url);
//   req.onload = () => {
//     if (req.status === 200) {
//       then(req.responseText);
//     } else {
//       error('Error al cargar');
//     }
//   };

//   req.onerror = () => {
//     error('Error de red');
//   };

//   req.send();
// };

// request('/data2.txt', thenFunction, catchAndPrint);
