# Emmet
> HTML, CSS, JSX 등 작성 시, 단축된 문법을 사용하여 코드 작성 시간을 줄여주는 확장 기능.
- VScode에는 내장되어 있어서 따로 설치할 필요는 없다.
- 약어를 입력하면 제안 목록에 표시해준다.
- 정해진 태그 외에 커스텀 태그도 적용된다.
<br>

## 1. 구조화 연산자
> 구조를 작성할 때 사용하는 연산자이다.
- `>`, `+`, `^`, `*`, `()`가 있다.
<br>

### 1-1. 자식 요소 : `>`
> `요소>요소`
- **예제**
  ```html
    <!-- div>ol>li -->
    <div>
        <ol>
            <li></li>
        </ol>
    </div>
  ```
<br>

### 1-2. 형제 요소 : `+`
> `요소+요소`
- **예제**
  ```html
    <!-- div>ul>li+li+li -->
    <div>
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
  ```
<br>

### 1-3. 한 단계 올리기 : `^`
> `요소^요소`
- `^` 개수 만큼 한 단계씩 올라간다.
- **예제**
  ```html
    <!-- div>ul>li^ol>li -->
    <div>
        <ul>
            <li></li>
        </ul>
        <ol>
            <li></li>
        </ol>
    </div>

    <!-- div+div>p>span+em^bq -->
    <div></div>
    <div>
        <p>
            <span></span>
            <em></em>
        </p>
        <blockquote></blockquote>
    </div>

    <!-- article>h1+section>h2+p>b^^section>h2+p>strong -->
    <article>
        <h1></h1>
        <section>
            <h2></h2>
            <p><b></b></p>
        </section>
        <section>
            <h2></h2>
            <p><strong></strong></p>
        </section>
    </article>
  ```
<br>

### 1-4. 반복 요소 : `*`
> `요소*요소`
- **예제**
  ```html
    <!-- div>ul>li*3 -->
    <div>
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
  ```
<br>

### 1-5. 그룹화 : `()`
> `(그룹화할 요소들)`
- **예제**
  ```html
    <!-- article>h1+(section>h2+p)+(section>h2+p) -->
    <article>
        <h1></h1>
        <section>
            <h2></h2>
            <p></p>
        </section>
        <section>
            <h2></h2>
            <p></p>
        </section>
    </article>
  ```
<br>
<br>

## 속성 연산자
> 속성을 작성할 때 사용한다.
- 기본값이 `div`로 정해져 있어서 요소를 적지 않으면 `div`의 속성으로 나타난다.
- `.`, `#`, `[]`, `{}`, `$`가 있다.
<br>

### 2-1. 클래스 부여 : `.`
> `요소.클래스명`
- 연속으로 `요소.클래스명1.클래스명2...` 입력할 경우, 해당 요소에 입력한 만큼의 클래스가 생성된다.
- **예제**
  ```html
    <!-- div.container>div.wrap.type1.type2>p.textA+p.textB -->
    <div class="container">
        <div class="wrap type1 type2">
            <p class="textA"></p>
            <p class="textB"></p>
        </div>
    </div>
  ```
<br>

### 2-2. 아이디 부여 : `#`
> `요소#아이디명`
- 연속해서 쓸 순 없지만, 실수로 쓴다면 뒷쪽에 있는 아이디명으로 적용된다.
- **예제**
  ```html
    <!-- div.container>div#wrap#type1.type2>p#textA+p.textB -->
    <div class="container">
        <div id="type1" class="type2">
            <p id="textA"></p>
            <p class="textB"></p>
        </div>
    </div>
  ```
<br>

### 2-3. 특정 속성 부여 : `[속성명=속성값]`
> `요소[속성명=속성값 속성명2=속성값...]`
- 속성값을 넣지 않으면 ""로 비어있다.
- 속성값에 공백이 들어간다면 ""로 묶어준다.
- 띄어쓰기로 구분하여 여러 개의 속성을 넣을 수 있다.
- boolean 속성에도 속성값이 생겨버리기때문에 주의한다.
- **예제**
  ```html
    <!-- form[action method=POST]>input[type=text name title]+input[type=text hidden]+button[type=submit] -->
    <form action="" method="POST">
        <input type="text" name="" title="">
        <input type="text" hidden="hidden"> <!-- hidden에 속성값이 생겨버림,  주의 -->
        <button type="submit"></button>
    </form>
  ```
<br>

### 2-4. 텍스트 요소 : `{}`
> `요소{자식 요소로 들어갈 텍스트}`
- **예제**
  ```html
    <!-- div.container>div>p{첫 번째 p}+p{두 번째 p} -->
    <div class="container">
        <div>
            <p>첫 번째 p</p>
            <p>두 번째 p</p>
        </div>
    </div>
  ```
<br>

### 2-5. 자동 넘버링 : `$`
> `$`
- `$`이 있는 부분에 자동으로 숫자가 부여된다.
- 자릿수를 만들고 싶을 때는 자릿수만큼 `$`를 쓴다.
- 뒤에 `@-`를 붙여 내림차순으로 변경할 수 있다.
- 기본은 1부터 시작되는데, `@n` n에 원하는 번호를 넣으면 해당 값부터 시작한다.
- **예제**
  ```html
    <!-- div.class$*3 -->
    <div class="class1"></div>
    <div class="class2"></div>
    <div class="class3"></div>

    <!-- div.class$$*2>ul>li.list$*3 -->
    <div class="class01">
        <ul>
            <li class="list1"></li>
            <li class="list2"></li>
            <li class="list3"></li>
        </ul>
    </div>
    <div class="class02">
        <ul>
            <li class="list1"></li>
            <li class="list2"></li>
            <li class="list3"></li>
        </ul>
    </div>

    <!-- ul>li.item$@-*3 -->
    <ul>
        <li class="item3"></li>
        <li class="item2"></li>
        <li class="item1"></li>
    </ul>

    <!-- ul>li.item$@3*3 -->
    <ul>
        <li class="item3"></li>
        <li class="item4"></li>
        <li class="item5"></li>
    </ul>
  ```
<br>


## 참고
- [Emmet 공식 가이드](https://docs.emmet.io/abbreviations/syntax/)
- [HTML Emmet 사용법](https://nachwon.github.io/How_to_use_emmet/)
- [VSCode Emmet 사용법](https://velog.io/@rain98/VSCode-Emmet-%EC%82%AC%EC%9A%A9%EB%B2%95)
<br>
