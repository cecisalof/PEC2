/**
 * @class Service
 *
 * Manages the data of the application.
 * Las operaciones que se realizan en Expense son llevadas a cabo en este archivo
 * Toda la carga lógica de los modelos se encuentra en estos servicios
 * Este servicio hace uso del modelo Expense
 */

class ExpenseService {
    constructor() {
        this.expenses = (JSON.parse(localStorage.getItem("transactions")) || []).map(
            expense => {
                new Expense(expense)
            }
        );
        // console.log(this);
    }

    // // Make model aware of any changes made, and make it update the view
    // // Model should fire back to the controller to le it know something happened.
    // // This function is bind to the model.
    bindExpenseListChanged(callback) {
        this.onExpenseListChanged = callback;
    }

    // private method to update the value of localStorage as well as the model state
    _commit(expenses) {
        console.log(expenses);
        // after every method in the model, we need to call onExpenseListChanged callback to let model fire back to the controller to let it know something happened.
        this.onExpenseListChanged(expenses);
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }

    addExpense(text, amount) {
        this.expenses.push(new Expense({ text, amount }));
        // After every change to this.todos, we can call _commit private method.
        this._commit(this.expenses);
    }

    // editTodo(id, updatedText) {
    //   this.todos = this.todos.map(todo =>
    //     todo.id === id
    //       ? new Todo({
    //           ...todo,
    //           text: updatedText
    //         })
    //       : todo
    //   );
    //   // After every change to this.todos, we can call _commit private method.
    //   this._commit(this.todos);
    // }

    deleteExpense(_id) {
        this.expenses = this.expenses.filter(({ id }) => id !== _id);
        // After every change to this.todos, we can call _commit private method.
        this._commit(this.expenses);
    }

    // toggleTodo(_id) {
    //   this.todos = this.todos.map(todo =>
    //     todo.id === _id ? new Todo({ ...todo, complete: !todo.complete }) : todo
    //   );
    //   // After every change to this.todos, we can call _commit private method.
    //   this._commit(this.todos);
    // }
}

