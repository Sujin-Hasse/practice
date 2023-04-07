// 여기에 작성하세요!
import { handleDb } from '../server/app.js';

const $postSaveBtn = document.querySelector('#savePostBtn');
const $savePostInput = document.querySelector('#savePostInput');
const $savePostSelect = document.querySelector('#savePostSelect');
const $postContainer = document.querySelector('#posts');
const $userSelect = document.querySelector('#userSelectButton');
const $userName = document.querySelector('#userNameText');
const $userHashTag = document.querySelector('#userInfoHashTag');

const getPosts = async () => {
  $postContainer.innerHTML = '';
  const data = await handleDb('GET', 'post');
  data.map((item) => createPostItem(item));
}; // map은 데이터가 객체들의 배열인데 이걸 순회하면서 객체들의 정보를 creatPostItem 에 넣어줌. 그리고 얘네를 html안에 작성자랑 내용을 가져오려고 함. 그러면 createPost는 뭘까? 밑에 있음.  


const createPostItem = (item) => {
    const $newPost = document.createElement('li');
    const $id = document.createElement('h3');
    const $text = document.createElement('p');
    const $author = document.createElement('p');


    $text.textContent = item.text;
    $id.textContent = item.id;
    $author.textContent = item.author;

    $newPost.append($id, $text, $author)
    $postContainer.append($newPost)
}

const savePost = (e) => {
    e.preventDefault();

    handleDb('POST', 'post', {text: $savePostInput.value, author: $savePostSelect.value});

    getPosts();
};

const getUser=(userName) => {
    const userInfo = handleDb('GET', 'user', userName);
    let hashTag = '';
    console.log(userName);

    userInfo.info.forEach(tag => {hashTag += `#${tag}`}); //템플릿리터럴

    $userName.textContent = userInfo.name;
    $userHashTag.textContent = hashTag;
};

 const init = () => {
    getPosts();
    $postSaveBtn.addEventListener('click', savePost);
    $userSelect.addEventListener('change', () => getUser($userSelect.value));
 };

document.addEventListener('DOMContentLoaded',init);