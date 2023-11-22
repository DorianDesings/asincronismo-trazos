// Asincronismo
const fetchData = () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(respuesta => {
      return respuesta.json();
    })
    .then(datos => console.log(datos));
};

const printData = info => {
  console.log(info);
};

const fetchData2 = async () => {
  const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
  const datos = await respuesta.json();
  printData(datos);
};

fetchData2();
