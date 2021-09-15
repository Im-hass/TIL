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
<br>

## 3. Container - `justify-content`, `align-content`, `justify-items`, `align-items`

> grid item을 정렬하는 방법.

### 3-1. `justify-content`, `align-content`

> 주축/교차축을 기준으로, item을 나열하는 방법을 지정한다.

- 남는 공간이 있어야 적용된다.
- **속성값**
    - `start`
    - `end`
    - `center`
    - `space-between`
    - `space-around` : 항목을 고르게 배치한다. 이웃한 항목 간의 거리는 동일하고 첫 항목 이전 여백, 마지막 항목 이후 여백은 절반의 크기를 가진다.
    - `space-evenly` : space-around와 동일하게 항목을 고르게 배치하는데, 첫 항목 이전 여백, 마지막 항목 이후 여백이 모두 같아진다.
- **예제**

    ![https://user-images.githubusercontent.com/77854486/133282896-2b5b4707-7e3b-4ef7-af00-7080de442738.png](https://user-images.githubusercontent.com/77854486/133282896-2b5b4707-7e3b-4ef7-af00-7080de442738.png)

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
      height: 500px;

      border: 5px dashed orange;

      display: grid;
      grid-template-rows: repeat(3, 100px);
      grid-template-columns: repeat(3, 100px);

      justify-content: space-between;
    	align-content: space-between;
    }

    .item {
      background-color: aquamarine;
      border: 3px solid mediumaquamarine;
      font-size: 24px;
    }
    ```

### 3-2. `justify-items`, `align-items`

> gird로 나누어진 한 칸의 내부 item을 주축/교차축을 기준으로 어디에 정렬 시킬지 지정한다.

- grid로 나누어진 한 칸의 크기보다 내부 item의 크기가 작을 때 사용할 수 있다.
- `justify-self`, `align-self`를 사용하여 각각의 item 하나에만 속성을 지정할 수도 있다.
- **속성값**
    - `stretch` : 기본값, 좌우를 한 칸의 크기만큼 길게 늘린다. `width`, `height`가 정해져 있으면 동작하지 않는다.
    - `start`
    - `end`
- **예제**

    ![https://user-images.githubusercontent.com/77854486/133286603-b733bc45-ba43-4a1f-90b3-43289c0673ca.png](https://user-images.githubusercontent.com/77854486/133286603-b733bc45-ba43-4a1f-90b3-43289c0673ca.png)

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
      height: 500px;

      border: 5px dashed orange;

      display: grid;
      grid-template-rows: repeat(3, 1fr);
      grid-template-columns: repeat(3, 1fr);

      justify-items: center;
      align-items: center;
    }

    .item {
      background-color: aquamarine;
      border: 3px solid mediumaquamarine;
      font-size: 24px;
    }

    .item:nth-child(1) {
      width: 50px;
      height: 50px;
    }
    ```
<br>
<br>

## 4. Item - `grid-row`, `grid-column`, `grid-area`, `order`, `z-index`

### 4-1. `grid-row`, `grid-column`

> 단축속성. 주축/교차축의 선을 기준으로 몇 번째 선부터 몇 번째 선까지 자리를 차지할지 지정할 수 있다.

- `grid-row-start`, `gird-row-end` 속성을 포함한다.
- 속성값으로 몇 번째 선인지에 대한 값이 들어간다.
- `/` 를 기준으로 구분하여 앞쪽이 start 뒤쪽이 end이다.
- `1 / 3`과 `1 / -2`는 동일한 결과가 나타난다.
- 몇 번째 선인지 모를 경우에는 `span`을 사용하여 몇 칸까지 늘릴지 지정할 수 있다. ex) `1 / span 2` = 1번째 선부터 2칸 뒤 선(3)까지 차지한다.
- `-`값은 명시적으로 작성한 `template`에만 적용된다.
- 해당 요소가 차지하는 공간으로 인해서 넘쳐 흐른 item은 암시적인 요소로 밀려나게 된다.
- **예제**

    ![https://user-images.githubusercontent.com/77854486/133291228-00df71df-6443-4de8-aec4-461622f638ec.png](https://user-images.githubusercontent.com/77854486/133291228-00df71df-6443-4de8-aec4-461622f638ec.png)

    ```html
    <div class="container">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
      <div class="item">7</div>
    </div>
    ```

    ```css
    .container {
      border: 5px dashed orange;

      display: grid;
      grid-template-rows: repeat(3, 100px);
      grid-template-columns: repeat(3, 1fr);
    }

    .item {
      background-color: aquamarine;
      border: 3px solid mediumaquamarine;
      font-size: 24px;
    }

    .item:nth-child(1) {
      background-color: rgb(145, 145, 250);

      /* grid-row-start: 1;
      grid-row-end: -1; */

      grid-row: 1 / -1;
    }
    ```

### 4-2. `grid-area`

> 단축속성이다.

- `grid-row-start`, `grid-column-start`, `grid-row-end`, `gird-colimn-end` 속성이 포함된다.
- 또는 `grid-template-areas`에서 사용하기 위한 요소의 별명을 지정한다.
- `/` 로 값이 구분되어 사용될 때는 단축속성이, 하나의 문자열이 작성될때는 별명이 지정된다.
- `grid-row-start / grid-column-start / grid-row-end / grid-column-end` 순서로 작성된다.
- **예제**

    ![https://user-images.githubusercontent.com/77854486/133432706-ea271660-56b4-4f9a-ba96-8a851fe3fe50.png](https://user-images.githubusercontent.com/77854486/133432706-ea271660-56b4-4f9a-ba96-8a851fe3fe50.png)

    ```html
    <div class="container">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
      <div class="item">7</div>
    </div>
    ```

    ```css
    .container {
      border: 5px dashed orange;

      display: grid;
      grid-template-rows: repeat(5, 100px);
      grid-template-columns: repeat(3, 1fr);
    }

    .item {
      background-color: aquamarine;
      border: 3px solid mediumaquamarine;
      font-size: 24px;
    }

    .item:nth-child(1) {
      background-color: rgb(145, 145, 250);
      
      /* grid-row-start: 4;
      grid-row-end: span 2;
      grid-column-start: 2;
      grid-column-end: -1; */

      /* grid-row: 4 / span 2;
      grid-column: 2 / -1; */

      grid-area: 4 / 2 / span 2 / -1;
    }
    ```

### 4-3. `order`

> flex 또는 gird container 안에서 현재 요소의 배치 순서를 지정한다.

- 정렬 순서는 오름차순이고, 같은 값일 경우 코드 순서대로 정렬된다.
- **속성값**
    - `0` : 기본값이다.
    - `<integer>` : 양수, 음수, 0 을 포함한 모든 숫자를 쓸 수 있다. 단, 소수는 불가능하다.
- **예제**

    ![https://user-images.githubusercontent.com/77854486/133433730-60a4ddd8-e074-4a39-b5f5-c8dd6a5ba7cf.png](https://user-images.githubusercontent.com/77854486/133433730-60a4ddd8-e074-4a39-b5f5-c8dd6a5ba7cf.png)

    ```html
    <div class="container">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
    </div>
    ```

    ```css
    .container {
      border: 5px dashed orange;

      display: grid;
      grid-template-rows: repeat(3, 100px);
      grid-template-columns: repeat(3, 1fr);
    }

    .item {
      background-color: aquamarine;
      border: 3px solid mediumaquamarine;
      font-size: 24px;
    }

    .item:nth-child(3) {
      background-color: rgb(145, 145, 250);
      order: 1;
    }

    .item:nth-child(5) {
      background-color: rgb(145, 145, 250);
      order: -1;
    }
    ```

### 4-4. `z-index`

> 쌓임 순서를  지정한다.

- 지정되어 있지 않은 경우 코드 순서대로 위에 쌓인다.
- **예제**

    ![https://user-images.githubusercontent.com/77854486/133434784-4fba4338-7c23-421f-92bb-55d91ba36bd0.png](https://user-images.githubusercontent.com/77854486/133434784-4fba4338-7c23-421f-92bb-55d91ba36bd0.png)

    ```html
    <div class="container">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>
    ```

    ```css
    .container {
      border: 5px dashed orange;

      display: grid;
      grid-template-rows: repeat(3, 100px);
      grid-template-columns: repeat(3, 1fr);
    }

    .item {
      background-color: aquamarine;
      border: 3px solid mediumaquamarine;
      font-size: 24px;
      opacity: 0.7;
    }

    .item:nth-child(1) {
      background-color: rgb(145, 145, 250);
      grid-row: 1 / span2;
      grid-column: 1 / span 2;

      z-index: 1;
    }

    .item:nth-child(2) {
      background-color: rgb(250, 145, 145);
      grid-row: 1 / 2;
      grid-column: 2 / 4;
    }
    ```
<br>
<br>

## 5. Grid 단위 - `fr`, `min-content`, `max-content`, `auto-fill`, `auto-fit`

### 5-1. `fr`

> 비율을 지정한다.

- 다른 단위와 함께 사용될 수 있고, 다른 단위의 범위를 제외한 나머지 부분에 대한 비율이다.

### 5-2. `min-content`, `max-content`

> 요소의 값(단어 길이)에 따라 최소/최대 크기에 맞춰진다.

- 키워드 자체가 값으로 사용된다.
- `min-content`는 가장 긴 단어의 길이에 맞춰지고, `max-content`는 모든 요소가 한 줄에 나열된다.

### 5-3. `auto-fill`, `auto-fit`, `minmax(min, max)`

> 컬럼의 개수를 유연하게 변경할 수 있다.

- 남는 공간을 없애준다.
- 반응형 웹에 많이 사용된다.
- 기본적으로는 `auto-fill`, `auto-fit` 두 가지가 동일하게 동작한다. 내부 item의 개수가 부족하여 container의 width를 꽉 채우지 못할 때(남는 공간이 생길 때) 달라진다.
    - `auto-fill` : 남는 공간이 비어있다.
    - `auto-fit` : 남는 공간을 꽉 채운다.
    - `minmax(min, max)` : 가장 작아질 수 있는 최소/최대의 크기를 지정할 수 있다. 최소 크기(min)보다 작아지면 최대 크기(max)를 사용하게 된다.
- `grid-auto-rows` 속성을 사용하여 행의 수는 암시적으로 지정한다.
- **예제**
    - `repeat(3, 100px)`

        ![https://user-images.githubusercontent.com/77854486/133440215-2008ef94-1dd3-4ab0-bf2d-74f438ed635b.png](https://user-images.githubusercontent.com/77854486/133440215-2008ef94-1dd3-4ab0-bf2d-74f438ed635b.png)

    - `repeat(auto-fill, minmax(100px, 1fr))`

        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e9930d85-3f69-4bf4-babe-fe21ca6b6f4d/Untitled.png)

    - `repeat(auto-fit, minmax(100px, 1fr))`

        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/286b947a-eee9-472b-97ca-dc3ebb4cff9b/Untitled.png)

    ```html
    <div class="container">
    	<div class="item">1</div>
    	<div class="item">2</div>
    	<div class="item">3</div>
    	<div class="item">4</div>
    	<div class="item">5</div>
    	<div class="item">6</div>
    	<div class="item">7</div>
    </div>
    ```

    ```css
    .container {
      border: 5px dashed orange;

      display: grid;

    	/* grid-template-columns: repeat(3, 1fr); */

      /* grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); */

      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      grid-auto-rows: 50px;
    }

    .item {
      background-color: aquamarine;
      border: 3px solid mediumaquamarine;
      font-size: 24px;
    }
    ```
<br>

