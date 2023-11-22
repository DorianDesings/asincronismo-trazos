// El orden es "impredecible"

const prepararIngredientes = () => console.log('INGREDIENTES PREPARADOS');

const mezclarIngredientes = () => console.log('INGREDIENTES MEZCLADOS');

const reposarMasa = () => setTimeout(() => console.log('MASA LISTA'), 1000);

const freirTortitas = () => setTimeout(() => console.log('TORTITAS FRITAS'), 2000);

const servirTortitas = () => console.log('TORTITAS LISTAS');

prepararIngredientes();
mezclarIngredientes();
reposarMasa();
freirTortitas();
servirTortitas();
