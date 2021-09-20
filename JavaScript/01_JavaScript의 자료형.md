# JavaScript
> 브라우저 제어(이벤트 조작)를 하기 위해 넷스케이프에서 개발한 프로토타입 기반 언어.
- 선언 시 let(변수), const(상수)를 사용한다.
- 동적 언어이므로 자료형을 선언할 필요가 없다.
<br>

## JavaScript의 자료형
> **원시 자료형(Primitive value)** : 객체가 아니면서 메서드도 가지지 않는 데이터이다.

- `Boolean`, `Null`, `Undefined`, `Number`, `BigInt`, `String`, `Symbol` 7종류가 있다. 
- 모든 원시 값은 불변하여 변형할 수 없다.
- 원시 값 자체와, 원시값을 할당한 변수를 혼동하지 않아야 한다.
- 원시값의 불변에 대해서는 [여기](https://developer.mozilla.org/ko/docs/Glossary/Primitive#javascript_2)를 참조한다. 

> **객체(Object)** : key와 value의 매핑이다.

- 원시 자료형을 제외한 모든 자료형이다.
- key는 문자열, value는 어떤 값도 가능하다.
- 참조 자료형이라고도 한다.

|구분|자료형|설명|예시|
|-|-|-|-|
|**Primitive value**|**Boolean**|논리적인 요소를 나타낸다.|true, false, 1, 0|
||**Null**|값이 의도적으로 비어있음을 나타낸다.<br>null 값만을 가질 수 있다.<br>Boolean 연산에서 거짓으로 취급된다.|null|
||**Undefined**|값을 할당하지 않음을 나타낸다.|값을 할당받지 않은 메서드, 변수.<br>명시적으로 값을 반환하지 않는 함수|
||**Number**|숫자형을 나타낸다.<br>`+Infinity`, `-Infinity`, `NaN`(Not a Number)와 같은 상징적인 값들도 표현할 수 있다|0, 432, `NaN` 등|
||**BigInt**|`Number`의 한계를 넘어서는 큰 정수를 나타낸다.<br>`Number`로 교체할 수 없다.|정수 끝에 n을 추가하거나 생성자를 호출하여 생성|
||**String**|텍스트 데이터를 나타낸다.|"hello", "world" 등|
||**Symbol**|유일하고 변경 불가능(immutable)한 기본값을 나타낸다.<br>ECMAScript6에서 추가되었다.|객체의 key 값|
|**Object**|**Arrays**|정수 key를 가지는 일련의 값들을 표현하는 객체이다.|리스트, 집합 등|

<br>

## 참고
- [원시 값 - MDN](https://developer.mozilla.org/ko/docs/Glossary/Primitive)
- [자바스크립트의 자료형 - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures)
<br>
