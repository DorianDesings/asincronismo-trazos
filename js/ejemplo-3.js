const error = msg => console.log(msg);

const realizarTarea = (tarea, siguientePaso, error) => {
  console.log(tarea);
  if (Math.random() < 0.5) error();
  else setTimeout(siguientePaso, 1000);
};

const servirTortitas = () => {
  realizarTarea(
    'Servir tortitas',
    () => console.log('TORTITAS LISTAS'),
    () => error('Error al servir tortitas')
  );
};

const freirTortitas = () => {
  realizarTarea('Freir tortitas', servirTortitas, () => error('Error al freir tortitas'));
};
const reposarMasa = () => {
  realizarTarea('Reposar masa', freirTortitas, () => error('Error al reposar la masa'));
};
const mezclarIngredientes = () => {
  realizarTarea('Mezclar ingredientes', reposarMasa, () => error('Error al mezclar ingredientes'));
};
const prepararIngredientes = () => {
  realizarTarea('Preparar ingredientes', mezclarIngredientes, () => error('Error al preparar ingredientes'));
};

mezclarIngredientes();
