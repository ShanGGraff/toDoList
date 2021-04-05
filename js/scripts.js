//business logic

/*Add a list
Add tasks to list
Way to indicate a task is done
Remove tasks for list
Way to re-arrange importance of tasks
*/

function ToDoList(name) {
  this.name = name;
  this.tasks = [];
}

ToDoList.prototype.addTask = function (name) {
  const task = new Task(name)
  this.tasks.push(task)
}

ToDoList.prototype.removeTask = function (id) {
  const newTasks = this.tasks.filter(task => task.id !== id)
  this.tasks = newTasks
}

function Task(name) {
  this.name = name
  this.id = Math.random()
  this.isDone = false
  this.dueDate = undefined
}

Task.prototype.markDone = function (boolean) {
  this.isDone = boolean
}

Task.prototype.toggleDone = function () {
  this.isDone = !this.isDone
}

