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
	let remove = prompt("Which number task do you want to remove: ");
	let num = remove - 1;
	for (let i = 0; i < tasks.length; i++) {
		tasks.splice(num, 1);
	}
	showTasks();
}

function clearTasks() {
	tasks = [];
	showTasks();
}
