// const todos = [
//   {
//     id: number타입,
//     content: string타입,
//     complete: boolean타입,
//     user: string타입,
//   },
// ];

const todoContainerEl = document.querySelector('#todoContainer');
const todoInputEl = document.querySelector('#todoInput');
const todoButtonEl = document.querySelector('#todoButton');
const logoutButtonEl = document.querySelector('#logoutButton');

/** 로그인 되었는지 판별합니다. */
const isLogin = () => {
  const loginedUser = localStorage.getItem('login');
  if (!loginedUser) {
    // 이외에도 location.replace도 가능합니다. 해당 api는 히스토리가 남지 않습니다
    location.href = './signin.html';
  }
};

/** 개별 유저를 가져오기엔 난이도가 높아 모든 유저를 가져옵니다. 로그인된 유저의 todo만 가져오도록 변경해보세요! */
const readTodo = () => {
  todoContainerEl.innerHTML = '';

  // 가장 최근 todo를 처음에 보여주기 위해 배열을 불러오면서 뒤집어줍니다
  const todos = JSON.parse(localStorage.getItem('todos')).reverse();

 todos.forEach(todo => {
  const divEl = document.createElement('div');
  const completeEl = document.createElement('input');
  const userEl = document.createElement('p');
  const deleteEl = document.createElement('button');
  
  const 

  divEl.className = 'todoItem';

  completeEl.type = 'checkbox';
  completeEl.className = 'checkbox';
  completeEl.id = todo.id;
  completeEl.addEventListener('click', () => {
    updateComplete(todo.id, completeEl.checked);
  });
  completeEl.checked = todo.complete;

  deleteEl.type = 'button';
  deleteEl.textContent = 'X';
  deleteEl.calssName = 'deleteButton';
  deleteEl.addEventListener('click', () => deleteTodo(todo.id));

  contentEl.textContent = todo.content;
  contentEl.htmlFor = todo.id;

  userEl.textContent = todo.user; // 여기까지 todo 박스

  divEl.append(completeEl, contentEl, userEl, deleteEl);
  todoContainerEl.append(divEl);
 });
};

const createTodo = () => {
  const todoText = todoInputEl.value;

const todos = JSON.parse(localStorage.getItem('todos'));
const newId = todos.length > 0 ? todos[todos.length -1].id +1 :1;

const newTodo = {
  id: newId,
  complete: false,
  content: todoText,
  user: localStorage.getItem('login'),
};

todos.push(newTodo);

localStorage.setItem('todos', JSON.stringify(todos));
todoInputEl.value = '';

readTodo();
};

const init = () => {
  isLogin();

  if (!localStorage.getItem('todos')) {
    localStorage.setItem('todos', JSON.stringify([]));
  }

  readTodo();

  todoButtonEl.addEventListener('click', createTodo);
  // logoutButtonEl.addEventListener('click', logout);
};

document.addEventListener('DOMContentLoaded', init);

//save, logout 로직 과제