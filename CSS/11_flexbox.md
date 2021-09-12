# flexbox
## 1. Flexbox 개요

> **여러 개의 요소를 가로, 세로로 정렬하는 방법.**

- 기본적으로 2차원적인 요소들을 한 줄로 배치할 때의 정렬 방법을 나타낸다.
- CSS3에 등장하였다.
- `flex`가 나오기 전에 **요소들을 가로로 나열할 때 2가지 방법이 있었는데, 둘 다 문제점이 존재했다.**
    - **방법1.** `display: inline-block;`

        문제점 : `inline` 요소는 텍스트를 다루기 위해 만들어졌기 때문에 요소 하나하나를 텍스트처럼 취급한다. 그래서 엔터가 있을 경우 하나의 스페이스로 변경하여 출력해준다.

        그래서 html 태그들을 일자로 쭉 나열해서 적어야 하는 경우가 발생한다.

    - **방법2.** `float: left;`

        문제점 : 해당 요소들이 담겨있던 컨테이너의 widht가 사라져버린다.

- **사용 :** 부모 요소에 `display: flex;`
<br>
<br>

## 2. flex container, flex item, main axis, cross axis

> **flex container :** 아이템들을 감싸고 있는 **부모 영역.**

> **flex item :** 부모 내부의 **정렬할 아이템들.**

- flex container, item 각각에 사용할 수 있는 속성이 다르다.
- item 내부에 다른 item이 있을 수 있다. 내부 item들에게는 부모가 된다.
- 내부 item들은 한 줄로 나열된다. 부모 크기가 줄어들 때 item 내에 값이 item의 width 보다 작게 들어있으면, 모든 item들이 한 줄에 들어갈 수 있도록 함께 줄어든다.

> **main axis :** 주축, 가로축(기본값)

> **cross axis :** 교차축, 세로축(기본값)

- 주축을 별도로 변경할 수 있다.
<br>
<br>

## 3. Container - `display`, `flex-direction`, `flex-wrap`, `flex-flow`(shorthand)

### 3-1. `display` 속성

> **내부 아이템이 아니라 컨테이너에 정의하는 것이다.**

- 바깥쪽, 안쪽에 사용하는 속성이 나누어져 있다.
- **바깥쪽 :** `block`, `inline`
    - 어떤 한 요소가 있을 때, 해당 요소 양 옆의 **바깥쪽 요소들과의 관계**(정렬)를 정의하는 것.
- **안쪽 :** `flex`, `grid`
    - 어떤 한 요소의 **내부에 있는 아이템들을 정렬**하는 방법.
- "`-`"를 사용하여 바깥쪽, 안쪽을 동시에 정의해 줄 수 있다. (ex. `display: inline-flex;`)

### 3-2. `flex-direction` 속성

> **컨테이너 내의 아이템**을 배치할 때 사용할 **주축과 방향을 지정**한다.

- **기본값 :** `row`
    - `row` : 주축(x축, 가로), 방향(왼→오)

        ![https://user-images.githubusercontent.com/77854486/132950734-709b284c-8c39-4818-85dc-b6369515da8c.png](https://user-images.githubusercontent.com/77854486/132950734-709b284c-8c39-4818-85dc-b6369515da8c.png)

    - `row-reverse` : 주축(x축, 가로), 방향(오→왼)

        ![https://user-images.githubusercontent.com/77854486/132950712-6a38630c-1030-4529-8cca-a4ef0c213ba9.png](https://user-images.githubusercontent.com/77854486/132950712-6a38630c-1030-4529-8cca-a4ef0c213ba9.png)

    - `column` : 주축(y축, 세로), 방향(위→아래)

        ![https://user-images.githubusercontent.com/77854486/132950764-32587fcb-de58-4481-a8d2-c395d0a1e672.png](https://user-images.githubusercontent.com/77854486/132950764-32587fcb-de58-4481-a8d2-c395d0a1e672.png)

    - `column-reverse` : 주축(y축, 세로), 방향(아래→위)

        ![https://user-images.githubusercontent.com/77854486/132950803-870a9f54-7464-4643-85c2-26f0a5cdf47d.png](https://user-images.githubusercontent.com/77854486/132950803-870a9f54-7464-4643-85c2-26f0a5cdf47d.png)

- **예제**

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
      height: 350px;
      border: 5px dashed orange;
      display: flex;
      flex-direction: row;
    }

    .item {
      width: 50px;
      height: 50px;
      margin: 5px;
      background-color: palegoldenrod;
      border: 3px solid yellowgreen; 
    }
    ```

### 3-3. `flex-wrap` 속성

> flex item 요소들의 크기가 변경되지 않도록 감싸준다.

- flex item 요소들을 한 줄에 배치되게 할 지, 영역 내를 벗어나지 않고 여러 행으로 배치되게 할 지 결정한다.
- **속성값**
    - `nowrap` : 기본값이다. 강제로 한 줄에 배치된다. 부모 요소의 `width` 크기가 부족하면 다음 줄로 넘어가서 보여진다.

        ![https://user-images.githubusercontent.com/77854486/132956087-35129e52-8d7a-4639-bada-eecadd452727.png](https://user-images.githubusercontent.com/77854486/132956087-35129e52-8d7a-4639-bada-eecadd452727.png)

    - `wrap` : flex item 요소들이 여러 행에 걸쳐 배치된다.

        ![https://user-images.githubusercontent.com/77854486/132956105-daeea417-c10b-44f5-bc79-8a68e6451381.png](https://user-images.githubusercontent.com/77854486/132956105-daeea417-c10b-44f5-bc79-8a68e6451381.png)

    - `wrap-reverse` : `wrap` 과 동일하게 여러 행에 걸쳐 배치되는데, 요소의 시작점과 끝점의 기준이 반대가 된다.

        ![https://user-images.githubusercontent.com/77854486/132956119-27c0498e-a32e-4e9c-9fc9-41a8f379b163.png](https://user-images.githubusercontent.com/77854486/132956119-27c0498e-a32e-4e9c-9fc9-41a8f379b163.png)

- `flex-direction`에 의해 `nowrap`, `wrap`의 시작점이 결정된다.
- **예제**

    ```html
    <div class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">6</div>
        <div class="item">7</div>
        <div class="item">8</div>
        <div class="item">9</div>
    </div>
    ```

    ```css
    .container {
      height: 350px;
      border: 5px dashed orange;
      display: flex;
      flex-wrap: wrap;
    }

    .item {
      width: 50px;
      height: 50px;
      margin: 5px;
      background-color: palegoldenrod;
      border: 3px solid yellowgreen; 
    }
    ```

### 3-4. `flex-flow`(shorthand)

> `flex-direction`과 `flex-wrap`을 함께 사용할 수 있는 단축속성.

- 공백으로 구분하여 작성한다.
- `flex-direction` 속성값 4가지, `flex-wrap` 속성값 3가지 총 12개의 조합이 나온다.
- **사용 : ex)** `flex-flow: column wrap;`
<br>
<br>

## 4. Item - `order`, `flex-grow`, `flex-shrink`, `flex-basis`, `flex`(shorthand)

### 4-1. `order` 속성

> flex container 안에서 **해당 item의 배치 순서를 지정**한다.

- 실제로 바뀌는 것이 아니라, **눈으로 보이는 순서만 변경**된다.
- **속성값**
    - `0` : 기본값이다. 해당 속성을 변경한 item이 없다면 코드 순서대로 출력된다.
    - `<integer>` : 음수, 양수 모두 사용할 수 있다.
- 숫자가 클수록 뒷쪽으로 들어간다.
- **예제**
    - 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9
    - 5 → 6 → 1 → 2 → 4 → 7 → 9 → 3 → 8

    ![https://user-images.githubusercontent.com/77854486/132956238-c3ee3502-c458-4e79-826d-17e3a315fc05.png](https://user-images.githubusercontent.com/77854486/132956238-c3ee3502-c458-4e79-826d-17e3a315fc05.png)

    ```html
    <div class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">6</div>
        <div class="item">7</div>
        <div class="item">8</div>
    </div>
    ```

    ```css
    .container {
      height: 350px;
      border: 5px dashed orange;
      display: flex;
    }

    .item {
      width: 50px;
      height: 50px;
      margin: 5px;
      background-color: palegoldenrod;
      border: 3px solid yellowgreen; 
    }

    .item:nth-child(3) {
      order : 1;
    }

    .item:nth-child(5) {
      order : -1;
    }

    .item:nth-child(7) {
      order : 3;
    }
    ```

### 4-2. `flex-grow`, `flex-shrink`, `flex-basis` 속성

> `flex-grow` : `item` 요소가 `container` 요소보다 크기가 작을 때 남는 공간이 있으면, 차지할 수 있는 만큼의 자리를 차지한다.

- `container`의 `flex-wrap: wrap` 속성과 함께 쓰면, 아래로 내려간 item들끼리 아래의 공간을 다 차지한다.
- **늘어난 영역의 크기를 적용한 비율만큼 나눠갖는다.**
- 헤더를 만들 때 유용하다.
- **속성값**
    - `0` : 기본값이다. 늘어나지 않는다.
    - `<number>` : 음수를 제외한 숫자를 허용한다. (소수점 가능)

        ex) 5개의 요소를 모두 1로 지정할 경우, 5개의 item이 한 줄을 5등분으로 나눠서 1씩 차지한다.

        ![https://user-images.githubusercontent.com/77854486/132956371-07c1064b-40f0-45a0-beb3-ca8f1030106f.png](https://user-images.githubusercontent.com/77854486/132956371-07c1064b-40f0-45a0-beb3-ca8f1030106f.png)

        ex) 3개의 요소를 각각 0(x), 2, 1로 지정할 경우, 원본 크기(50px) 3개를 제외한 남은 자리를 3으로 나눠서 2번째 요소가 2, 3번째 요소가 1씩 갖는다.

        ![https://user-images.githubusercontent.com/77854486/132956528-669967bf-5175-4c6c-a136-bff8fef14911.png](https://user-images.githubusercontent.com/77854486/132956528-669967bf-5175-4c6c-a136-bff8fef14911.png)

> `flex-shrink` : grow와 반대로, `item` 요소가 `container` 요소보다 크기가 클 때, 칸을 줄인다.

- **줄어든 영역의 크기를 적용한 비율만큼 나눠갖는다.**
- **속성값**
    - `1` : 기본값이다. 똑같은 비율로 줄어들기 때문에, `container`가 작을 때 자동으로 itme의 크기가 줄어든다.
    - `0` : 크기가 줄어들지 않는다. `container` 요소를 넘어설 수 있다.

        ![https://user-images.githubusercontent.com/77854486/132956823-a013672b-87b6-4083-b1ea-60193b898aea.png](https://user-images.githubusercontent.com/77854486/132956823-a013672b-87b6-4083-b1ea-60193b898aea.png)

    - `<number>` : 음수를 허용하지 않는 숫자.

        ex) 0(x), 2, 1 → 숫자가 큰 2번째 요소가 먼저 2배 줄어든다.

        ![https://user-images.githubusercontent.com/77854486/132956881-738fb0d8-3950-4051-a821-3b79be3e233e.png](https://user-images.githubusercontent.com/77854486/132956881-738fb0d8-3950-4051-a821-3b79be3e233e.png)

- **예제**

    ```html
    <div class="container">
    	<div class="item">1</div>
    	<div class="item">2</div>
    	<div class="item">3</div>
    </div>
    ```

    ```css
    .container {
      height: 200px;
      border: 5px dashed orange;
      display: flex;
    }

    .item {
      width: 200px;
      height: 50px;
      margin: 5px;
      background-color: palegoldenrod;
      border: 3px solid yellowgreen;
    }

    .item:nth-child(2) {
      flex-shrink: 2;
    }

    .item:nth-child(3) {
      flex-shrink: 1;
    }
    ```

> `flex-basis` : flex item의 초기 크기, 기본 크기(`grow`, `shrink` 되지 않은)를 지정한다.

- 지정해두지 않으면, 각 item의 `content`에 따라, `grow`, `shrink`의 크기가 달라질 수 있다.
- basis가 있으면, basis 크기를 제외한 나머지 영역의 비율로 계산하게 된다.
- basis를 0으로 주게 되면, 모든 영역의 비율로 계산하여 좀 더 직관적이다.
- **속성값**
    - `auto` : 기본값이다. (shorthand에서 제외)
    - `<lenght>`
    - `<percentage>`
- **예제**

    ![https://user-images.githubusercontent.com/77854486/132957177-accdd659-ccfc-4a92-8b9e-14c721b5ddbe.png](https://user-images.githubusercontent.com/77854486/132957177-accdd659-ccfc-4a92-8b9e-14c721b5ddbe.png)

    ```html
    <div class="container">
    	<div class="item">1</div>
    	<div class="item">2</div>
    	<div class="item">3</div>
    </div>
    ```

    ```css
    .container {
      height: 200px;
      border: 5px dashed orange;
      display: flex;
    }

    .item {
      width: 200px;
      height: 50px;
      margin: 5px;
      background-color: palegoldenrod;
      border: 3px solid yellowgreen;
    	flex-basis: 0;
    }

    .item:nth-child(1) {
      flex-grow: 3;
    }

    .item:nth-child(2) {
      flex-grow: 5;
    }

    .item:nth-child(3) {
      flex-grow: 5;
    }
    ```

### 4-3. `flex`(shorthand)

> flex item이 flex container 내에서 차지하는 공간을 설정하는 단축속성.

- `flex-grow`, `flex-shrink`, `flex-basis` 속성을 포함한다.
- **속성값**
    - `initial` : `flex: 0 1 auto;` 와 동일하다.
    - `auto` : `flex: 1 1 auto;` 와 동일하다.
    - `none` : `flex: 0 0 auto;` 와 동일하다.
    - **값이 한 개일 때**
        - 값이 `<number>`일 경우, `<flex-grow>`로 설정.
        - 값이 `<lenght>` 또는 `<percentage>`일 경우, `<flex-basis>`로 설정.
        - 키워드 `none`, `auto`, `initial` 사용 가능.
    - **값이 두 개일 때**
        - 첫 번째 값은 `<number>`여야 하고 `<flex-grow>`로 설정한다.
        - 두 번째 값은 `<number>`가 오면 `<flex-shrink>`로 설정하고, `<lenght>`, `<percentage>`, 또는 `auto`가 오면 `<flex-basis>`로 설정한다.
    - **값이 세 개일 때**
        1. `<flex-grow>`에 사용할 `<number>`
        2. `<flex-shrink>`에 사용할 `<number>`
        3. `<flex-basis>`에 사용할 `<length>`, `<percentage>` 또는 `auto`
- **주의**
    - 보통 shorthand에 값을 작성하지 않으면 기본값이 들어가는데, `flex-basis`는 `auto`(기본값)값이 들어가지 않는다.

        **한 개, 또는 두 개의 단위 없는 숫자 값을 속성값으로 사용할 때, `<flex-basis>`의 값은 `auto`가 아니라 `0`이 된다.**
<br>
<br>

## 5. Container - `justify-content`, `align-items`, `align-content`

> `justify-content`, `align-items`, `align-content` 모두 정렬에 대한 설정이다.

- `content`인 `justify-content`, `align-content`는 여러 개의 item들에 대한 정렬이고, `align-items`는 하나의 아이템의 위치에 대한 정렬이다.

### 5-1. `justify-content` 속성

> 주축을 기준으로 flex item들을 어떻게 정렬할지에 대한 설정.

- 브라우저 별로 지원 안 되는 속성이 꽤 있다.
- `flex-direction`, 즉 주축이 어떤 것인지에 따라 정렬 위치가 변한다.
- **속성값**
    - `flex-start` : 주축이 시작하는 위치부터 정렬한다.
    - `flex-end` : 주축이 끝나는 위치부터 정렬한다.
    - `center` : 주축을 기준으로 가운데 자리 잡는다.
    - `space-between` : container의 끝에 딱 맞게 붙고, 아이템들 사이에 동일한 간격을 가진다.
    - `space-around` : item들이 양옆에 동일한 사이 간격을 가진다.
- **예제**

    ![https://user-images.githubusercontent.com/77854486/132978236-65b8cb9b-c30a-4877-a8da-9a0df5974baa.png](https://user-images.githubusercontent.com/77854486/132978236-65b8cb9b-c30a-4877-a8da-9a0df5974baa.png)

    ```html
    <div class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
    </div>
    <div class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
    </div>
    <div class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
    </div>
    <div class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
    </div>
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
      display: flex;
      margin: 10px 0px;
    }

    .item {
      width: 50px;
      height: 50px;
      margin: 5px;
      border: 3px solid yellowgreen;
    }

    .container:nth-child(odd) .item {
      background-color: rgb(170, 238, 185);
    }

    .container:nth-child(even) .item {
      background-color: rgb(90, 132, 211);
    }

    .container:nth-child(1) {
      justify-content: flex-start;
    }

    .container:nth-child(2) {
      justify-content: flex-end;
    }

    .container:nth-child(3) {
      justify-content: center;
    }

    .container:nth-child(4) {
      justify-content: space-between;
    }

    .container:nth-child(5){
      justify-content: space-around;
    }
    ```

### 5-2. `align-items` 속성

> 교차축이 한 줄일 때에 대한 정렬을 설정한다.

- `flex`는 기본적으로 교차축에서는 여러 개의 줄을 가질 수 없다. 하나의 item들이 `height`를 가져서 container의 `height` 공간(교차축)이 남을 때, 교차축에서 어떻게 정렬할 것인지에 대해 설정한다.
- 교차축이 여러 줄이 될 경우, 한 줄마다 각각의 container를 가진 것으로 판단하고, 그 container를 기준으로 정렬된다.
- **속성값**
    - `stretch` : 기본값이다. itme들에 `height` 값이 정해져 있지 않을 때, 자동으로 부모 요소에서 차지할 수 있는 최대 `height`를 차지한다.
    - `flex-start` : 교차축의 시작점에 정렬한다.
    - `flex-end` : 교차축의 끝점에 정렬한다.
    - `center` : 교차축의 가운데 정렬한다.
- **예제**

    ![https://user-images.githubusercontent.com/77854486/132979018-78ffd5c8-7bf8-4527-954c-19c1922bab1a.png](https://user-images.githubusercontent.com/77854486/132979018-78ffd5c8-7bf8-4527-954c-19c1922bab1a.png)

    ```html
    <div class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
    </div>
    <div class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
    </div>
    <div class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
    </div>
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
      height: 200px;
      border: 5px dashed orange;
      display: flex;
      margin: 10px 0px;
      justify-content: center;
    }

    .item {
      width: 50px;
      margin: 5px;
      border: 3px solid yellowgreen;
    }

    .item:not(.container:nth-child(1) .item) {
      height: 50px;
    }

    .container:nth-child(odd) .item {
      background-color: rgb(170, 238, 185);
    }

    .container:nth-child(even) .item {
      background-color: rgb(90, 132, 211);
    }

    .container:nth-child(1) {
      align-items: stretch;
    }

    .container:nth-child(2) {
      align-items: flex-start;
    }

    .container:nth-child(3) {
      align-items: flex-end;
    }

    .container:nth-child(4) {
      align-items: center;
    }
    ```

### 5-3. `align-content` 속성

> 교차축을 기준으로 여러 줄의 item들에 대한 정렬을 설정한다.

- **속성값**
    - `flex-start` : 교차축의 시작점에 붙는다.
    - `flex-end` : 교차축의 끝점에 붙는다.
    - `center` : 교차축의 중앙에 붙는다.
    - `space-between` : item들 사이에 교차축을 기준으로 동일한 간격을 가지고 부모 container의 `height` 위, 아래에 붙는다.
    - `space-around` : 각각의 item들 양옆에 동일한 간격을 가지고 부모 container의 `height` 위, 아래에 붙는다.
<br>
<br>

## 6. Item - `align-self`

> 부모 container의 교차축을 기준으로 하나의 요소에 적용할 수 있는 정렬이다.

- 부모 container에서 정의한 `align-itmes` **값을 무시하고, 요소에 적용**된다.
- flex item에 사용하는 속성이다.
- `align-items`와 동일한 속성값을 갖는다.
<br>
