/*
* LANZADOR DE LA LÓGICA DE LA APLICACIÓN
* Binding de las acciones de la vista con las del servicio
* Aquí se pasa el servicio y la vista como parámetros a la clase del controlador.
*/
const app = new TodoController(new TodoService(), new TodoView());

// prueba del lanzador: añade un pendiente a la lista de todos add.
// app.service.addTodo('Test');
// imprime la lista de todos
// console.log(app.service.todos);