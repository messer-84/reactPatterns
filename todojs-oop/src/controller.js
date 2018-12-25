class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    view.on('add', this.addTodo.bind(this));
  }

  addTodo(title) {
    this.model.addItem({
      id: Date.now(),
      title,
      completed: false
    });
  }


}
