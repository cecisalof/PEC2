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
  constructor(service, view) {
    this.service = service;
    this.view = view;

    // Explicit this binding
    this.service.bindTodoListChanged(this.onTodoListChanged);
    this.view.bindAddTodo(this.handleAddTodo);
    this.view.bindEditTodo(this.handleEditTodo);
    this.view.bindDeleteTodo(this.handleDeleteTodo);
    this.view.bindToggleTodo(this.handleToggleTodo);

    // Display initial todos
    this.onTodoListChanged(this.service.todos);
  }

  //  Method that calls displayTodos every time a todo changes.
  onTodoListChanged = todos => {
    this.view.displayTodos(todos);
  };

  // handlers that response to user/view events
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
