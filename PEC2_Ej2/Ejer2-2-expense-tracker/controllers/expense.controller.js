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
    this.service.bindExpenseListChanged(this.onExpenseListChanged);
    this.view.bindAddExpense(this.handleAddExpense);
    // this.view.bindEditExpense(this.handleEditExpense);
    this.view.bindDeleteExpense(this.handleDeleteExpense);
    // this.view.bindUpdateIncome(this.handleUpdateIncome);

    // Display initial expenses
    this.onExpenseListChanged(this.service.expenses);

    // at runtime this keyword is exchange with the object reference of the object we are dealing with.
    // 'this' is a default reference created internally to the object
    // console.log(this);
  }

  //  Method that calls displayTodos every time a todo changes.
  onExpenseListChanged = expenses => {
    this.updateIncome(expenses)
    this.view.displayExpenses(expenses);
  };

  // Update the balance, income and expense
  updateIncome(transaction) {
    const amounts = transaction.map(transaction => transaction.amount);
    // console.log(amounts.reduce((acc, item) => {console.log(acc, item);}, 0));

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const income = amounts
      .filter(item => item > 0)
      .reduce((acc, item) => (acc += item), 0).toFixed(2);

    const expense = amounts
      .filter(item => item < 0)
      .reduce((acc, item) => (acc + item), 0).toFixed(2);

    this.view.balance.innerText = `$${total}`;
    this.view.moneyPlus.innerText = `$${income}`;
    this.view.moneyMinus.innerText = `$${expense}`;
  }



  // handlers that response to user/view events
  // we are using arrow functions on all the handle events. This allows us to call them from the view using the this context of the controller. 
  // If we did not use arrow functions, we would have to manually bind them, like this.view.bindAddTodo(this.handleAddTodo.bind(this)).
  handleAddExpense = (expenseText, expenseAmount) => {
    this.service.addExpense(expenseText, expenseAmount);
  };

  // handleEditExpense = (id, expenseText) => {
  //   this.service.editExpense(id, expenseText);
  // };

  handleDeleteExpense = id => {
    this.service.deleteExpense(id);
  };

  // handleToggleTodo = id => {
  //   this.service.toggleTodo(id);
  // };
}
