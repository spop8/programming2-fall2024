let tasks = ["Do homework", "Make lunch"];

function showTasks() {
	let taskListUl = document.getElementById("task-list");
	taskListUl.innerHTML = "";

	for (let i = 0; i < tasks.length; i++) {
		let li = document.createElement("li");
		li.innerText = tasks[i];
		taskListUl.appendChild(li);
	}
}

function addTask() {
	let task = prompt("Enter you task: ");
	tasks.push(task);
	showTasks();
}

function removeTask() {
	let taskFound = false;
	let task = prompt("Which task do you want to remove: ");
	task = task.toLowerCase;

	for (let i = 0; i < tasks.length; i++) {
		if (tasks[i].toLowerCase() === task) {
			tasks.splice(i, 1);
			taskFound = true;
		}
	}
	if (!taskFound) {
		alert("task not found");
	}

	showTasks();
}

function clearTasks() {
	tasks = [];
	showTasks();
}

function prioritize() {
	let task = prompt("");
	let taskFound = false;
	let taskList = document.getElementById("task-list");
	let listItems = taskList.getElementsByTagName("li");
	task = task.toLowerCase();
}
