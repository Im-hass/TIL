# Git
## 1. 기본 설정

### git config 설정 ( 최초 1회 )

```bash
# git commit에 사용될 username
$ git config --global user.name "your_name"

# git commit에 사용될 email
$ git config --global user.email "your_email@example.com"

# 설정한 내용 확인 가능
$ git config --list
# :q 닫기

# 설정한 내용 초기화 가능
$ git config --system --unset credential.helper
```

### Git 저장소 설정

현재 디렉토리를 로컬 저장소로 설정.

```bash
# 로컬 저장소로 설정할 디렉토리 위치에서 시작
# 로컬 저장소로 설정
$ git init

# 저장소 설정 취소
$ rm -r .git
```

### 원격 저장소(Github) 연동하기

```bash
# Github의 원격 저장소 내용을 가져오면서 연동할 때에는 아래.
# 클라이언트(로컬) 상에 아무것도 없을 때, 서버(Github)의 프로젝트를 내려받는 명령어.
# 자동으로 init도 됨.
$ git clone [자신의 Gitbub 원격 저장소 주소]

# Github의 원격 저장소와 연결함.
# add, commit 후 연결해도 됨.
$ git remote add origin [자신의 Github 원격 저장소 주소]

# 연결된 원격저장소 확인
$ git remote -v

# 원격 저장소 연동 끊기
$ git remote remove origin
```
<br>

## 2. 아래부터 거의 반복

(대부분) [pull] → add → commit → push 순서로 반복된다.

### 준비 영역에 파일 올리기

파일을 준비 영역(Staging Area)으로 옮긴다.

```bash
# a.html 파일만 추가
$ git add a.html

# 워킹 디렉터리 내 모든 파일을 추가
$ git add .

# 명령 프롬프트에서 상호작용하면서 추가 (나갈땐 q를 입력)
$ git add -i

# 원격 저장소와 로컬 저장소에 있는 파일을 삭제한다.
$ git rm [파일명]

# 원격 저장소에 있는 파일을 삭제한다.
# 로컬 저장소에 있는 파일은 삭제하지 않는다.
$ git rm --cached [파일명]
```

### Repository에 commit

```bash
$ git commit

# 간단한 커밋 메시지를 입력하여 커밋
$ git commit -m "커밋 메시지"

# Staging Area에 들어간 파일에 대해서만(add, commit 동시에 하기)
$ git commit -am "커밋 메시지"
```

### 원격 저장소에 저장하기

이걸 하지 않으면 Github에는 반영되지 않음.

```bash
# 원격저장소에 저장한다.
git push -u origin master
 
# error ㅡ ! [rejected] master -> master (fetch first)
# 이미 변경된 파일이 원격저장소에 있을 경우 발생
git pull origin master 
 
# error ㅡ ! [rejected] master -> master (non-fast-forward)
git push origin +master
```

## 3. 참고

```bash
# Git을 사용할 때마다 Openssh 팝업창이 뜬다면 아래 명령어 사용
$ git config --global core.askPass ""

# push 할 때 유저명, 비밀번호 저장하기
$ git config --global credential.helper store
```

### add 이력 조회 및 삭제

```bash
# 현재 브랜치, 파일들의 상태 보기
$ git status

# [파일명]을 Unstage로 변경
# "HEAD 파일명"이 없으면 add한 파일 전체 취소
$ git reset HEAD [파일명]
```

### 커밋 이력 조회하기

```bash
# 커밋 이력 상세조회 (위쪽이 가장 최근 커밋)
$ git log
 
# 커밋 이력중 커밋ID, 타이틀 메시지만 조회
# HEAD가 있는 곳이 현재 브랜치(마스터)를 가리키는 포인터.
# 가장 최근의 commit을 의미함.
$ git log --oneline
 
# 모든 브랜치 커밋 이력 조회
$ git log --oneline --decorate --graph --all
 
# 특정 파일의 변경 커밋 조회
$ git log -- a.html
```

### 커밋 이력 삭제

- **reset :** 되돌리고 싶은 시점의 commit이력으로 돌아가는 것(시간여행)
- **revert :** 현재까지 남긴 이력들을 유지한 채 되돌리고 싶은 commit을 원상복귀시키는 것(복구commit이 추가됨)

```bash
# commit을 취소하고 해당 파일들은 staged 상태로 워킹 디렉터리에 보존
$ git reset --soft HEAD^

# commit을 취소하고 해당 파일들은 unstaged 상태로 워킹 디렉터리에 보존
$ git reset --mixed HEAD^ # 기본 옵션
$ git reset HEAD^ # 위와 동일
$ git reset HEAD~2 # 마지막 2개의 commit을 취소

# commit을 취소하고 해당 파일들은 unstaged 상태로 워킹 디렉터리에서 삭제
$ git reset --hard HEAD^

# 특정 commit 취소하고 싶은 경우
$ git reset --hard "해당commit" # 해당 commit 이후의 이력 모두 삭제
$ git reset --soft "해당commit" # 해당 commit 이후의 이력만 지우고, 다시 staged 상태로 워킹 디렉터리에보존
```

### 푸쉬 이력 삭제

```bash
# 가장 최근의 commit을 취소 (기본 옵션: --mixed)
$ git reset HEAD^

# 원하는 시점으로 워킹 디렉터리를 되돌린다
$ git reset HEAD@{number} 또는 $ git reset [commit id]
```

```bash
# 되돌려진 상태에서 다시 commit을 한다.
$ git commit -m "Write commit messages"

#원격 저장소에 강제로 push 한다.
$ git push origin [branch name] -f
# 또는
$ git push origin +[branch name]
```
