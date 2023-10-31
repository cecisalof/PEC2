/**
 * @class View
 *
 * Visual representation of the model.
 * Gestiona el DOM de la aplicación.
 */

class ExpenseView {
    constructor() {
        this.app = this.getElement("#root");
        this.mainHeader = this.createElement("h2");
        this.mainHeader.textContent = "Expense Tracker";
        this.balanceContainer = this.createElement("div", "container");
        this.subtitle = this.createElement("h4");
        this.subtitle.textContent = "Your Balance";
        this.balance = this.createElement("h1");
        this.balance.textContent = "$0.00";
        this.incExpContainer = this.createElement("div", "inc-exp-container");
        this.div = this.createElement("div");
        this.income = this.createElement("h4");
        this.income.textContent = "Income";
        this.moneyPlus = this.createElement("p", ["money", "plus"]);
        this.div2 = this.createElement("div");
        this.expense = this.createElement("h4");
        this.expense.textContent = "Expense";
        this.moneyMinus = this.createElement("p", ["money", "minus"]);
        this.div.append(this.income, this.moneyPlus);
        this.div2.append(this.expense, this.moneyMinus);
        this.incExpContainer.append(this.div, this.div2);
        this.history = this.createElement("h3");
        this.history.textContent = "History";
        this.expenseList = this.createElement("ul", "list");
        this.newTransaction = this.createElement("h3");
        this.newTransaction.textContent = "Add new transaction";
        this.form = this.createElement("form");
        this.input = this.createElement("input");
        this.input.type = "text";
        this.label = this.createElement("label")
        this.label.innerText = "Text";
        this.input.placeholder = "Enter text...";
        this.input.name = "Text";
        this.amountInput = this.createElement("input");
        this.amountInput.type = "number";
        this.amountInputLabel = this.createElement("label")
        this.amountInputLabel.innerText = "Amount \n (negative - expense, positive - income)";
        this.amountInput.placeholder = "Enter amount...";
        this.amountInput.name = "Amount";
        this.submitButton = this.createElement("button", "btn");
        this.submitButton.textContent = "Add transaction";
        this.form.append(this.label, this.input, this.amountInputLabel, this.amountInput, this.submitButton);
        this.title = this.createElement("h2");
        this.title.textContent = "Expense Tracker";
        this.app.append(this.mainHeader, this.balanceContainer, this.subtitle, this.balance, this.incExpContainer, this.history, this.expenseList, this.newTransaction, this.form);

        // this._temporaryExpenseText = "";
        this._temporaryExpenseAmount = 0;
        this._initLocalListeners();
    }

    // Getter for the input value
    get _expenseText() {
        return this.input.value;
    }

    get _expenseAmount() {
        return this.amountInput.value;
    }

    // Setter of the input value
    _resetInput() {
        this.input.value = "";
        this.amountInput.value = "";
    }

    // Helper methods to retrieve an element and create an element.

    // Create an element
    createElement(tag, className) {
        const element = document.createElement(tag);
        // considering multiple clases -  REFACTOR
        if (className) {
            if (typeof className !== 'object') {
                element.classList.add(className)
            } else {
                element.classList.add(...className)
            }
        }
        return element;
    }

    // Retrieve an element
    getElement(selector) {
        const element = document.querySelector(selector);
        return element;
    }


    // Displaying the todo list, that will change every time a change is made to the todos.
    // Every time a expense is changed, added, or removed, the displayExpenses method will be called again with the expenses from the model, resetting the list and redisplaying them. This will keep the view in sync with the model state.
    displayExpenses(expenses) {
        // Delete all nodes every time this function is called
        while (this.expenseList.firstChild) {
            this.expenseList.removeChild(this.expenseList.firstChild);
        }

        // Show default message
        // Check if any todos exist. If they don't, we'll display an empty list message.
        if (expenses.length === 0) {
            // const p = this.createElement("p");
            // p.textContent = "Nothing to do! Add a task?";
            // this.expenseList.append(p);
        } else {
            // Create nodes
            // Loop through the expenses and display a checkbox, span, and delete button for every existing todo
            expenses.forEach(expense => {

                let li;
                // considering input detail color based on expense amount
                if (expense.amount > 0) {
                    li = this.createElement("li", "plus");
                } else {
                    li = this.createElement("li", "minus");
                }
                // const li = this.createElement("li");
                li.id = expense.id;

                const text = this.createElement("span");
                text.textContent = expense.text;
                // text.contentEditable = true;
                // text.classList.add("editable");
                const span = this.createElement("span");
                span.contentEditable = true;
                span.classList.add("editable");
                span.textContent = expense.amount;
                // li.textContent = expense.text;

                const deleteButton = this.createElement("button", "delete-btn");
                deleteButton.textContent = "x";
                li.append(deleteButton, text, span);

                // Append nodes
                this.expenseList.append(li);
            });
        }

        // Debugging
        // console.log(expenses);
    }

    _initLocalListeners() {
        this.expenseList.addEventListener("input", event => {
            if (event.target.className === "editable") {
                // sets innerText as __temporaryExpenseAmount
                this._temporaryExpenseAmount = event.target.textContent;
            }
        });
    }


    // Event listeners on the DOM elements to let controller know when to call the hanlders.

    // In this case we are responding to de submit event on the form, and invoking the corresponding handler.
    bindAddExpense(handler) {
        // here the handler is handleAddTodo (from controller).
        // console.log(handler);
        /* in the context of the constructor, this return the DOM elements: app, form, input, submitButton, title, todoList, _temporaryExpenseText */
        // console.log(this);
        this.form.addEventListener("submit", event => {
            event.preventDefault();
            //_expenseText is the getter for the input value
            if (this._expenseText && this._expenseAmount) {
                // input.value is passed as parameter of handleAddExpense()
                handler(this._expenseText, this._expenseAmount);
                this._resetInput();
            }
        });
    }

    bindDeleteExpense(handler) {
        this.expenseList.addEventListener("click", event => {
            if (event.target.className === "delete-btn") {
                const id = event.target.parentElement.id;

                handler(id);
            }
        });
    }

    // bindEditExpense(handler) {
    //     console.log(handler);
    //     this.expenseList.addEventListener("focusout", event => {
    //         if (this._temporaryExpenseAmount) {
    //             const id = event.target.parentElement.id;

    //             handler(id, this._temporaryExpenseAmount);
               
    //             this._temporaryExpenseAmount = 0;
    //         }
    //     });
    // }

    // bindToggleTodo(handler) {
    //   this.todoList.addEventListener("change", event => {
    //     if (event.target.type === "checkbox") {
    //       const id = event.target.parentElement.id;

    //       handler(id);
    //     }
    //   });
    // }
}
