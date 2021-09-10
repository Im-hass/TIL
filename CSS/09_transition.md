## 1. transition(전환) 개요

> A 상태가 B 상태로 전환되는 것.

- 다양한 애니메이션 효과를 줄 수 있다.
- 찰나의 순간에 바뀌지 않고, 서서히 변화한다.
<br>
<br>

## 2. `transition-property`, `transition-duration`

> `transition-property` : 어떤 요소를 바꿀지 결정하는 것.

- **속성값**
    - `none` : 아무것도 전환되지 않는다. 기본값이다.
    - `all` : 전환 가능한 모든 속성을 전환한다.
    - `<custom-ident>` : 속성을 식별하는 사용자 정의 문자열이다. 변화시킬 속성을 공백으로 구분하여 입력한다.

> `transition-duration` : 어떤 요소의 변화가 완료되는 데 걸리는 시간을 설정

- 기본값은 0s이다.
- `<time>` 자료형이 필요하다. (애니메이션에서도 쓴다)
    - 단위로 `s`, `ms`를 붙일 수 있다. (1s = 1000ms)
    - 음수는 무효이다.
- `transition-duration`을 사용할 때는 `transition-property`가 필수이다.
- **예제**

    ![https://user-images.githubusercontent.com/77854486/132842180-dadcc91b-334e-4d0b-b9a8-bc03db8e87dc.gif](https://user-images.githubusercontent.com/77854486/132842180-dadcc91b-334e-4d0b-b9a8-bc03db8e87dc.gif)

    - **HTML**

        ```html
        <div class="box">
            ✨ Hover! ✨
        </div>
        ```

    - **CSS**

        ```css
        .box {
            width: 250px;
            height: 80px;
            border: 5px groove turquoise;
            background-color: aquamarine;
            font-size: 30px;
            font-weight: 700;
            color: darkcyan;
            text-align: center;
            line-height: 75px;

            transition-property: all;
            transition-duration: 0.5s;
        }

        .box:hover {
            background-color: darkcyan;
            color: white;
        }

        .box:active {
            background-color: aqua;
            color: black;
        }
        ```
<br>
<br>

## 3. `transition-delay`, `transition-timing-function`

> `transition-delay` : 변형되는 것을 지연시킨다.

- 요소가 여러 개 있을 때, 다른 시간을 적용하면 다양한 연출 효과가 가능하다.
- **예제**

    ![https://user-images.githubusercontent.com/77854486/132847030-be804278-508c-4bd2-bc3b-16c88433e098.gif](https://user-images.githubusercontent.com/77854486/132847030-be804278-508c-4bd2-bc3b-16c88433e098.gif)

    - **HTML**

        ```html
        <div class="box1">
            ✨ Hello! ✨
        </div>

        <div class="box2">
            ✨ CSS! ✨
        </div>

        <div class="box3">
            ✨ Transition! ✨
        </div>
        ```

    - **CSS**

        ```css
        .box1, .box2, .box3 {
            margin-bottom: 10px;
            width: 270px;
            height: 80px;
            border: 5px groove turquoise;
            background-color: aquamarine;
            font-size: 30px;
            font-weight: 700;
            color: darkcyan;
            text-align: center;
            line-height: 75px;

            transition-property: all;
            transition-duration: 0.8s;
        }

        .box1 {
            transition-delay: 1s;
        }

        .box2 {
            transition-delay: 2s;
        }

        .box3 {
            transition-delay: 3s;
        }
        ```

> `transition-timing-function` : 변형이 되는 과정의 속도를 조절할 수 있다.

- **속성값**
    - `ease` : `cubic-bezier(0.25, 0.1, 0.25, 1.0)`, 중간까지 속도가 증가하고, 마지막에 다시 느려진다.
    - `ease-in` : `cubic-bezier(0.42, 0, 1.0, 1.0)`, 천천히 시작하여 완료될 때까지 점점 빨라진다.
    - `ease-out` : `cubic-bezier(0, 0, 0.58, 1.0)`, 빠르게 시작하여 완료될 때까지 점점 느려진다.
    - `linear` : `cubic-bezier(0.0, 0.0, 1.0, 1.0)`, 처음부터 끝까지 일정한 속도를 유지한다.
    - `cubic-bezier(0.2, -2, 0.8, 2)` : 직접 곡선을 작성한다. 정해진 값 이외의 값을 쓸 수 있다.
    - 더 많은 속성값은 [공식 문서](https://developer.mozilla.org/ja/docs/Web/CSS/transition-timing-function)를 참고한다.
- **예제**

    ![https://user-images.githubusercontent.com/77854486/132848631-ba054b17-2509-4462-836f-824a83443384.gif](https://user-images.githubusercontent.com/77854486/132848631-ba054b17-2509-4462-836f-824a83443384.gif)

    - **HTML**

        ```html
        <div class="box">
            ✨ Hello! ✨
        </div>
        ```

    - **CSS**

        ```css
        .box {
            margin-bottom: 10px;
            width: 230px;
            height: 80px;
            border: 5px groove turquoise;
            background-color: aquamarine;
            font-size: 30px;
            font-weight: 700;
            color: darkcyan;
            text-align: center;
            line-height: 75px;

            transition-property: all;
            transition-duration: 3s;
        }

        .box:hover {
            width: 350px;
            transition-timing-function: ease;
        }
        ```
<br>
<br>

## 4. transition(shorthand)

> transition 단축속성.

- `transition-delay`, `transition-duration`, `transition-property`, `transition-timing-function`을 정의할 수 있다.
- 각각 0s, 0s, all, ease가 기본값이다.
- `<time>` 자료형이 2개 있으므로, `transition-delay`, `transition-duration`의 순서가 중요하다.
    - `<time>`을 하나만 넣으면 `transition-duration`으로 해석하고, 두 개 넣을 경우 앞을 `transition-duration`, 뒤를 `transition-delay`로 인식한다.
    - 보통 `property`, `duration`, `timing`, `delay`순으로 적는다.
- **예제**

    ```css
    .box {
    		/* 
        transition-property: all;
        transition-duration: 3s;
        transition-delay: 1s;
        transition-timing-function: ease; */

        /* 위와 동일한 코드 */
        transition: all 3s ease 1s;
    }
    ```
<br>
<br>

## 5. transition + transform 활용 예

![https://user-images.githubusercontent.com/77854486/132850538-d3f7209b-bf5e-4ae3-93ad-d02a2ca8df79.gif](https://user-images.githubusercontent.com/77854486/132850538-d3f7209b-bf5e-4ae3-93ad-d02a2ca8df79.gif)

### HTML

```html
<div class="box">
    ✨ Hello! ✨
</div>
```

### CSS

```css
.box {
    width: 150px;
    height: 100px;
    border: 10px groove turquoise;
    background-color: aquamarine;
    border-radius: 30px;
    font-size: 20px;
    font-weight: bold;
    color: darkcyan;
    text-align: center;
    line-height: 95px;

    transform-origin: bottom right;
    transition: all 1s ease-in-out;
}

.box:hover {
    transform: rotate(360deg);
}
```
<br>

