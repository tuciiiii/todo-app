const taskInput = document.getElementById('taskInput');
const tasksContainer = document.getElementById('tasks');

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const task = document.createElement('div');
  task.className = 'task';

  const taskContent = document.createElement('span');
  taskContent.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '✖';
  deleteBtn.onclick = () => task.remove();

  task.appendChild(taskContent);
  task.appendChild(deleteBtn);

  tasksContainer.appendChild(task);

  task.style.opacity = '0';
  requestAnimationFrame(() => {
    task.style.transition = 'opacity 0.4s ease';
    task.style.opacity = '1';
  });

  taskInput.value = '';
}
