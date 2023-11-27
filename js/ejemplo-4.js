const printError = msg => console.log(msg);

const realizarTarea = (tarea, siguienteTarea, printError) => {
  console.log(tarea);
  if (Math.random() < 0.3) printError();
  else setTimeout(() => siguienteTarea(), 1000);
};

const prepararIngredientes = () => {
  realizarTarea(
    'Preparar ingredientes',
    () => {
      realizarTarea(
        'Mezclar ingredientes',
        () => {
          realizarTarea(
            'Reposar masa',
            () => {
              realizarTarea(
                'Freir tortitas',
                () => {
                  realizarTarea(
                    'Servir tortitas',
                    () => console.log('TORTITAS LISTAS'),
                    () => error('Error al servir tortitas')
                  );
                },
                () => printError('Error al freir tortitas')
              );
            },
            () => printError('Error al reposar la masa')
          );
        },
        () => printError('Error al mezclar ingredientes')
      );
    },
    () => printError('Error al preparar ingredientes')
  );
};

prepararIngredientes();
