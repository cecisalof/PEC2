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

class ExpenseController {
  //  A constructor would return an instance of a class
  constructor(service, view) {
    this.service = service;
    this.view = view;

    // Explicit this binding

    //binding onExpenseListChanged method in the controller
    this.service.bindExpenseListChanged(this.onExpenseListChanged);
    this.view.bindAddExpense(this.handleAddExpense);
    // this.view.bindAddTodo(this.service.addTodo)
    //   this.view.bindEditTodo(this.handleEditTodo);
    this.view.bindDeleteExpense(this.handleDeleteExpense);
    //   this.view.bindToggleTodo(this.handleToggleTodo);

    // Display initial todos
    this.onExpenseListChanged(this.service.expenses);

    // at runtime this keyword is exchange with the object reference of the object we are dealing with.
    // 'this' is a default reference created internally to the object
    // console.log(this);
  }
  //  Method that calls displayTodos every time a todo changes.
  onExpenseListChanged = expenses => {
    this.view.displayExpenses(expenses);
  };

  // handlers that response to user/view events
  // we are using arrow functions on all the handle events. This allows us to call them from the view using the this context of the controller. 
  // If we did not use arrow functions, we would have to manually bind them, like this.view.bindAddTodo(this.handleAddTodo.bind(this)).
  handleAddExpense = (expenseText, expenseAmount) => {
    this.service.addExpense(expenseText, expenseAmount);
  };

  // handleEditTodo = (id, todoText) => {
  //   this.service.editTodo(id, todoText);
  // };

  handleDeleteExpense = id => {
    this.service.deleteExpense(id);
  };

  // handleToggleTodo = id => {
  //   this.service.toggleTodo(id);
  // };
}
