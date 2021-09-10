## 1. transform(변형) 개요

> 요소에 크기 조절, 회전, 이동 등의 효과를 부여할 수 있다.

- `position` 속성은 실제 요소의 위치가 변경되는 것에 반해, `transform`은 원본은 유지하되 시각적으로만 변화한다.
- `transform` 속성의 속성값만 변경하여 구현한다. 속성들은 함수로 이루어져 있다.
- 공백으로 구분하여 여러 개의 함수를 한 번에 쓸 수도 있다.
- 오른쪽에서 왼쪽 순서로 먼저 적용된다.
- **속성값**
    - `none` : 기본값.
    - `<transform-function>` : 요소의 외형에 영향을 주는 변형 함수. 2D 또는 3D가 있다.
<br>
<br>

## 2. 크기 - scale()

> 요소의 크기를 조절한다.

- **사용 :** `scale(sx)` 또는 `scale(sx, sy)`
    - `sx`, `sy`는 `<number>` 값이 들어갈 수 있다.
    - `sx`는 가로축, `sy`는 세로축의 값이 들어간다.
    - `<number>` : 음수, 양수, 0, 소수점을 포함하는 숫자.
- `scaleX(sx)`, `scaleY(sy)`도 존재한다.
<br>
<br>

## 3. 회전 - rotate()

> 요소를 회전시킨다.

- **사용 :** `rotate(a)`
- `<angle>` : 각도 관련 자료형.
    - `deg` : 각도를 나타내는 단위.
    - `turn` : 1turn = 1바퀴 = 360도
- 90deg = 0.25turn
- 180deg = 0.5turn
- 양수는 시계 방향, 음수는 반시계 반향으로 회전한다.
<br>
<br>

## 4. 이동 - translate()

> 요소의 원본 중앙을 기준으로 이동시킨다.

- **사용 :** `translate(sx, sy)`, `translateX(sx)`, `translateY(sy)`
    - `sx`는 x축 `sy`는 y 픽셀을 의미한다.
    - `sy`는 생략 가능하다. 하나만 입력하면 `x축`으로 이동한다.
    - 음수, 양수 퍼센트 모두 입력 가능하다.
- `translateX(sx)`, `translateY(sy)`도 존재한다.
<br>
<br>

## 5. 기울이기 - skew()

> 요소를 기울인다. (\ | /)

- **사용 :** `skew(sx, sy)`, `skewX(sx)`, `skewY(sy)`
- `<angle>` 자료형이 들어갈 수 있다.
- `90deg`는 기울임이 평면(ㅡ)이 돼서 보이지 않는다.
<br>
<br>

## 6. 기준점 - transform-origin

> 기준점을 변경할 때 사용한다.

- 기존값은 center이다. (x의 50%, y의 50%)
- 원하는 위치 값을 `px`, `%`, `키워드` 등으로 입력할 수 있다.
<br>
<br>

## 7. 예제

### 7-1.

![https://user-images.githubusercontent.com/77854486/132732493-c6480420-6af1-457a-99a7-03e71d30b4ec.png](https://user-images.githubusercontent.com/77854486/132732493-c6480420-6af1-457a-99a7-03e71d30b4ec.png)

### HTML

```html
<img id="sample1" src="./imageSample.jpg" >
<img id="sample2" src="./imageSample.jpg" >
<img id="sample3" src="./imageSample.jpg" >
```

### CSS

```css
#sample1 {
    border: 5px solid red;
    transform: scale(0.3);
}

#sample2 {
    border: 5px solid yellow;
    transform: scale(0.3) rotate(-45deg);
}

#sample3 {
    border: 5px solid blue;
    transform: scale(0.5) translate(200px);
}
```

### 7-2.

![https://user-images.githubusercontent.com/77854486/132732953-83a216fe-1c24-4826-a36b-c18d9db835c1.png](https://user-images.githubusercontent.com/77854486/132732953-83a216fe-1c24-4826-a36b-c18d9db835c1.png)

### HTML

```html
<img id="sample1" src="./imageSample.jpg" >
<img id="sample2" src="./imageSample.jpg" >
<img id="sample3" src="./imageSample.jpg" >
```

### CSS

```css
#sample1 {
    border: 5px solid red;
    transform: scale(0.7) skew(30deg);
}

#sample2 {
    border: 5px solid yellow;
    transform: scale(0.3) skew(80deg);
}

#sample3 {
    border: 5px solid blue;
    transform: rotate(30deg);
    transform-origin: left top;
}
```
<br>


