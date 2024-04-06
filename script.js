const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');
const addBtn = document.querySelector('#add-btn');

function addTodo() {
  if (!inputBox.value) {
    alert('Please enter a task');
    return;
  }

  const li = document.createElement('li');
  li.textContent = inputBox.value;
  listContainer.appendChild(li);

  const span = document.createElement('span');
  span.textContent = '\u00d7';
  li.appendChild(span);

  inputBox.value = '';
  saveData();
}

listContainer.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    saveData();
  } else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem('list', listContainer.innerHTML);
}

function getList() {
  listContainer.innerHTML = localStorage.getItem('list') || '';
}

addBtn.addEventListener('click', addTodo);
getList();