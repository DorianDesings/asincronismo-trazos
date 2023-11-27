const printError = msg => console.log(msg);

const realizarTarea = (tarea, siguienteTarea, printError) => {
  console.log(tarea);
  if (Math.random() < 0.3) printError();
  else setTimeout(() => siguienteTarea(), 1000);
};

const servirTortitas = () => {
  realizarTarea(
    'Servir tortitas',
    () => console.log('TORTITAS LISTAS'),
    () => error('Error al servir tortitas')
  );
};

const freirTortitas = () => {
  realizarTarea('Freir tortitas', servirTortitas, () => printError('Error al freir tortitas'));
};
const reposarMasa = () => {
  realizarTarea('Reposar masa', freirTortitas, () => printError('Error al reposar la masa'));
};
const mezclarIngredientes = () => {
  realizarTarea('Mezclar ingredientes', reposarMasa, () => printError('Error al mezclar ingredientes'));
};
const prepararIngredientes = () => {
  realizarTarea('Preparar ingredientes', mezclarIngredientes, () => printError('Error al preparar ingredientes'));
};

prepararIngredientes();
