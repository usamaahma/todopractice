let tasks = [];

function addTask(task) {
    if (task === '') {
        console.log("Task cannot be empty!");
        return;
    }
    tasks.push(task);
}
function listTasks() {
    console.log(tasks);
}

function taskManager() {
    while (true) {
        let task = prompt("Enter a new task (enter 0 to exit):");
        if (task === "0") {
            break;
        }
        else {
            addTask(task);
        }
        listTasks();
    }
}
function completedTask() {
    let task = prompt("Enter Completed task");
     delete tasks[task-1];
}
