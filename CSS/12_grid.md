## 1. grid 개요

> container를 가지고, 행과 열을 이용해 내부 item들을 배치하는 형태의 layout이다.

- 기본적으로 주축, 한 줄에만 item들이 있어야 하는 1차원의 flexbox와 다르게 grid layout은 2차원의 개념이다.
- **용어**
    - `columns` : 행, gird의 세로축을 말한다.
    - `rows` : 열, grid의 가로축을 말한다.
    - `gutters`(`gap`) : 각 행 또는 각 열 사이의 간격을 말한다.
<br>
<br>

## 2. Container - `display`, `grid-template-rows`, `grid-template-columns`, `gird-template-areas`, `row-gap`, `column-gap`, `gap`, `grid-auto-rows`, `grid-auto-columns`, `grid-auto-flow`, `grid`(shorthand)

### 2-1. `display` 속성

> **내부 아이템이 아니라 컨테이너에 정의하는 것이다.**

- 바깥쪽, 안쪽에 사용하는 속성이 나누어져 있다.
- **바깥쪽 :** `block`, `inline`
    - 어떤 한 요소가 있을 때, 해당 요소 양 옆의 **바깥쪽 요소들과의 관계**(정렬)를 정의하는 것.
- **안쪽 :** `flex`, `grid`
    - 어떤 한 요소의 **내부에 있는 아이템들을 정렬**하는 방법.
- flexbox와 마찬가지로 "`-`"를 이용해 "`내부-외부`" `display` 속성을 따로 정의할 수 있다.

### 2-2. `grid-template-rows`, `grid-template-columns` 속성

> `grid-template-rows` : 몇 개의 행을 가질지 설정하는 속성.

> `grid-template-columns` : 몇 개의 열을 가질지 설정하는 속성.

- 공백으로 구분한 개수만큼의 행/열을 나누고, 적힌 단위만큼의 비율로 공간이 나누어진다.
- width, height의 크기로 들어가는데 비율이 지정돼 있지 않을 경우, content의 크기로 들어간다.
- **함수** `repeat(반복횟수, 단위)` : 해당 단위에 대해 반복횟수만큼 설정하는 것을 의미한다. ex) `repeat(4, 1fr) == 1fr 1fr 1fr 1fr`
- **속성값**
    - `none`
    - **단위** `fr` : container 내부의 비율에 맞게 너비, 높이를 설정할 수 있다.
- **예제**
    - `grid-template-rows: 2fr 1fr;` : 각각의 행을 2fr, 1fr의 비율로 2개로 나눈다.
    - `grid-template-rows: 50px 1fr 100px;` : 각각의 행을 50px, 1fr, 100px 비율로 3개로 나눈다.
    - `grid-template-columns: 1fr 1fr 1fr 1fr` : 각각의 열을 1fr, 1fr, 1fr, 1fr의 비율로 4개로 나눈다.

    ![https://user-images.githubusercontent.com/77854486/132982194-8c774c57-3234-4909-b8b7-c8d91878ce50.png](https://user-images.githubusercontent.com/77854486/132982194-8c774c57-3234-4909-b8b7-c8d91878ce50.png)

    ```html
    <div class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
        <div class="item">7</div>
        <div class="item">8</div>
        <div class="item">9</div>
    </div>
    ```

    ```css
    .container {
      border: 5px dashed orange;

      display: grid;
      grid-template-rows: 2fr 1fr;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .item {
      background-color: aquamarine;
      border: 3px solid mediumaquamarine;
      font-size: 30px;
    }
    ```

### 2-3. `gird-template-areas` 속성

> gird의 레이아웃을 지정한다.

- 각 item마다 `grid-area` 속성을 사용하여 `grid-template-areas`에서 사용할 이름을 설정한다.
- 각각의 덩어리를 네모 모양으로 만들어야 한다.
- 비어두고 싶을 때는 이름 대신 `.`을 넣는다.
- `grid-template-areas`로 지정되지 않은 item들은, 빈 공간에 순서대로 들어가게 된다. (`.`으로 적힌 공간에도 들어가진다)
- **예제**

    ![https://user-images.githubusercontent.com/77854486/133027205-ab96ee32-912f-4b33-8776-f63bec82d99b.png](https://user-images.githubusercontent.com/77854486/133027205-ab96ee32-912f-4b33-8776-f63bec82d99b.png)

    ```html
    <div class="container">
        <div class="item header">header</div>
        <div class="item main">main</div>
        <div class="item sidebar">sidebar</div>
        <div class="item footer">footer</div>
    </div>
    ```

    ```css
    .container {
      width: 400px;
      height: 300px;
      border: 5px dashed orange;

      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(3, 1fr);
      grid-template-areas: 
        "hd hd hd hd"
        "ma ma .  sb"
        "ft ft ft ft";
    }

    .item {
      background-color: aquamarine;
      border: 3px solid mediumaquamarine;
      font-size: 30px;
    }

    .header {
      grid-area: hd;
    }

    .main {
      grid-area: ma;
    }

    .sidebar {
      grid-area: sb;
    }

    .footer {
      grid-area: ft;
    }
    ```

### 2-4. `row-gap`(`grid-row-gap`), `column-gap`, `gap`(shorthand) 속성

> `row-gap` : 각각의 행들 간의 간격을 설정한다.

> `column-gap` : 각각의 열들 간의 간격을 설정한다.

> `gap` : 행, 열 간격을 설정하는 단축속성.

- `grid-row-gap`가 변경되어 `row-gap`이 되었다.
- `row-gap`, `column-gap` 순서로 공백으로 구분하여 작성한다.
- **예제**

    ![https://user-images.githubusercontent.com/77854486/133028340-67016591-1d31-43a9-b5e3-78f586548988.png](https://user-images.githubusercontent.com/77854486/133028340-67016591-1d31-43a9-b5e3-78f586548988.png)

    ```html
    <div class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
        <div class="item">7</div>
        <div class="item">8</div>
    </div>
    ```

    ```css
    .container {
      width: 400px;
      height: 300px;
      border: 5px dashed orange;

      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(4, 1fr);
      /* row-gap: 20px;
      column-gap: 50px; */
      gap: 20px 50px;
    }

    .item {
      background-color: aquamarine;
      border: 3px solid mediumaquamarine;
      font-size: 30px;
    }
    ```

### 2-5. `grid-auto-rows`, `grid-auto-columns` 속성

> `grid-template-rows`, `grid-template-columns` 행, 열(명시적으로 지정해둔)을 넘어서는 행, 열의 사이즈를 암시적으로 지정해줄 수 있다.

- item이 `grid-template-rows`, `grid-template-columns`을 넘어서지 않으면 볼 수 없다.
- **예제**

    ![https://user-images.githubusercontent.com/77854486/133029111-cdb9969a-68ad-416a-aa4e-a87570f99cbd.png](https://user-images.githubusercontent.com/77854486/133029111-cdb9969a-68ad-416a-aa4e-a87570f99cbd.png)

    ```html
    <div class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
        <div class="item">7</div>
        <div class="item">8</div>
    		<div class="item">9</div>
        <div class="item">*</div>
        <div class="item">*</div>
    </div>
    ```

    ```css
    .container {
      border: 5px dashed orange;

      display: grid;
      
      grid-template-rows: 100px 150px 80px;
      grid-template-columns: repeat(3, 1fr);

      grid-auto-rows: 100px;
      grid-auto-columns: 50px;
    }

    .item {
      background-color: aquamarine;
      border: 3px solid mediumaquamarine;
      font-size: 30px;
    }
    ```

### 2-6. `grid-auto-flow` 속성

> item이 어떤 형태로 흘러갈(자리 잡을) 것인지 지정한다.

- **속성값**
    - `row` : 기본값이다. → 순서로 흐른다.
    - `column` : ↓ 순서로 흐른다.
    - `danse` : `row`(생략가능), `column`과 함께 공백 띄워져 쓰인다. 빈 틈 없이 채워준다. ex) `grid-auto-flow: column danse;`
- **예제**

    ![https://user-images.githubusercontent.com/77854486/133029994-1743e8a6-8e39-43c9-93d8-763a8e06535e.png](https://user-images.githubusercontent.com/77854486/133029994-1743e8a6-8e39-43c9-93d8-763a8e06535e.png)

    ```html
    <div class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
    </div>
    ```

    ```css
    .container {
      border: 5px dashed orange;

      display: grid;
      
      grid-template-rows: repeat(3, 1fr);
      grid-template-columns: repeat(3, 1fr);

      grid-auto-flow: column;
    }

    .item {
      background-color: aquamarine;
      border: 3px solid mediumaquamarine;
      font-size: 30px;
    }

    .item:nth-child(2) {
      grid-column: span 2;
    }
    ```

### 2-7. `grid`(shorthand)

> grid 관련 단축속성.

- 외재적인(명시적) 속성 `grid-template-rows/columns`, `gird-template-areas`와, 내재적인(암시적) 속성 `grid-auto-rows/columns`, `grid-auto-flow` 값을 쓸 수 있다.
- `/`를 기준으로 앞은 행에 대한 것, 뒤는 열에 대한 설정이다.
- `명시적 / 명시적`, `명시적 / 암시적`, `암시적 / 명시적`으로 넣을 수 있다.
- `auto-flow`는 쓸 곳에 `auto-flow`로 적고, `danse`는 `auto-flow` 뒤에 따로 추가 해준다. (`rows`는 기본값이므로 `columns`에만 사용)
- **예제**

    ![https://user-images.githubusercontent.com/77854486/133031196-61385321-c38e-48c5-afda-51f0a366242b.png](https://user-images.githubusercontent.com/77854486/133031196-61385321-c38e-48c5-afda-51f0a366242b.png)

    ```html
    <div class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
    </div>
    ```

    ```css
    .container {
      border: 5px dashed orange;

      display: grid;
      
      /* grid-template-rows: 1fr 2fr;
      grid-template-columns: 100px 200px; */

      grid: 1fr 2fr / 100px 200px;
    }

    .item {
      background-color: aquamarine;
      border: 3px solid mediumaquamarine;
      font-size: 30px;
    }
    ```
<br>
