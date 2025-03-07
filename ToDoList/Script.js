function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let li = document.createElement("li");
    li.classList.add("task");
    li.innerHTML = `${taskText} <button class="delete-btn" onclick="removeTask(this)">Delete</button>`;

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

function removeTask(button) {
    let li = button.parentElement;
    document.getElementById("taskList").removeChild(li);
}
