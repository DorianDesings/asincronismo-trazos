const thenFunction = number => {
  console.log(number);
};

const printDoubleNumber = number => {
  console.log(number * 2);
};

const catchAndPrint = err => console.log(err);

const request = url => fetch(url);

// ASYNC - AWAIT

const fetchData = async () => {
  try {
    const response = await request('../data/data.txt');
    const data = await response.json();
    printDoubleNumber(data);
  } catch (err) {
    catchAndPrint(err);
  }
};

fetchData();

// request('../data/data.txt')
// .then(response => response.json())
// .then(data => printDoubleNumber(data))
// .catch(err => catchAndPrint(err));
