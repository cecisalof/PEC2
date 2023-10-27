## Solucion_Ejercicio_2a

a. ¿Por qué es el valor de this es undefined?

En una "arrow function", el valor de ´´´this´´´ se establece según el valor de this en el contexto que rodea la función, en lugar de basarse en cómo se llama la función. Esto significa que ´´´this´´´ dentro de una "arrow function" se refiere al valor de ´´´this´´´ del ámbito léxico (donde se encuentra la función) en el que se define la "arrow function". Esta característica hace que las "arrow functions" sean útiles cuando se trabaja con eventos, callbacks y en situaciones donde se necesita mantener la referencia al objeto que contiene la función. Esto hace que las "arrow functions" sean especialmente útiles cuando se trabaja con objetos y métodos en JavaScript.


Si cambiamos la línea

´´´this.view.bindAddTodo(this.handleAddTodo);´´´

por

´´´this.view.bindAddTodo(this.service.addTodo);´´´

el handler que recibe la función bindAddTodo(), es distinto.


Cuando usamos la línea de código ´´´this.view.bindAddTodo(this.handleAddTodo);´´´, ´´´bindAddToo()´´´ recibe como parámetro a ´´´handlerAddToo()´´´. 
´´´bindAddToo´´´ es un escuchador de evento que responde al evento submit del formulario e invoca al handler correspondiente, en este caso a  ´´´handlerAddToo´´´.  En ´´´handlerAddToo()´´´ el contexto de ´´´this´´´ es el contexto del controlador y es por esto que este handler puede acceder al servicio y ejecutar addTodo(todoText): this.service.addTodo(todoText);


El contexto de ´´´this´´´ en el controlador, en este caso en concreto, es:

TodoController {onTodoListChanged: ƒ, handleAddTodo: ƒ, handleEditTodo: ƒ, handleDeleteTodo: ƒ, handleToggleTodo: ƒ, …}
handleAddTodo: todoText => {…}
handleDeleteTodo: id => { this.service.deleteTodo(id); }
handleEditTodo: (id, todoText) => {…}
handleToggleTodo: id => { this.service.toggleTodo(id); }
onTodoListChanged: todos => { this.view.displayTodos(todos); }
service: TodoService {todos: Array(1), addTodo: ƒ, onTodoListChanged: ƒ}
view: TodoView {app: div#root, form: form, input: input, submitButton: button, title: h1, …}
[[Prototype]]: Object

En este proyecto en particular, todos los handlers están creados como funciones flecha, porque las 'arrow functions' permiten que los handlers sean llamados en la vista usando el contexto de ´´´this´´´ del controlador. Si no se usaran funciones flecha, se tendrían que vincular manualmente, como por ejemplo: 

´´´this.view.bindAddTodo(this.handleAddTodo.bind(this))´´´.

Ahora bien, cuando cambiamos la línea ´´´this.view.bindAddTodo(this.handleAddTodo);´´´ por ´´´this.view.bindAddTodo(this.service.addTodo);´´´ el handle que recibe ´´´bindAddTodo´´´ es directamente ´´´addTodo´´´ del servicio. ´´´addTodo´´´ NO está declarada como función flecha por lo que el contexto de ´´´this´´´ es undefined.

Si convertimos ´´´addTodo´´´ en una arrow function y mantenemos la línea de código ´´´this.view.bindAddTodo(this.service.addTodo);´´´ el contexto de ´´´this´´´ sería el contexto del constructor de la clase TodoService y entonces  ´´´this´´´ no sería undefined. De esta manera ´´´addTodo´´´ podría acceder al array de ´´´todos´´´, y así empujar una nueva instancia del objeto ´´´Todo´´´. 
El array ´´´todos´´´con la nueva instancia creada en ´´´addTodo´´´ sería pasado a ´´´onTodoListChanged´´´ para informarle al modelo que han habido cambios y que es necesario avisar a la vista de estos los cambios para que ésta se actualice (o sea, actualice el DOM) adecuadamente. La memoria local también es actualziada en este paso con  ´´´localStorage.setItem("todos", JSON.stringify(todos));´´´ desde ´´´onTodoListChanged´´´.