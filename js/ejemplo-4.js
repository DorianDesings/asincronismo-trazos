// CALLBACK HELL

const error = msg => console.log(msg);

const realizarTarea = (tarea, siguientePaso, error) => {
  console.log(tarea);
  if (Math.random() < 0.1) error();
  else setTimeout(siguientePaso, 1000);
};

const prepararIngredientes = () => {
  realizarTarea(
    'Preparar ingredientes',
    (mezclarIngredientes = () => {
      realizarTarea(
        'Mezclar ingredientes',
        () =>
          realizarTarea(
            'Reposar masa',
            () =>
              realizarTarea(
                'Freir tortitas',
                () =>
                  realizarTarea(
                    'Servir tortitas',
                    () => console.log('TORTITAS LISTAS'),
                    () => error('Error al servir tortitas')
                  ),
                () => error('Error al freir tortitas')
              ),
            () => error('Error al reposar la masa')
          ),
        () => error('Error al mezclar ingredientes')
      ),
        () => error('Error al preparar ingredientes');
    })
  );
};
prepararIngredientes();
