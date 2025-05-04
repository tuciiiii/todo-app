const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
  }
});

function addTodo(text) {
  const li = document.createElement('li');
  li.textContent = text;
  li.addEventListener('click', () => {
    li.classList.toggle('done');
  });
  list.appendChild(li);
}
