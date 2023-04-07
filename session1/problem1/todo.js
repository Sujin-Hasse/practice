/*
    ########## 문제 ##########
    김멋사는 todo list 웹 사이트를 만드려고한다.
    todo는 create, read, update, delete 총 네 개의 기능이 들어간다.
    
    todoControl: 커멘드와 값을 입력 받아 알맞은 함수를 호출
    create: todo 정보를 받아 추가한다.
    read: 전체 목록을 하나씩 읽어는다.
    update: todo 정보(id가 포함)를 받아 해당 todo를 수정한다.
    delete: id를 받아 해당 todo를 삭제한다.

    create, update 시 todo는 다음과 같은 구조를 가진다.
    todo = {
        id: number,
        title: string,
        text: string,
    }

    ########## 목표 ##########
    todo list를 만들어라
    각 함수에 맞는 코드를 작성하고 테스트 케이스를 통과해야한다.
    command에 없는 명령어 입력시 'command error!'를 출력한다.

    ########## 제약조건 ##########
    targetTodo는 반드시 올바른 todo가 온다 가정한다.
*/

let todos = [];
let id = 0;

/**
 * 커멘트를 입력받아 처리한다.
 * @param {'create' | 'read' | 'update' | 'delete'} command
 * @param {{ id: number, title: string, text: string } | null | number} value
 * */
const todoControl = (command, value) => {
  // 대충 뭘 작성함
};

// 보너스: newTodo를 비구조화 할당하여 todos에 추가하세요.
/** @param {{ id: number, title: string, text: string }} newTodo */
const createTodo = (newTodo) => {
  // todos에 새로운 todo를 삽입
  // ㅇㅇㅇ
};

// 출력 형식: 'id: 0, title: 타이틀, text: 텍스트'
// 보너스: 리터럴 문자를 활용해 출력하세요.
const readTodo = () => {
  // todos를 하나씩 출력 형식에 맞춰 출력
  // ㅇㅇㅇ
};

// 에러처리: 만약 업데이트하려는 todo를 찾을 수 없는 경우 'id = (n)에 맞는 todo를 찾을 수 없습니다.' 를 출력하세요.
// 보너스: if문을 쓰지 말고 업데이트 하세요. 단, 에러 처리에는 if문을 써도 됩니다. (힌트: 논리연산자)
/** @param {{ id: number, title: string, text: string }} targetTodo */
const updateTodo = (targetTodo) => {
  // if (업데이트 하고자 하는 todo를 찾을 수 없다면) {
  //   return 에러 메시지를 출력하세요
  // }
  // 여기에 업데이트 로직을 작성하세요
  // ㅇㅇㅇ
};

// 에러처리: 만약 업데이트하려는 todo를 찾을 수 없는 경우 'id = n에 맞는 todo를 찾을 수 없습니다.' 를 출력하세요.
// 보너스: filter 함수를 사용해 구현해보세요
/** @param {number} id */
const deleteTodo = (id) => {
  // if (해당하는 todo id가 todo 데이터에 없다면) {
  //   return console.log(여기에 에러 메시지를 쓰세요);
  // }
  // 여기에 삭제 로직을 작성하세요
  //ㅇㅇㅇ
};

/*
    예상출력:
    command error!
    id = 10에 맞는 todo를 찾을 수 없습니다.
    id = 100에 맞는 todo를 찾을 수 없습니다.
    id: 0, title: title0, text: text0
    id: 3, title: 타이틀3, text: 텍스트3
    id: 4, title: 타이틀4, text: 텍스트4
    id: 5, title: title5, text: text5
    id: 6, title: title6, text: text6
    id: 7, title: title7, text: text7
    id: 8, title: title8, text: text8
    id: 9, title: title9, text: text9
    통과!!
*/
/** @info 테스트케이스, 이하 코드는 조작하지 마세요. '통과!!' 가 출력되어야합니다 */
const test = () => {
  todoControl('bug!!!');
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((idx) =>
    todoControl('create', {
      id: id++,
      title: `title${idx}`,
      text: `text${idx}`,
    })
  );
  [1, 2, 10].map((id) => todoControl('delete', id));
  [3, 4, 100].map((id) =>
    todoControl('update', { id: id, title: `타이틀${id}`, text: `텍스트${id}` })
  );
  todoControl('read');

  const testValue = [0, 3, 4, 5, 6, 7, 8, 9].map((id) => {
    if (id === 3 || id === 4) {
      return { id: id, title: `타이틀${id}`, text: `텍스트${id}` };
    }
    return { id: id, title: `title${id}`, text: `text${id}` };
  });

  // true가 출력되어야합니다.
  console.log(
    JSON.stringify(testValue) === JSON.stringify(todos)
      ? '통과!!'
      : '실패!! 다시 풀어보세요'
  );
};

test();
// practice_git_branch