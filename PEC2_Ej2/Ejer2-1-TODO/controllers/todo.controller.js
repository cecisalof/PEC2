/**
 * @class Controller
 *
 * Links the user input and the view output.
 * Las funciones de la vista son llamadas desde el controlador.
 * El controlador recibe las instancias de servicio y vista para crear los manejadores
 *
 * @param model
 * @param view
 */

class TodoController {
  //  A constructor would return an instance of a class
  constructor(service, view) {
    this.service = service;
    this.view = view;

    // Explicit this binding

    //binding onTodoListChanged method in the controller
    this.service.bindTodoListChanged(this.onTodoListChanged);
    this.view.bindAddTodo(this.handleAddTodo);
    // this.view.bindAddTodo(this.service.addTodo)
    this.view.bindEditTodo(this.handleEditTodo);
    this.view.bindDeleteTodo(this.handleDeleteTodo);
    this.view.bindToggleTodo(this.handleToggleTodo);

    // Display initial todos
    this.onTodoListChanged(this.service.todos);

    // at runtime this keyword is exchange with the object reference of the object we are dealing with.
    // 'this' is a default reference created internally to the object
    // console.log(this);
  }
  //  Method that calls displayTodos every time a todo changes.
  onTodoListChanged = todos => {
    this.view.displayTodos(todos);
  };

  // handlers that response to user/view events
  // we are using arrow functions on all the handle events. This allows us to call them from the view using the this context of the controller. 
  // If we did not use arrow functions, we would have to manually bind them, like this.view.bindAddTodo(this.handleAddTodo.bind(this)).
  handleAddTodo = todoText => {
    this.service.addTodo(todoText);
  };

  handleEditTodo = (id, todoText) => {
    this.service.editTodo(id, todoText);
  };

  handleDeleteTodo = id => {
    this.service.deleteTodo(id);
  };

  handleToggleTodo = id => {
    this.service.toggleTodo(id);
  };
}
