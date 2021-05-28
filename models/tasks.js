const Task = require('./task');
class Tasks {
    list = {};

    get listArr() {
        const taskList = [];

        Object.keys(this.list).forEach(key => {
            const task = this.list[key];

            taskList.push(task);
        });

        return taskList;
    }

    constructor() {
        this.list = {};
    }

    loadTasksFromArr(tasks = []) {
        tasks.forEach(task => {
            this.list[task.id] = task;
        });
    }

    createTask(description = '') {
        const task = new Task(description);

        this.list[task.id] = task;
    }
}

module.exports = Tasks;