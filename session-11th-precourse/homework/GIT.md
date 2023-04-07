# git을 잘써보자!
git checkout 브랜치명 

git status

## branch1 에서 코드수정 - ① commit - ② main브랜치에서 merge - ③ push

### ① commit / 현재 브랜치: branch1
git add .
git commit -m "커밋메시지"

### ② main브랜치에서 merge / 옮겨가야 하는 브랜치: main
git checkout main
git merge branch1

### ③ push / 로컬(내컴퓨터)에서 원격(깃허브)으로 저장하기
git push -u origin main