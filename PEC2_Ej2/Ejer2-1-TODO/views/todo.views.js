/**
 * @class View
 *
 * Visual representation of the model.
 * Gestiona el DOM de la aplicación.
 */

class TodoView {
  constructor() {
    this.app = this.getElement("#root");
    this.form = this.createElement("form");
    this.input = this.createElement("input");
    this.input.type = "text";
    this.input.placeholder = "Add todo";
    this.input.name = "todo";
    this.submitButton = this.createElement("button");
    this.submitButton.textContent = "Submit";
    this.form.append(this.input, this.submitButton);
    this.title = this.createElement("h1");
    this.title.textContent = "Todos";
    this.todoList = this.createElement("ul", "todo-list");
    this.app.append(this.title, this.form, this.todoList);

    this._temporaryTodoText = "";
    this._initLocalListeners();
  }

  // Getter for the input value
  get _todoText() {
    return this.input.value;
  }

  // Setter of the input value
  _resetInput() {
    this.input.value = "";
  }

  // Helper methods to retrieve an element and create an element.
  
  // Create an element
  createElement(tag, className) {
    const element = document.createElement(tag);

    if (className) element.classList.add(className);

    return element;
  }
 
  // Retrieve an element
  getElement(selector) {
    const element = document.querySelector(selector);

    return element;
  }


  // Displaying the todo list, that will change every time a change is made to the todos.
  // Every time a todo is changed, added, or removed, the displayTodos method will be called again with the todos from the model, resetting the list and redisplaying them. This will keep the view in sync with the model state.
  displayTodos(todos) {
    // Delete all nodes every time this function is called
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    }

    // Show default message
    // Check if any todos exist. If they don't, we'll display an empty list message.
    if (todos.length === 0) {
      const p = this.createElement("p");
      p.textContent = "Nothing to do! Add a task?";
      this.todoList.append(p);
    } else {
      // Create nodes
      // Loop through the todos and display a checkbox, span, and delete button for every existing todo
      todos.forEach(todo => {
        const li = this.createElement("li");
        li.id = todo.id;

        const checkbox = this.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.complete;

        const span = this.createElement("span");
        span.contentEditable = true;
        span.classList.add("editable");

        if (todo.complete) {
          const strike = this.createElement("s");
          strike.textContent = todo.text;
          span.append(strike);
        } else {
          span.textContent = todo.text;
        }

        const deleteButton = this.createElement("button", "delete");
        deleteButton.textContent = "Delete";
        li.append(checkbox, span, deleteButton);

        // Append nodes
        this.todoList.append(li);
      });
    }

    // Debugging
    // console.log(todos);
  }

  _initLocalListeners() {
    this.todoList.addEventListener("input", event => {
      if (event.target.className === "editable") {
        // sets innerText as temporaryTodoText
        this._temporaryTodoText = event.target.innerText;
      }
    });
  }

  bindAddTodo(handler) {
    this.form.addEventListener("submit", event => {
      event.preventDefault();

      if (this._todoText) {
        // this.input.value se guarda en this._todoText;
        handler(this._todoText);
        this._resetInput();
      }
    });
  }

  bindDeleteTodo(handler) {
    this.todoList.addEventListener("click", event => {
      if (event.target.className === "delete") {
        const id = event.target.parentElement.id;

        handler(id);
      }
    });
  }

  bindEditTodo(handler) {
    this.todoList.addEventListener("focusout", event => {
      if (this._temporaryTodoText) {
        const id = event.target.parentElement.id;

        handler(id, this._temporaryTodoText);
        this._temporaryTodoText = "";
      }
    });
  }

  bindToggleTodo(handler) {
    this.todoList.addEventListener("change", event => {
      if (event.target.type === "checkbox") {
        const id = event.target.parentElement.id;

        handler(id);
      }
    });
  }
}
