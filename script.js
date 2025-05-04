function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") return;
  
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";
    taskDiv.innerHTML = `
      <span>${taskText}</span>
      <button onclick="removeTask(this)">×</button>
    `;
  
    document.getElementById("tasks").appendChild(taskDiv);
    taskInput.value = "";
  }
  
  function removeTask(button) {
    const task = button.parentElement;
    task.remove();
  }
  
  document.getElementById("taskInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") addTask();
  });
  