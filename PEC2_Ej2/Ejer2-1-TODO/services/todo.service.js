/**
 * @class Service
 *
 * Manages the data of the application.
 * Las operaciones que se realizan en TODO son llevadas a cabo en este archivo
 * Toda la carga kígica de los modelos se encuentra en estos servicios
 * Este servicio hace uso del modelo Todo
 */

class TodoService {
  constructor() {
    this.todos = (JSON.parse(localStorage.getItem("todos")) || []).map(
      todo => new Todo(todo)
    );
    // console.log(this);
  }

  // Make model aware of any changes made, and make it update the view
  // Model should fire back to the controller to le it know something happened.
  // This function is bind to the model.
  bindTodoListChanged(callback) {
    this.onTodoListChanged = callback;    
  }

  // private method to update the value of localStorage as well as the model state
  _commit(todos) {
    // after every method in the model, we need to call onTodoListChanged callback to let model fire back to the controller to let it know something happened.
    this.onTodoListChanged(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  addTodo(text){
    this.todos.push(new Todo({ text }));
    // After every change to this.todos, we can call _commit private method.
    this._commit(this.todos);
  }

  editTodo(id, updatedText) {
    this.todos = this.todos.map(todo =>
      todo.id === id
        ? new Todo({
            ...todo,
            text: updatedText
          })
        : todo
    );
    // After every change to this.todos, we can call _commit private method.
    this._commit(this.todos);
  }

  deleteTodo(_id) {
    this.todos = this.todos.filter(({ id }) => id !== _id);
    // After every change to this.todos, we can call _commit private method.
    this._commit(this.todos);
  }

  toggleTodo(_id) {
    this.todos = this.todos.map(todo =>
      todo.id === _id ? new Todo({ ...todo, complete: !todo.complete }) : todo
    );
    // After every change to this.todos, we can call _commit private method.
    this._commit(this.todos);
  }
}

